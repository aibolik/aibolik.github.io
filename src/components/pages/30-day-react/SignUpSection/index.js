import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Box from '../../../Box';
import Text from '../../../Text';

import Button from '../../../PromoButton';

const COURSE_SIGNUP_URL = 'https://europe-west1-my-blog-aibolik.cloudfunctions.net/courseSignUp';

const Input = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.24);
  border-radius: 8px;
  width: 100%;
  padding: 10px 12px;
`;

const SignUp = () => {
  const [input, setInput] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [shouldSignUp, setSignUp] = useState(false);

  useEffect(() => {
    if (shouldSignUp) {
      setLoading(true);
      fetch(COURSE_SIGNUP_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: input })
      })
      .then(res => res.json())
      .then(res => {
        if (!res.data) {
          throw new Error('Something went wrong');
        }
        alert('Thanks for signing up. You will receive email when course is released');
        setInput('');
      })
      .catch(err => {
        alert(err.message);
      })
      .finally(() => {
        setLoading(false);
        setSignUp(false);
      })
    }
  }, [shouldSignUp]);

  return (
    <Box px={3} mb={4} as="section" id="sign-up">
      <Text as="h4" fontSize="18px" mb={2}>Early Sign Up</Text>
      <Text mb={3}>
        {`Sign Up for <30-day-React /> course now, and get `}
        <Text as="span" fontWeight="700">free access </Text>
        when course releases
      </Text>
      <form onSubmit={e => {
        e.preventDefault();
        setSignUp(true);
      }}>
        <Box display="flex" flexDirection="column">
          <Input placeholder="email@example.com" value={input} onChange={e => setInput(e.target.value)} />
          <Button minWidth="220px" border="none" bg={isLoading ? '#5394d6' : '#1c7ee0'} disabled={isLoading} color="#fff" fontWeight="600" mt={3} type="submit">Sign Up</Button>
        </Box>
      </form>
    </Box>
  );
}

export default SignUp;
