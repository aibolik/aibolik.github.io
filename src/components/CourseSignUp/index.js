import React from 'react';
import { LoadableButton } from '../Button';
import {
  FormContainer, MainText, Input, SmallText, Form
} from './_styled';

const SignUp = () => {
  return (
    <FormContainer>
        <MainText>Early sign-up!</MainText>
        <Form>
          <Input placeholder={'your@email.com'} />
          <LoadableButton>Sign Up</LoadableButton>
        </Form>
        <SmallText>Sign up now and get the full course for free when it is released</SmallText>
    </FormContainer>
  )
}

export default SignUp
