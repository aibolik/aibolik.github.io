import React, { Component } from 'react'
import styled from 'styled-components'
import { LoadableButton } from '../Button'
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
  max-width: calc(100% - 160px);

  ${media.tablet`
    width: 300px;
  `}
`

const SIGN_UP_URL = 'https://f38w5n63n3.execute-api.us-east-1.amazonaws.com/signUp/processSIgnUpFormRequest'

class SignUp extends Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      state: 'initial'
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(event) {
    this.setState({ email: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    let { email } = this.state

    this.setState({ state: 'sending' })

    fetch(SIGN_UP_URL, {
      method: 'POST',
      body: JSON.stringify({ email })
    }).then(res => {
      this.setState({ state: 'subscribed', email: '' })
    }).catch(err => {
      this.setState({ state: 'error' })
      console.error('error sending fetch', err)
    })
  }

  render() {

    let copy = ''

    switch(this.state.state) {
      case 'initial':
      case 'sending':
        copy = `Sign Up to stay up to date in\nFrontEnd and JavaScript world`
        break
      case 'subscribed':
        copy = `Thanks for signing up for newsletters`
        break
      case 'error':
        copy = `There was some unexpected error. Try to refresh page and submit again`
        break
      default:
        copy = `Sign Up to stay up to date in\nFrontEnd and JavaScript world`
        break
    }

    return (
      <FormContainer>
        <CTAText>
          {copy}
        </CTAText>
        <Form onSubmit={this.handleSubmit}>
          <Input value={this.state.email} onChange={this.handleInputChange} placeholder={'your@email.com'} />
          <LoadableButton loading={this.state.state === 'sending'}>Sign Up</LoadableButton>
        </Form>
      </FormContainer>
    )
  }
}

export default SignUp