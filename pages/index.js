import Head from 'next/head'
import { useState } from 'react'
import PreviewMeme from '../components/PreviewMeme'
import PreviewFacebook from '../components/PreviewFacebook'
import PreviewTwitter from '../components/PreviewTwitter'

import withTargetValue from '../utils/withTargetValue'

const defaultBgSize = 'cover'

export default () => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [imgUrl, setImgUrl] = useState('')
  const [topText, setTopText] = useState('')
  const [bottomText, setBottomText] = useState('')
  const [bgSize, setBgSize] = useState(defaultBgSize)

  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <title>Meme Generator! | Greenpeace Canada</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/ico" href="https://ae8a5b8b62cadc45ea97-84cf25f002919c6ca2a9d2b70ee170e0.ssl.cf1.rackcdn.com/images/22205/5b9a84a5b5ae6.png" />
        <link href="https://fonts.googleapis.com/css?family=Anton&display=swap" rel="stylesheet" />
      </Head>
      <h1>Meme Generator!</h1>
      <input type='text' placeholder='title' onKeyUp={withTargetValue(setTitle)} />
      <input type='text' placeholder='description' onKeyUp={withTargetValue(setDesc)} />
      <input type='text' placeholder='image URL' onKeyUp={withTargetValue(setImgUrl)} />
      <input type='text' placeholder='top text' onKeyUp={withTargetValue(setTopText)} />
      <input type='text' placeholder='bottom text' onKeyUp={withTargetValue(setBottomText)} />
      <select onChange={withTargetValue(setBgSize)} defaultValue={defaultBgSize}>
        <option value='cover'>Cover</option>
        <option value='contain'>Contain</option>
      </select>
      <PreviewMeme
        imgUrl={imgUrl}
        topText={topText}
        bottomText={bottomText}
        bgSize={bgSize}
      />
      <PreviewFacebook
        title={title}
        desc={desc}
        imgUrl={imgUrl}
        topText={topText}
        bottomText={bottomText}
        bgSize={bgSize}
      />
      <PreviewTwitter
        title={title}
        desc={desc}
        imgUrl={imgUrl}
        topText={topText}
        bottomText={bottomText}
        bgSize={bgSize}
      />
    </div>
  )
}
