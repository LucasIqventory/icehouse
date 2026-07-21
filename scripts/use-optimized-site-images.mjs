import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

async function updateFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  await Promise.all(entries.map(async (entry) => {
    const filePath = join(directory, entry.name);
    if (entry.isDirectory()) {
      return updateFiles(filePath);
    }
    if (!/\.(html|jsx|js)$/.test(entry.name)) {
      return;
    }
    const source = await readFile(filePath, 'utf8');
    const updated = source.replace(/(?<!optimized)\/media\//g, '/optimized/media/');
    if (updated !== source) {
      await writeFile(filePath, updated);
    }
  }));
}

await updateFiles('src');
const indexSource = await readFile('index.html', 'utf8');
const updatedIndex = indexSource.replace(/(?<!optimized)\/media\//g, '/optimized/media/');
if (updatedIndex !== indexSource) {
  await writeFile('index.html', updatedIndex);
}