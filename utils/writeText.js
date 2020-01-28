export default (canvas, ctx, text, position) => {
  let fontSize = 12
  const fontFamily = 'Anton'
  const padding = 20
  ctx.font = `${fontSize}pt ${fontFamily}`;
  ctx.strokeStyle = 'black';
  ctx.fillStyle = 'black';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  let measured = ctx.measureText(text)
  let textWidth = measured.width;
  if (textWidth > 900) {
    while (textWidth > 900) {
      fontSize--;
      ctx.font = `${fontSize}pt ${fontFamily}`;
      measured = ctx.measureText(text)
      textWidth = measured.width;
    }
  }
  ctx.fillText(
    text,
    canvas.width / 2,
    position === 'top' ? padding : canvas.height - padding - (measured.actualBoundingBoxAscent - measured.actualBoundingBoxDescent),
    canvas.width
  );
}
