import fs from 'fs/promises';

const EXCLUDED_FILES = ['.git', 'dist', 'build.js'];

const all_files = await fs.readdir('.');

all_files.forEach((file) => {
	if (!EXCLUDED_FILES.includes(file)) {
		fs.rm(file, { recursive: true, force: true });
	}
});

fs.cp('./', '.', { force: true, recursive: true });
