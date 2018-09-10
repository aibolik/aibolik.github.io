import React from 'react'
import styled from 'styled-components'

const Figure = styled.figure`
  margin: 16px 0;
  text-align: center;

  img {
    width: 100%;
  }

  figcaption {
    color: rgba(33, 33, 33, .51);
    font-size: .8em;
    font-style: italic;
  }
`

const ImageEmbed = ({ image, caption }) => (
  <Figure>
    <img src={image.resolutions.src} srcSet={image.resolutions.srcSet} />
    {caption && <figcaption>{caption}</figcaption>}
  </Figure>
)

export default ImageEmbed