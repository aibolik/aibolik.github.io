import React, { useState } from 'react';
import styled from 'styled-components';
import { Dialog as BaseDialog } from '@reach/dialog';
import '@reach/dialog/styles.css';

import Box from '../../../Box';
import Text from '../../../Text';
import Button from '../../../PromoButton';

import HeroLogo from './assets/web-developer.svg';

import SignUpSection from '../SignUpSection';

import { media } from '../../../../helpers/style-helper'

const HeroImage = styled.img`
  width: 100%;
`;

const Dialog = styled(BaseDialog)`
  &[data-reach-dialog-content] {
    width: 95vw;
    padding: 0;
    background: none;
  }
`;

const SignupDialog = styled(BaseDialog)`
  &[data-reach-dialog-content] {
    padding: 8px;

    width: 95vw;

    ${media.tablet`
      width: 500px;
    `}
  }
`;

const HeroSection = () => {
  const [showDialog, setShowDialog] = useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  const [signUpIsOpen, toggleSignUp] = useState(false);
  const openSignUp = () => toggleSignUp(true);
  const closeSignUp = () => toggleSignUp(false);

  return (
    <>
      <Dialog isOpen={showDialog} onDismiss={close}>
        <div className="wistia_responsive_padding" style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
          <div className="wistia_responsive_wrapper" style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%'}}>
            <iframe src="https://fast.wistia.net/embed/iframe/g1uvyxdogs?videoFoam=true" title="30-day-React course Video" allowtransparency="true" frameborder="0" scrolling="no" className="wistia_embed" name="wistia_embed" allowFullScreen mozallowfullscreen="true" webkitallowfullscreen="true" oallowfullscreen="true" msallowfullscreen="true" width="100%" height="100%"></iframe>
          </div>
        </div>
        <script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>
      </Dialog>
      <SignupDialog isOpen={signUpIsOpen} onDismiss={closeSignUp}>
        <SignUpSection />
      </SignupDialog>
      <Box display="flex" flexDirection={["column", "row"]} p={4} textAlign={["center", "left"]} justifyContent={['flex-start', 'space-between']}>
        <Box alignSelf="center" width={["320px", "auto"]} order={[1, 2]} flex={['none', 0.4]}>
          <HeroImage src={HeroLogo} />
        </Box>
        <Box order={[2, 1]} display={['block', 'flex']} flexDirection="column" justifyContent="center" flex={['none', 0.6]}>
          <h1>{`<30-day-React /> course`}</h1>
          <Text as="h3" fontWeight="400" lineHeight={1.5} m={0}>Up your game on React by taking this course and creating 30 real-world projects in 30 days</Text>
          <Box display="flex" flexDirection={["column", "row"]} alignItems="center" mt={4}>
            <Button minWidth={['220px', '200px']} mb={[2, 0]} mr={[0, 3]} border="none" bg="#1c7ee0" color="#fff" fontWeight="600" onClick={openSignUp}>Sign Up</Button>
            <Button minWidth={['220px', '200px']} onClick={open} fontWeight="600">Watch Intro</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default HeroSection;
