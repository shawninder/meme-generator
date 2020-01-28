import { useRef, useEffect } from 'react'
import drawImage from '../utils/drawImage'
import writeText from '../utils/writeText'

export default ({ imgUrl, topText, bottomText, bgSize }) => {
  const canvas = useRef(null)

  useEffect(() => {
    if (canvas.current) {
      const ctx = canvas.current.getContext('2d')
      canvas.current.width = 600
      canvas.current.height = 400
      ctx.clearRect(0, 0, canvas.current.width, canvas.current.height)
      ctx.beginPath();
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      function writeTexts () {
        writeText(canvas.current, ctx, topText, 'top')
        writeText(canvas.current, ctx, bottomText, 'bottom')
      }
      if (imgUrl) {
        const img = new Image()
        img.onload = function () {
          drawImage(canvas.current, ctx, img, bgSize)
          writeTexts()
        }
        img.src = imgUrl
      } else {
        writeTexts()
      }
    }
  }, [imgUrl, topText, bottomText, bgSize])
  return (
    <div className='preview-meme'>
      <canvas id='meme' ref={canvas}></canvas>
      <p className='text-top'>{topText}</p>
      <p className='text-bottom'>{bottomText}</p>
      <style>
        {`
          canvas {
            border: 1px solid red;
          }
          .preview-meme img {
            max-width: 600px;
          }
        `}
      </style>
    </div>
  )
}
