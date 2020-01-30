import { loadImage } from 'canvas'
import drawImage from '../utils/drawImage'
import writeText from '../utils/writeText'
import defaultBgSize from '../values/defaultBgSize'

export default function generateMeme (canvas, { imgUrl, topText, bottomText, bgSize = defaultBgSize }, cb = () => {}) {
  const ctx = canvas.getContext('2d')
  canvas.width = 600
  canvas.height = 400
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.beginPath();
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  function writeTexts () {
    if (topText) {
      writeText(canvas, ctx, topText, 'top')
    }
    if (bottomText) {
      writeText(canvas, ctx, bottomText, 'bottom')
    }
  }
  if (imgUrl) {
    loadImage(imgUrl).then((image) => {
      drawImage(canvas, ctx, image, bgSize)
      writeTexts()
      cb()
    })
  } else {
    writeTexts()
    cb()
  }
}
