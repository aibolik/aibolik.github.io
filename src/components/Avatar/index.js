import React from 'react'
import styled from 'styled-components'
import { Follow } from 'react-twitter-widgets'
import MyAvatar from './avatar.png'

const Header = styled.header`
  display: flex;
  flex-direction: row;
  padding: 16px;
`

const Img = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`

const Name = styled.h3`
  margin: 0 0 8px;
  font-weight: 100;
`

const Description = styled.small`
  opacity: .87;
  margin-bottom: auto;
`

const Avatar = props => (
  <Header>
    <Img src={MyAvatar} />
    <InfoContainer>
      <Name>Aibol Kussain</Name>
      <Description>Developer, Tech blogger</Description>
      <Follow username='aibolik_' />
    </InfoContainer>
  </Header>
)

export default Avatar