import fs from 'fs/promises';

const EXCLUDED_FILES = ['.git', 'dist', 'build.js'];
async function deleteFiles() {
	const all_files = await fs.readdir('.');

	all_files.forEach((file) => {
		if (!EXCLUDED_FILES.includes(file)) {
			fs.rm(file, { recursive: true, force: true });
		}
	});
}

async function moveFiles() {
	fs.cp('./dist/', './', { force: true, recursive: true }).then(() => {
		fs.rm('./dist', { force: true, recursive: true });
	});
}

function createCNAMEFile() {
	fs.writeFile('./CNAME', 'questone.duckdns.org');
}
deleteFiles().then(moveFiles);
