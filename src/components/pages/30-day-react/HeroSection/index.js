import React from 'react';
import styled from 'styled-components';

import Box from '../../../Box';
import Text from '../../../Text';
import Button from '../../../PromoButton';

import HeroLogo from './assets/web-developer.svg';

const HeroImage = styled.img`
  width: 100%;
`;

const HeroSection = () => {

  return (
    <Box display="flex" flexDirection={["column", "row"]} p={4} textAlign={["center", "left"]} justifyContent={['flex-start', 'space-between']}>
      <Box alignSelf="center" width={["320px", "auto"]} order={[1, 2]} flex={['none', 0.4]}>
        <HeroImage src={HeroLogo} />
      </Box>
      <Box order={[2, 1]} display={['block', 'flex']} flexDirection="column" justifyContent="center" flex={['none', 0.6]}>
        <h1>{`<30-day-React /> course`}</h1>
        <Text as="h3" fontWeight="400" lineHeight={1.5} m={0}>Up your game on React by taking this course and creating 30 real-world examples in 30 days</Text>
        <Box display="flex" flexDirection={["column", "row"]} alignItems="center" mt={4}>
          <Button minWidth={['220px', '200px']} mb={[2, 0]} mr={[0, 3]} border="none" bg="#1c7ee0" color="#fff" fontWeight="600" as="a" href="#sign-up">Sign Up</Button>
          <Button minWidth={['220px', '200px']} fontWeight="600">Watch Sample</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default HeroSection;
