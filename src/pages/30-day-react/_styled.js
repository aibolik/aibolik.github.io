import styled, { createGlobalStyle, keyframes } from 'styled-components';
import normalize from 'styled-normalize';
import 'typeface-montserrat';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    font-size: 14px;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    color: rgba(45,55,71,1);
  }
`

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 16px;
  text-align: center;
`;

export const ImageContainer = styled.div`
  align-self: center;
  position: relative;
  width: 320px;
`;

export const HeroImage = styled.img`
  width: 100%;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const ReactImg = styled.img`
  animation: ${rotate} infinite 20s linear;
  position: absolute;
  width: 220px;
  right: -41px;
  top: -9px;
`;

export const HeroTitle = styled.h1`

`;

export const HeroSmall = styled.h3`
  margin: 0;
  font-weight: 400;
  line-height: 1.5;
`;

export const CTAContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8px;
`;
