import { registerFont, createCanvas } from 'canvas'
import path from 'path'
import generateMeme from '../../utils/generateMeme'

const resolved = path.resolve('./fonts/Anton-Regular.ttf')
console.log('Path to font file', resolved)
registerFont(resolved, { family: 'Anton' })

export default function (req, res) {
  const { title, desc, imgUrl, topText, bottomText, bgSize } = req.query
  const canvas = createCanvas()
  generateMeme(canvas, {
    imgUrl: decodeURIComponent(imgUrl),
    topText,
    bottomText,
    bgSize
  }, () => {
    canvas.toBuffer((err, buf) => {
      if (err) {
        throw err
      }
      res.end(buf)
    })
  })
}
