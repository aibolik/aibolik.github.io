import React from 'react';

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

const Embed = ({ embedUrl, title }) => {
  return (
    <Figure>
      <iframe
        src={embedUrl}
        style={{
          width: '100%',
          height: '500px',
          border: 0,
          borderRadius: '4px',
          overflow: 'hidden'
        }}
        title={title}
        allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      />
      {title && <figcaption>{title}</figcaption>}
    </Figure>
  );
}

export default Embed;
