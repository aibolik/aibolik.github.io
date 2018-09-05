import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '../Button'
import Envelope from './envelope.svg'
import { media } from '../../helpers/style-helper'

const FormContainer = styled.div`
  color: ${props => props.theme.lightText};
  padding: 60px 0;
  margin-bottom: -1px;
  text-align: center;

  background: linear-gradient(to right, ${props => props.theme.background} 0%, #765E9C 100%);
`

const CTAText = styled.h3`
  font-size: 1.4em;
  font-weight: 400;
  line-height: 1.4;
  max-width: 400px;
  margin: auto;
  
  ${media.tablet`
    font-size: 1.6em;
  `}
`

const Form = styled.form`
  margin-top: 16px;
`

const Input = styled.input`
  font-weight: 300;
  border: none;
  border-radius: 4px;
  background-image: url(${Envelope});
  background-size: 26px 26px;
  background-repeat: no-repeat;
  background-position: 12px;
  height: 32px;
  padding: 6px 6px 6px 44px;
  margin-right: 12px;

  ${media.tablet`
    width: 300px;
  `}
`

class SignUp extends Component {

  render() {

    return (
      <FormContainer>
        <CTAText>
          Sign Up to stay up to date in 
          FrontEnd and JavaScript world
        </CTAText>
        <Form>
          <Input placeholder={'your@email.com'} />
          <Button>Sign Up</Button>
        </Form>
        
      </FormContainer>
    )
  }
}

export default SignUp