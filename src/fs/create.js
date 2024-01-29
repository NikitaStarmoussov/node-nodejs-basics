import fs from 'fs';
import { promises as fsPromises } from 'fs';
import path from 'path';
const create = async () => {
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const filesPath = path.join(__dirname, 'files');
const filesCopyPath = path.join(__dirname, 'files_copy');

try {
    const sourceExists =  fs.existsSync(filesPath);
    const destinationExists =  fs.existsSync(filesCopyPath);
    if (!sourceExists || destinationExists) {
      throw new Error('FS operation failed');
    } else {
      await fsPromises.mkdir(filesCopyPath);
      const files = await fsPromises.readdir(filesPath);
      for (const file of files) {
        const sourceFile = `${filesPath}/${file}`;
        const destinationFile = `${filesCopyPath}/${file}`;
        await fsPromises.copyFile(sourceFile, destinationFile);
      }
      console.log('Directory copied successfully');
    }
  } catch (err) {
    console.error(err.message);
  }
};

await create();