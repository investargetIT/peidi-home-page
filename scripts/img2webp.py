#!/usr/bin/env python
"""Convert image formats Claude Code cannot read into webp/png it can.

The API gateway only accepts inline images as image/png, image/jpeg or
image/webp. Reading a .gif/.ico/.bmp stores an image/gif block in the session
transcript, and every later request then fails with
    400 Only https image URLs are fetched
So convert first, then read the converted file.

用法 / usage:
    python scripts/img2webp.py <file|dir> [more...] [-o OUTDIR] [--png] [--frame N]

示例 / examples:
    python scripts/img2webp.py src/pages/NewsCenter/News/components/News45/images/image1.gif
    python scripts/img2webp.py src/pages/NewsCenter/News -o .tmpimg
"""
import argparse
import base64
import hashlib
import io

import sys
import tempfile
from pathlib import Path

from PIL import Image, features

# 网关白名单：这三种可以原样内联
SAFE_EXT = {".png", ".jpg", ".jpeg", ".webp"}
# 需要转换的格式
NEED_CONVERT = {".gif", ".ico", ".bmp", ".tif", ".tiff", ".avif", ".ppm", ".pgm", ".tga"}
# Pillow 读不了的，给出明确提示
UNSUPPORTED = {".svg", ".svgz"}


def out_name(src: Path, outdir: Path, ext: str, suffix: str = "") -> Path:
    digest = hashlib.sha1(str(src.resolve()).encode("utf-8")).hexdigest()[:8]
    return outdir / f"{src.stem}{suffix}-{digest}{ext}"


def convert(src: Path, outdir: Path, want_png: bool, frame: int) -> int:
    ext = src.suffix.lower()
    if ext in UNSUPPORTED:
        print(f"[skip] {src}: Pillow cannot decode {ext}; screenshot it to png instead")
        return 1
    if ext in SAFE_EXT:
        print(f"[safe] {src}: already png/jpeg/webp, Read it directly")
        return 0
    if ext not in NEED_CONVERT:
        print(f"[skip] {src}: unknown extension {ext or '(none)'}")
        return 0

    try:
        im = Image.open(src)
    except Exception as exc:  # noqa: BLE001
        print(f"[fail] {src}: cannot open ({exc})")
        return 1

    frames = getattr(im, "n_frames", 1)
    orig_size = im.size
    orig_format = im.format
    if frames > 1:
        frame = min(frame, frames - 1)
        im.seek(frame)

    has_alpha = im.mode in ("RGBA", "LA") or (
        im.mode == "P" and "transparency" in im.info
    )
    if want_png:
        target_ext, fmt = ".png", "PNG"
        out = im.convert("RGBA" if has_alpha else "RGB")
    else:
        target_ext, fmt = ".webp", "WEBP"
        out = im.convert("RGBA" if has_alpha else "RGB")

    dst = out_name(src, outdir, target_ext)
    kwargs = {"optimize": True}
    if fmt == "WEBP":
        kwargs.update(quality=85, method=6)
    buf = io.BytesIO()
    out.save(buf, format=fmt, **kwargs)
    data = buf.getvalue()
    dst.write_bytes(data)

    note = f"{orig_format} {orig_size[0]}x{orig_size[1]}"
    if frames > 1:
        note += f", {frames} frames -> frame {frame} only"
    print(
        f"[ok] {src}\n     -> {dst}\n     {note}, converted to {fmt}, "
        f"{len(data)} bytes (b64 {len(base64.b64encode(data))})"
    )
    return 0


def main() -> int:
    ap = argparse.ArgumentParser(
        description="Convert gif/ico/bmp/tiff to webp or png that the API gateway accepts"
    )
    ap.add_argument("paths", nargs="+", help="image files or directories")
    ap.add_argument("-o", "--outdir", default=None, help="output dir (default: temp)/claude-img")
    ap.add_argument("--png", action="store_true", help="write png instead of webp")
    ap.add_argument("--frame", type=int, default=0, help="which gif frame to keep (default 0)")
    args = ap.parse_args()

    if not features.check("webp") and not args.png:
        print("Pillow has no webp support; rerun with --png", file=sys.stderr)
        return 1

    outdir = Path(args.outdir) if args.outdir else Path(tempfile.gettempdir()) / "claude-img"
    outdir.mkdir(parents=True, exist_ok=True)

    rc = 0
    for raw in args.paths:
        p = Path(raw)
        if p.is_dir():
            for f in sorted(p.rglob("*")):
                if f.is_file() and f.suffix.lower() in (NEED_CONVERT | UNSUPPORTED | SAFE_EXT):
                    rc |= convert(f, outdir, args.png, args.frame)
        elif p.is_file():
            rc |= convert(p, outdir, args.png, args.frame)
        else:
            print(f"[skip] {p}: not found")
            rc = 1
    print(f"\noutput dir: {outdir}")
    return rc


if __name__ == "__main__":
    sys.exit(main())
