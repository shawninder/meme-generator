export default function drawImage (canvas, ctx, img, bgSize) {
  const xMult = canvas.width / img.width
  const yMult = canvas.height / img.height
  let mult
  switch (bgSize) {
    case 'cover':
      mult = Math.max(xMult, yMult)
      break
    case 'contain':
      mult = Math.min(xMult, yMult)
      break
    default:
      throw new Error(`Unrecognized bgSize ${bgSize}`)
  }
  const sx = 0
  const sy = 0
  const cw = img.width
  const ch = img.height
  const iw = img.width * mult
  const ih = img.height * mult
  const dx = (canvas.width - iw) / 2
  const dy = (canvas.height - ih) / 2

  ctx.drawImage(
    img,
    sx,
    sy,
    cw,
    ch,
    dx,
    dy,
    iw,
    ih
  )
}
