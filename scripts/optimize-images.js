const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const dirs = ['./public/img', './public/assets']

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) return

  fs.readdirSync(dir).forEach(file => {
    if (!file.match(/\.(jpg|jpeg|png)$/)) return

    const inputPath = path.join(dir, file)
    const outputPath = path.join(dir, file)
    const tempPath = path.join(dir, `_temp_${file}`)

    sharp(inputPath)
      .resize(1920, null, { withoutEnlargement: true })
      .jpeg({ quality: 80, progressive: true })
      .toFile(tempPath, () => {
        fs.renameSync(tempPath, outputPath)
        console.log(`✓ ${file}`)
      })
  })
})