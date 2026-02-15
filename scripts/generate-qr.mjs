import QRCode from 'qrcode'
import { writeFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const url = 'https://www.laboratoriodentaljulab.es'
const outPath = join(__dirname, '..', 'public', 'qr-julab.png')

QRCode.toFile(outPath, url, { width: 400, margin: 2 }, (err) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log('QR guardado en:', outPath)
})
