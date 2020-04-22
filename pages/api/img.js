import { registerFont, createCanvas } from 'canvas'
import generateMeme from '../../utils/generateMeme'

registerFont('./public/fonts/Anton-Regular.ttf', { family: 'Anton' })

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
