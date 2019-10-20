import React from 'react';
import styled from 'styled-components';

import Box from '../../../Box';
import Text from '../../../Text';

import Button from '../../../PromoButton';

const Input = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.24);
  border-radius: 8px;
  width: 100%;
  padding: 10px 12px;
`;

const SignUp = () => {

  return (
    <Box px={3} mb={4} as="section" id="sign-up">
      <Text as="h4" fontSize="18px" mb={2}>Early Sign Up</Text>
      <Text mb={3}>
        {`Sign Up for <30-day-React /> course now, and get `}
        <Text as="span" fontWeight="700">free access </Text>
        when course releases
      </Text>
      <form>
        <Box display="flex" flexDirection="column">
          <Input placeholder="email@example.com" />
          <Button minWidth="220px" border="none" bg="#1c7ee0" color="#fff" fontWeight="600" mt={3} type="submit">Sign Up</Button>
        </Box>
      </form>
    </Box>
  );
}

export default SignUp;
