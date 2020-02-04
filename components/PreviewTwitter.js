export default ({ title, desc, imgUrl, topText, bottomText }) => {
  return (
    <div className='preview-twitter'>
      <h2>{title}</h2>
      <p>{desc}</p>
      <p className='text-top'>{topText}</p>
      <img src={imgUrl} />
      <p className='text-bottom'>{bottomText}</p>
      <style>
        {`
          .preview-twitter img {
            max-width: 600px;
          }
        `}
      </style>
    </div>
  )
}
