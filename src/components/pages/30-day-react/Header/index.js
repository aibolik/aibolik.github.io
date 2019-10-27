import React from 'react';
import styled, { keyframes } from 'styled-components';
import { width, position } from 'styled-system';

import Box from '../../../Box';
import Text from '../../../Text';

import ReactLogo from './assets/react-logo.svg';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const ReactImg = styled.img`
  animation: ${rotate} infinite 20s linear;
  position: absolute;
  ${width}
  ${position}
`;


const Header = () =>{
  return (
    <Box as="header" minHeight={['56px', '64px']} display="flex" borderBottom="1px solid rgba(0, 0, 0, .24)" px={[3, 4]} py={3} justifyContent="flex-end" alignItems="center">
      <ReactImg src={ReactLogo} width={['60px', '80px']} left={[0, '16px']} top={['7px', '4px']} />
      <Text fontWeight="700" fontSize={['1.2em', '1.4em']}>{`<30-day-React />`}</Text>
    </Box>
  );
}

export default Header;
