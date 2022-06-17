import fs from 'fs/promises';
import path from 'path';

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

fs.cp('./dist/', '.', { recursive: true, force: true }).then(
	fs.rmdir(path.resolve('dist'))
);
