import { mkdir, readdir } from 'node:fs/promises';
import { join, parse, resolve } from 'node:path';
import sharp from 'sharp';

const mediaDirectory = resolve('public/media');
const outputDirectory = resolve('public/optimized/media');
const imageExtensions = new Set(['.avif', '.jpeg', '.jpg', '.png', '.webp']);
const heroImages = new Set(['tailgatehero', 'tailgatehero2', 'exteriorhero3']);

await mkdir(outputDirectory, { recursive: true });
const entries = await readdir(mediaDirectory, { withFileTypes: true });

await Promise.all(entries.filter((entry) => (
  entry.isFile() && imageExtensions.has(parse(entry.name).ext.toLowerCase())
)).map(async (entry) => {
  const { name } = parse(entry.name);
  await sharp(join(mediaDirectory, entry.name))
    .rotate()
    .resize({ width: heroImages.has(name) ? 1920 : 1280, withoutEnlargement: true })
    .avif({ quality: heroImages.has(name) ? 68 : 60, effort: 6 })
    .toFile(join(outputDirectory, `${name}.avif`));
}));