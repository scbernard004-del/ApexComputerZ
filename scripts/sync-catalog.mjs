import {readFile, writeFile} from 'node:fs/promises';
import {dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const jsonPath = resolve(root, 'data/catalog.json');
const jsPath = resolve(root, 'catalog.js');
const data = JSON.parse(await readFile(jsonPath, 'utf8'));
await writeFile(jsPath, `window.SHOP_DATA = ${JSON.stringify(data)};\n`, 'utf8');
console.log(`Synced ${data.products.length} products and ${data.media.length} media items to catalog.js`);
