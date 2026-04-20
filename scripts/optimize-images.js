const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = "./public/img";
const outputDir = "./public/optimized";

if (!fs.existsSync(outputDir)) {
	fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdirSync(inputDir).forEach(async (file) => {
	if (!file.match(/\.(jpg|jpeg|png)$/)) return;

	const inputPath = path.join(inputDir, file);
	const cleanName = file.replace(/\.[^/.]+$/, "");

	try {
		const metadata = await sharp(inputPath).metadata();
		const isPortrait = metadata.height > metadata.width;
		const resizeOptions = [
			isPortrait ? null : 1000,
			isPortrait ? 1000 : null,
			{ withoutEnlargement: true },
		];

		await sharp(inputPath)
			.resize(...resizeOptions)
			.avif({ quality: 70 })
			.toFile(path.join(outputDir, `${cleanName}.avif`));

		await sharp(inputPath)
			.resize(...resizeOptions)
			.webp({ quality: 70 })
			.toFile(path.join(outputDir, `${cleanName}.webp`));

		await sharp(inputPath)
			.resize(...resizeOptions)
			.jpeg({ quality: 70, progressive: true })
			.toFile(path.join(outputDir, `${cleanName}.jpg`));

		console.log(`✓ ${file}`);
	} catch (err) {
		console.error(`✗ ${file}:`, err.message);
	}
});