import React from 'react';

import {
  GlobalStyle
} from './_styled';

import HeroSection from '../../components/pages/30-day-react/HeroSection';
import TOC from '../../components/pages/30-day-react/TableOfContents';
import SignUpSection from '../../components/pages/30-day-react/SignUpSection';
import Footer from '../../components/pages/30-day-react/Footer';
import Header from '../../components/pages/30-day-react/Header';

const Landing = () => {

  return (
    <>
      <GlobalStyle />
      <Header />
      <HeroSection />
      <TOC />
      <Footer />
    </>
  );
}

export default Landing;
