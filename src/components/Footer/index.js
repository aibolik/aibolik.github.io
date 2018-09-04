import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '../SocialIcons/Facebook'
import GithubIcon from '../SocialIcons/Github'
import Twitter from '../SocialIcons/Twitter'

const FooterContainer = styled.div`
  height: 45px;
  line-height: 45px;
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

const SocialIcons = styled.div`

  svg {
    fill: ${props => props.theme.lightText};
    opacity: .52;
    transition: opacity .3s;
    margin-left: 35px;

    &:hover {
      opacity: 1;
    }
  }
`

const Footer = (props) => (
  <FooterContainer>
    <Copyright>&copy; 2018 Aibol Kussain</Copyright>
    <SocialIcons>
      <a href='#'><FacebookIcon /></a>
      <a href='#'><GithubIcon /></a>
      <a href='#'><Twitter /></a>
    </SocialIcons>
  </FooterContainer>
)

export default Footer