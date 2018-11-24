import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media } from '../../helpers/style-helper'
import PublishDate from '../PublishDate'

const HeroContainer = styled.section`
  position: relative;

  color: ${props => props.theme.lightText};
`

const ImageContainer = styled.div`
  height: 0;
  overflow: hidden;
  padding-top: 75%;
  background: red;
  position: relative;

  ${media.tablet`
    padding-top: 56.25%;
  `}

  ${media.desktop`
    padding-top: 45%;
  `}
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
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${media.tablet`
    width: 60%;
    padding: 2em;
  `}

  ${media.desktop`
    padding: 3em;
  `}
`

const Title = styled.h1`
  ${media.tablet`
    font-size: 3em;
    margin-bottom: .2em;
  `}
`

const PageExcerpt = styled.p`
  line-height: 1.5;
  margin: 0;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 4px;
    background: white;
    top: -10px;
    left: 0;

    ${media.tablet`
      width: 35px;
      height: 6px;
      top: -18px;
    `}
  }
  
  ${media.tablet`
    margin-top: 1.2em;
  `}
`

const Hero = ({ heroImage, title, excerpt, publishDate }) => (
  <HeroContainer>
    <ImageContainer>
      <Img src={heroImage} />
      <ImageOverlay />
    </ImageContainer>
    <TextContainer>
      <Title>{title}</Title>
      {excerpt && <PageExcerpt>{excerpt}</PageExcerpt>}
      {publishDate && 
        <PublishDate publishDate={publishDate} light />
      }
    </TextContainer>
  </HeroContainer>
)

Hero.propTypes = {
  heroImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string
}

export default Hero
