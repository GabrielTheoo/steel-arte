# Copies curated images to public/images with semantic names + builds a verification sheet.
import os, json
from PIL import Image, ImageDraw

BASE = r"D:\Artes\SteelArt\STEEL ARTE fotos"
OUT = r"D:\Artes\SteelArt\public\images"
F = "FACHADAS"; D = "DIVISÓRIAS"; O = "OBJETOS DECORATIVOSDE E DECORAÇÃO"
P = "PERGOLADOS"; G = "GUARDA CORPO FERRO"

# (semantic name, folder, original file)
CURATED = [
    # product cards
    ("prod-paineis.jpg",   F, "3e2696be-4242-40b1-8cf0-8ad245d45f97.jpg"),
    ("prod-divisorias.jpg",D, "d6f62ea5-6d75-44a4-85d4-1fa89e0f7530.jpg"),
    ("prod-brises.jpg",    F, "5edd61bb-27d5-4a0f-a2b8-19512cefca88.jpg"),
    ("prod-portoes.jpg",   F, "3b8f4385-298a-4858-b953-9c2e28732c27.jpg"),
    ("prod-portas.jpg",    F, "2d13e2f9-cf54-42d4-8cfb-c184ee258b45.jpg"),
    ("prod-guardacorpos.jpg", G, "guarda-corpo-de-ferro1.jpg"),
    ("prod-pergolados.jpg",P, "703650bb-496d-4ccf-bdb4-b28d9e42399d.jpg"),
    ("prod-objetos.jpg",   O, "30518ee9-3cad-4a7a-b2bb-2f90eca3afda.jpg"),
    # gallery teaser
    ("gal-1.jpg", D, "43f95e6e-fc4d-4d27-ae18-56b243930e88.jpg"),
    ("gal-2.jpg", P, "259c1ab9-bed9-47f9-ad73-f167ac81e593.jpg"),
    ("gal-3.jpg", P, "f08ed406-767c-400c-8f60-e346210926b7.jpg"),
    ("gal-4.jpg", O, "203abba1-8b45-4a44-b9ea-1185a020bb54.jpg"),
    ("gal-5.jpg", F, "979e28f6-f7b8-4280-981d-c473038cf100.jpg"),
    ("gal-6.jpg", D, "815ae172-bee2-4689-956f-ea4e940a270b.jpg"),
    ("gal-7.jpg", P, "1798a1bd-d953-4a8c-adc4-03f63b22f59a.jpg"),
    ("gal-8.jpg", F, "18129ef6-b74f-4d4f-b316-76a90750862b.jpg"),
]

ok = []
for name, folder, orig in CURATED:
    src = os.path.join(BASE, folder, orig)
    if not os.path.exists(src):
        print("MISSING", name, src); continue
    im = Image.open(src).convert("RGB")
    im.save(os.path.join(OUT, name), quality=88)
    ok.append((name, im.size))

# verification sheet
TH = 300; COLS = 4
rows = (len(ok) + COLS - 1) // COLS
sheet = Image.new("RGB", (COLS * TH, rows * TH), (20, 20, 18))
d = ImageDraw.Draw(sheet)
for i, (name, _) in enumerate(ok):
    im = Image.open(os.path.join(OUT, name)).convert("RGB")
    im.thumbnail((TH - 8, TH - 8))
    x = (i % COLS) * TH; y = (i // COLS) * TH
    sheet.paste(im, (x + 4, y + 4))
    d.rectangle([x + 4, y + 4, x + 4 + 8 * len(name) + 6, y + 20], fill=(0, 0, 0))
    d.text((x + 8, y + 6), name, fill=(255, 210, 130))
sheet.save(os.path.join(OUT, "_verify.jpg"), quality=82)
print(json.dumps({n: list(s) for n, s in ok}, indent=1))
