# Builds numbered contact sheets per folder for curation.
import os, json, sys
from PIL import Image, ImageDraw

BASE = r"D:\Artes\SteelArt\STEEL ARTE fotos"
OUT = r"D:\Artes\SteelArt\public\images"
THUMB = 260
COLS = 5
MAXN = 20

folders = sys.argv[1:] if len(sys.argv) > 1 else [
    "FACHADAS", "DIVISÓRIAS", "OBJETOS DECORATIVOSDE E DECORAÇÃO",
    "PERGOLADOS", "GUARDA CORPO FERRO", "JANELAS",
]

def imgs(folder):
    p = os.path.join(BASE, folder)
    fs = [f for f in os.listdir(p) if f.lower().endswith((".jpg", ".jpeg", ".png"))]
    fs.sort(key=lambda f: -os.path.getsize(os.path.join(p, f)))  # biggest first
    return fs[:MAXN]

mapping = {}
for folder in folders:
    fs = imgs(folder)
    rows = (len(fs) + COLS - 1) // COLS
    sheet = Image.new("RGB", (COLS * THUMB, rows * THUMB), (20, 20, 18))
    d = ImageDraw.Draw(sheet)
    fmap = {}
    for i, f in enumerate(fs):
        try:
            im = Image.open(os.path.join(BASE, folder, f)).convert("RGB")
        except Exception:
            continue
        im.thumbnail((THUMB - 8, THUMB - 8))
        x = (i % COLS) * THUMB; y = (i // COLS) * THUMB
        sheet.paste(im, (x + 4, y + 4))
        tag = str(i)
        d.rectangle([x + 4, y + 4, x + 4 + 9 * len(tag) + 8, y + 22], fill=(0, 0, 0))
        d.text((x + 9, y + 7), tag, fill=(255, 210, 130))
        fmap[i] = f
    safe = folder.replace(" ", "_").replace("Ó", "O").replace("Ç", "C").replace("Ã", "A")[:16]
    path = os.path.join(OUT, f"_sheet_{safe}.jpg")
    sheet.save(path, quality=82)
    mapping[folder] = {"sheet": os.path.basename(path), "files": fmap}

print(json.dumps(mapping, ensure_ascii=False, indent=1))
