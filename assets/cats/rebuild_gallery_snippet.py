"""Scan coco/ and gaga/ and print HTML gallery-item snippets for gallery.html."""
from pathlib import Path

ROOT = Path(__file__).parent
EXTS = {".jpg", ".jpeg", ".png", ".webp"}

for cat, label in (("coco", "CoCo — Ragdoll"), ("gaga", "Gaga — domestic longhair")):
    folder = ROOT / cat
    files = sorted(
        p for p in folder.iterdir() if p.is_file() and p.suffix.lower() in EXTS
    )
    print(f"<!-- {cat}: {len(files)} photos -->")
    for p in files:
        rel = f"assets/cats/{cat}/{p.name}"
        name = "CoCo" if cat == "coco" else "Gaga"
        print(
            f'          <a class="gallery-item" href="{rel}" target="_blank" rel="noopener">\n'
            f'            <img src="{rel}" alt="{label}" loading="lazy" />\n'
            f'            <span class="gallery-cap">{name}</span>\n'
            f"          </a>"
        )
    print()
