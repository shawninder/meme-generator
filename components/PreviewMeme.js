import { useRef, useEffect } from 'react'
import generateMeme from '../utils/generateMeme'

export default function PreviewMeme ({ imgUrl, topText, bottomText, bgSize }) {
  const canvas = useRef(null)

  useEffect(() => {
    if (canvas.current) {
      generateMeme(canvas.current, { imgUrl, topText, bottomText, bgSize })
    }
  }, [imgUrl, topText, bottomText, bgSize])
  return (
    <div className='preview-meme'>
      <canvas id='meme' ref={canvas} />
      <style>
        {`
          .preview-meme img {
            max-width: 600px;
          }
        `}
      </style>
    </div>
  )
}
