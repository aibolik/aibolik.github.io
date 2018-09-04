import React from 'react'
import styled from 'styled-components'
import { media } from '../../helpers/style-helper'

const HeroContainer = styled.div`
  position: relative;

  color: ${props => props.theme.lightText};
`

const ImageContainer = styled.div`
  height: 0;
  overflow: hidden;
  padding-top: 75%;
  background: red;
  position: relative;
`

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const ImageOverlay = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.background};
  opacity: .66;
`

const TextContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${media.tablet`
    width: 60%;
  `}
`

const Title = styled.h2`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 4px;
    background: white;
    bottom: -12px;
    left: 0;

    ${media.tablet`
      width: 35px;
    `}
  }

  ${media.tablet`
    font-size: 3em;
    margin-bottom: .2em;
  `}
`

const PageExcerpt = styled.p`
  line-height: 1.5;
  margin: 0;
  
  ${media.tablet`
    margin-top: 1.2em;
  `}
`

const Hero = ({ heroImage, title, excerpt }) => (
  <HeroContainer>
    <ImageContainer>
      <Img src={heroImage} />
      <ImageOverlay />
    </ImageContainer>
    <TextContainer>
      <Title>{title}</Title>
      <PageExcerpt>{excerpt}</PageExcerpt>
    </TextContainer>
  </HeroContainer>
)

export default Hero
