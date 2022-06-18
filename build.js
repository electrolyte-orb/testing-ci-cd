import fs from 'fs/promises';

const EXCLUDED_FILES = ['.git', 'dist', 'build.js'];
function deleteFiles() {
   const all_files = await fs.readdir('.');

   all_files.forEach((file) => {
      if (!EXCLUDED_FILES.includes(file)) {
         fs.rm(file, { recursive: true, force: true });
      }
   });
}

function moveFiles() {
   const distFiles = await fs.readdir('dist')

   distFiles.forEach(file => {
      fs.cp(`./dist/${file}`, './', { force: true, recursive: true }).then(() => {
         fs.rm(`./dist/${file}`, { recursive: true, force: true });
      });
   })
}

