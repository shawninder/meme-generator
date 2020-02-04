import parser from 'accept-language-parser'

export default function chooseLang (requestedLang, acceptLanguage, available) {
  const requested = requestedLang ? `${requestedLang}, ` : ''
  const accepted = parser.pick(available, `${requested}${acceptLanguage}`)
  const fallback = available[0]
  return accepted || fallback
}
