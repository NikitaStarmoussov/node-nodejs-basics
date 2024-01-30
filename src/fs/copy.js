import fs from 'fs';
import path from 'path';


const copy = async () => {
    const __dirname = path.dirname(new URL(import.meta.url).pathname);
const filePath = path.join(__dirname, 'files', 'fresh.txt');
try{
if (fs.existsSync(filePath)) {
  throw new Error('FS operation failed: File already exists');
} else {
  fs.writeFileSync(filePath, 'I am fresh and young');
  console.log('File created successfully');
}} catch (err) {
  console.error(err);
}
};

await copy();
