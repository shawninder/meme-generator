export default (canvas, ctx, text, position) => {
  let fontSize = 50
  const fontFamily = 'Anton'
  const padding = 20
  ctx.font = `${fontSize}pt ${fontFamily}`;
  ctx.strokeStyle = 'white';
  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  let measured = ctx.measureText(text)
  let textWidth = measured.width;
  if (textWidth > (canvas.width - (2 * padding))) {
    while (textWidth > (canvas.width - (2 * padding))) {
      fontSize--;
      ctx.font = `${fontSize}pt ${fontFamily}`;
      measured = ctx.measureText(text)
      textWidth = measured.width;
    }
  }
  ctx.fillText(
    text,
    canvas.width / 2,
    position === 'top'
      ? padding + (measured.actualBoundingBoxAscent - measured.actualBoundingBoxDescent)
      : canvas.height - padding - (measured.actualBoundingBoxAscent - measured.actualBoundingBoxDescent),
    canvas.width
  );
}
