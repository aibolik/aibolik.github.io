import React, { useState, useEffect } from 'react';
import { LoadableButton } from '../Button';
import {
  FormContainer, MainText, Input, SmallText, Form
} from './_styled';

const COURSE_SIGNUP_URL = 'https://europe-west1-my-blog-aibolik.cloudfunctions.net/courseSignUp';

const SignUp = () => {
  const [input, setInput] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [shouldSignUp, setSignUp] = useState(false);

  useEffect(() => {
    console.log('useEffect triggered')
    if (shouldSignUp) {
      setLoading(true);
      fetch(COURSE_SIGNUP_URL, {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: input }),
      })
      .then(res => res.json())
      .then((res) => {
        if (!res.data) {
          throw new Error('Something went wrong');
        }
        alert('Thanks for signing up. You will receive email when course is released')
        setInput('');
      })
      .catch(err => {
        alert(err.message);
      })
      .finally(() => {
        setLoading(false);
        setSignUp(false);
      });
    }
  }, [shouldSignUp]);

  return (
    <FormContainer>
      <MainText>Early sign-up!</MainText>
      <Form onSubmit={(e) => {
        e.preventDefault();
        setSignUp(true);
      }}>
        <Input value={input} placeholder={'your@email.com'} onChange={e => setInput(e.target.value)} />
        <LoadableButton loading={isLoading} type='submit'>Sign Up</LoadableButton>
      </Form>
      <SmallText>Sign up now and get the full course for <strong>free</strong> when it is released</SmallText>
    </FormContainer>
  )
}

export default SignUp
