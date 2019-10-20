import React from 'react';

import {
  GlobalStyle,
  HeroSection,
  ImageContainer,
  HeroImage,
  ReactImg,
  HeroTitle,
  HeroSmall,
  CTAContainer,
} from './_styled';
import Button from '../../components/PromoButton';

import TOC from '../../components/pages/30-day-react/TableOfContents';
import SignUpSection from '../../components/pages/30-day-react/SignUpSection';
import Footer from '../../components/pages/30-day-react/Footer';

import HeroLogo from './assets/web-developer.svg';
import ReactLogo from './assets/react-logo.svg';

const Landing = () => {

  return (
    <>
      <GlobalStyle />
      <HeroSection>
        <ImageContainer>
          <HeroImage alt="Learn react with 30-day-react" src={HeroLogo} />
          <ReactImg alt="React" src={ReactLogo} />
        </ImageContainer>
        <HeroTitle>{`<30-day-React /> course`}</HeroTitle>
        <HeroSmall>Up your game on React by taking this course and creating 30 real-world examples of </HeroSmall>
        <CTAContainer>
          <Button minWidth="220px" mb={2} border="none" bg="#1c7ee0" color="#fff" fontWeight="600" as="a" href="#sign-up">Sign Up</Button>
          <Button minWidth="220px" fontWeight="600">Watch Sample</Button>
        </CTAContainer>
      </HeroSection>
      <TOC />
      <SignUpSection />
      <Footer />
    </>
  );
}

export default Landing;
