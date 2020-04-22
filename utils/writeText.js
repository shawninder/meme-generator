export default (canvas, ctx, text, position) => {
  let fontSize = 50
  const fontFamily = 'Arial'
  const padding = 20
  ctx.font = `${fontSize}pt ${fontFamily}`
  ctx.strokeStyle = 'white'
  ctx.fillStyle = 'white'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'

  let measured = ctx.measureText(text)
  let textWidth = measured.width
  if (textWidth > (canvas.width - (2 * padding))) {
    while (textWidth > (canvas.width - (2 * padding))) {
      fontSize--
      ctx.font = `${fontSize}pt ${fontFamily}`
      measured = ctx.measureText(text)
      textWidth = measured.width
    }
  }
  const xOffset = canvas.width / 2
  const yOffset = position === 'top'
    ? padding + measured.actualBoundingBoxAscent
    : canvas.height - padding - measured.actualBoundingBoxDescent
  ctx.fillText(
    text,
    xOffset,
    yOffset,
    canvas.width
  )
}
