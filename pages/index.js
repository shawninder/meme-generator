import Head from 'next/head'
import { useState, useRef } from 'react'
import qs from 'qs'
import PreviewMeme from '../components/PreviewMeme'
import PreviewFacebook from '../components/PreviewFacebook'
import PreviewTwitter from '../components/PreviewTwitter'
import withTargetValue from '../utils/withTargetValue'
import defaultBgSize from '../values/defaultBgSize'
import copier from '../utils/copier'
import chooseLang from '../utils/chooseLang'
import allStrings from '../values/strings'

const IndexPage = ({ query, headers }) => {
  const lang = chooseLang(query.lang, headers['Accept-Language'], Object.keys(allStrings))
  const strings = allStrings[lang]
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [imgUrl, setImgUrl] = useState('')
  const [topText, setTopText] = useState('')
  const [bottomText, setBottomText] = useState('')
  const [bgSize, setBgSize] = useState(defaultBgSize)

  const memeUrl = useRef(null)

  const data = {
    title,
    desc,
    imgUrl,
    topText,
    bottomText,
    bgSize,
    lang
  }

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>{strings.index.title} | {strings.index.branding}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/ico" href="https://ae8a5b8b62cadc45ea97-84cf25f002919c6ca2a9d2b70ee170e0.ssl.cf1.rackcdn.com/images/22205/5b9a84a5b5ae6.png" />
        <link href="https://fonts.googleapis.com/css?family=Anton&display=swap" rel="stylesheet" />
      </Head>
      <h1>{strings.index.title}</h1>
      <input type='text' placeholder='title' onKeyUp={withTargetValue(setTitle)} />
      <input type='text' placeholder='description' onKeyUp={withTargetValue(setDesc)} />
      <input type='text' placeholder='image URL' onKeyUp={withTargetValue(setImgUrl)} />
      <input type='text' placeholder='top text' onKeyUp={withTargetValue(setTopText)} />
      <input type='text' placeholder='bottom text' onKeyUp={withTargetValue(setBottomText)} />
      <select onChange={withTargetValue(setBgSize)} defaultValue={defaultBgSize}>
        <option value='cover'>{strings.canvas.cover}</option>
        <option value='contain'>{strings.canvas.contain}</option>
      </select>
      <PreviewMeme
        imgUrl={imgUrl}
        topText={topText}
        bottomText={bottomText}
        bgSize={bgSize}
      />
      <input
        id="output-url"
        ref={memeUrl}
        type="text"
        value={`http://localhost:3000/api/img?${qs.stringify(data)}`}
        readOnly
      />
      <button onClick={copier(memeUrl)}>{strings.utils.copy}</button>
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
      <style jsx>
        {`
          #output-url {
            width: 500px;
          }
        `}
      </style>
    </div>
  )
}

IndexPage.getInitialProps = ({ query, req }) => {
  return { query, headers: req.headers }
}
export default IndexPage
