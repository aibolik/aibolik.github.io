import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '../SocialIcons/Facebook'
import GithubIcon from '../SocialIcons/Github'
import Twitter from '../SocialIcons/Twitter'
import { media } from '../../helpers/style-helper'

const FooterContainer = styled.div`
  height: 45px;
  line-height: 40px;
  padding: 0 16px;
  background: linear-gradient(to right, ${props => props.theme.background} 0%, #765E9C 100%);
  display: flex;
  justify-content: space-between;
`

const Copyright = styled.p`
  margin: 0;
  color: ${props => props.theme.lightText};
  font-weight: 100;
`

const IconLink = styled.a`
  display: inline-block;
  height: 40px;
  vertical-align: middle;
`

const SocialIcons = styled.div`
  svg {
    fill: ${props => props.theme.lightText};
    opacity: .52;
    transition: opacity .3s;
    margin-left: 25px;
    height: 20px;

    &:hover {
      opacity: 1;
    }

    ${media.tablet`
      height: auto;
      margin-left: 35px;
    `}    
  }
`

const Footer = (props) => (
  <FooterContainer>
    <Copyright>&copy; 2018 Aibol Kussain</Copyright>
    <SocialIcons>
      <IconLink href='#'><FacebookIcon /></IconLink>
      <IconLink href='#'><GithubIcon /></IconLink>
      <IconLink href='#'><Twitter /></IconLink>
    </SocialIcons>
  </FooterContainer>
)

export default Footer