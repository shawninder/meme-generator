import Head from 'next/head'
import qs from 'qs'
import { useRef } from 'react'

import PreviewMeme from '../components/PreviewMeme'
import copier from '../utils/copier'
import defaultBgSize from '../values/defaultBgSize'
import chooseLang from '../utils/chooseLang'
import allStrings from '../values/strings'

const MemePage = ({ query, headers }) => {
  const lang = chooseLang(query.lang, headers['Accept-Language'], Object.keys(allStrings))[0].code
  const strings = allStrings[lang]
  const memeUrlInput = useRef(null)
  const { title, desc, imgUrl, topText, bottomText, bgSize = defaultBgSize } = query
  const encoded = Object.keys(query).reduce((obj, key) => {
    obj[key] = encodeURIComponent(query[key])
    return obj
  }, {})
  const memeUrl = `/api/img?${qs.stringify(query)}`
  return (
    <div>
      <Head>
        <meta charSet='utf-8' />
        <title>{title}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='shortcut icon' type='image/ico' href='https://ae8a5b8b62cadc45ea97-84cf25f002919c6ca2a9d2b70ee170e0.ssl.cf1.rackcdn.com/images/22205/5b9a84a5b5ae6.png' />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={desc} />
        <meta property='og:image' content={memeUrl} />
      </Head>
      <h1>{title}</h1>
      <p>{desc}</p>
      <PreviewMeme
        imgUrl={imgUrl}
        topText={topText}
        bottomText={bottomText}
        bgSize={bgSize}
      />
      <h2>{strings.meme.share}</h2>
      <label>{strings.meme.url}</label>
      <input id='memeUrlInput' ref='memeUrlInput' type='text' value={memeUrl} />
      <a href={memeUrl}>{strings.meme.visit}</a>
      <button onClick={copier(memeUrlInput)}>{strings.utils.copy}</button>
      <a href={`https://www.facebook.com/sharer?u=${memeUrl}`}>{strings.sharing.facebook}</a>
      <a href={`https://twitter.com/tweet?text=${memeUrl}`}>{strings.sharing.twitter}</a>
      <a href={`mailto:?subject=${encoded.title}&body=${encoded.desc}%0A${memeUrl}`}>{strings.sharing.email}</a>
      <h3>{strings.meme.make}</h3>
      <a href='/'>{strings.meme.start}</a>
    </div>
  )
}

MemePage.getInitialProps = ({ query, req }) => {
  return { query, headers: req.headers }
}

export default MemePage
