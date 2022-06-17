import fs from 'fs/promises';
import fsExtra from 'fs-extra';

const excludedFiles = ['.git', 'dist', 'build.js'];

const files = await fs.readdir('.');

files.forEach((file) => {
	if (!excludedFiles.includes(file)) {
		fs.rm(file, {
			force: true,
			recursive: true,
		});
	}
});

fsExtra.move('./dist/*', '*');
