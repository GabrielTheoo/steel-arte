// Captures a TRUE mobile-emulated screenshot via Chrome DevTools Protocol.
// Usage: node scripts/shot.mjs <url> <out.png> <width> <height> <mobile:0|1>
import { spawn } from "node:child_process";
import { writeFileSync } from "node:fs";
import { setTimeout as sleep } from "node:timers/promises";

const [url, out, wArg, hArg, mobileArg] = process.argv.slice(2);
const width = Number(wArg || 390);
const height = Number(hArg || 844);
const mobile = (mobileArg ?? "1") === "1";

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const PORT = 9377;
const userDir = `${process.env.TEMP}\\cdp_${Date.now()}`;

const chrome = spawn(CHROME, [
  "--headless=new",
  "--disable-gpu",
  "--no-sandbox",
  `--user-data-dir=${userDir}`,
  `--remote-debugging-port=${PORT}`,
  "--remote-allow-origins=*",
  "about:blank",
]);

async function getWsUrl() {
  for (let i = 0; i < 40; i++) {
    try {
      const r = await fetch(`http://127.0.0.1:${PORT}/json/version`);
      const j = await r.json();
      if (j.webSocketDebuggerUrl) return j.webSocketDebuggerUrl;
    } catch {}
    await sleep(150);
  }
  throw new Error("Chrome CDP not ready");
}

let id = 0;
function cmd(ws, method, params = {}, sessionId) {
  return new Promise((resolve) => {
    const msgId = ++id;
    const handler = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id === msgId) {
        ws.removeEventListener("message", handler);
        resolve(msg.result);
      }
    };
    ws.addEventListener("message", handler);
    ws.send(JSON.stringify({ id: msgId, method, params, sessionId }));
  });
}

const wsUrl = await getWsUrl();
const ws = new WebSocket(wsUrl);
await new Promise((res) => (ws.onopen = res));

// Create a target/tab and attach
const { targetId } = await cmd(ws, "Target.createTarget", { url: "about:blank" });
const { sessionId } = await cmd(ws, "Target.attachToTarget", { targetId, flatten: true });

await cmd(ws, "Page.enable", {}, sessionId);
await cmd(ws, "Runtime.enable", {}, sessionId);
await cmd(ws, "Emulation.setDeviceMetricsOverride", {
  width, height, deviceScaleFactor: Number(process.env.DPR || 2), mobile,
}, sessionId);
await cmd(ws, "Page.navigate", { url }, sessionId);
await sleep(3000);
if (process.env.STEPSCROLL === "1") {
  // Scroll through the whole page to trigger reveal-on-scroll + lazy images.
  const h = await cmd(ws, "Runtime.evaluate", {
    expression: "document.body.scrollHeight", returnByValue: true,
  }, sessionId);
  const total = h.result.value;
  for (let y = 0; y <= total; y += 600) {
    await cmd(ws, "Runtime.evaluate", { expression: `window.scrollTo(0, ${y})` }, sessionId);
    await sleep(250);
  }
  await cmd(ws, "Runtime.evaluate", { expression: "window.scrollTo(0, 0)" }, sessionId);
  await sleep(800);
}
if (process.env.CLICKSEL) {
  await cmd(ws, "Runtime.evaluate", {
    expression: `document.querySelector(${JSON.stringify(process.env.CLICKSEL)})?.click()`,
  }, sessionId);
  await sleep(900);
}
if (process.env.SCROLL) {
  await cmd(ws, "Runtime.evaluate", {
    expression: `window.scrollTo(0, ${Number(process.env.SCROLL)})`,
  }, sessionId);
  await sleep(1200);
}

const ev = await cmd(ws, "Runtime.evaluate", {
  expression: `JSON.stringify({sw:document.documentElement.scrollWidth, iw:window.innerWidth, h:document.body.scrollHeight, secs:[...document.querySelectorAll('main > section, main > div > section, section, footer')].map(s=>Math.round(s.getBoundingClientRect().top+window.scrollY))})`,
  returnByValue: true,
}, sessionId);
console.log("METRICS", ev.result.value);

const shot = await cmd(ws, "Page.captureScreenshot", { format: "png", captureBeyondViewport: process.env.FULLPAGE === "1" }, sessionId);
writeFileSync(out, Buffer.from(shot.data, "base64"));
console.log("SAVED", out);

ws.close();
chrome.kill();
process.exit(0);
