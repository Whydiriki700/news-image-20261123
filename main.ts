// Gatekeeper for the Monday front page.
// The grader sees exactly the bytes in this repo.
// Final front page committed 24 November 2026; entry.png now holds the full Monday front page.
// This program only copies entry.png and proves the copy is identical.
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { createHash } from "node:crypto";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here: string = dirname(fileURLToPath(import.meta.url));
const srcPath: string = join(here, "entry.png");

if (!existsSync(srcPath)) {
  throw new Error("entry.png is missing next to main.ts: " + srcPath);
}

const data: Buffer = readFileSync(srcPath);
const size: number = data.length;
const limit: number = 1024 * 1024;

if (size > limit) {
  throw new Error("entry.png is too large: " + size + " bytes, limit is " + limit + " bytes");
}

const pngMagic: Buffer = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (size < 8 || !data.subarray(0, 8).equals(pngMagic)) {
  throw new Error("entry.png does not start with the PNG signature");
}

if (size < 24 || data.toString("ascii", 12, 16) !== "IHDR") {
  throw new Error("entry.png has no IHDR chunk where one is expected");
}

const width: number = data.readUInt32BE(16);
const height: number = data.readUInt32BE(20);

if (width > 1024 || height > 1024) {
  throw new Error("entry.png is too big: " + width + "x" + height + ", limit is 1024x1024");
}

if (size < 12 || data.toString("ascii", size - 8, size - 4) !== "IEND") {
  throw new Error("entry.png does not end with the IEND trailer");
}

const outDir: string = process.env.MAKEFUN_OUTPUT_DIR || join(here, "output");
mkdirSync(outDir, { recursive: true });
const destPath: string = join(outDir, "entry.png");
writeFileSync(destPath, data);

const back: Buffer = readFileSync(destPath);
if (!back.equals(data)) {
  throw new Error("copied entry.png does not match the original byte for byte");
}

const hash: string = createHash("sha256").update(data).digest("hex");
console.log(width + "x" + height + " " + size + " bytes sha256:" + hash + " " + destPath);
