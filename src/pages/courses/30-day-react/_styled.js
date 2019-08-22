import styled, { keyframes } from 'styled-components';
import { media } from '../../../helpers/style-helper'

export const HeroContainer = styled.section`
  position: relative;

  color: ${props => props.theme.lightText};
`

export const ImageContainer = styled.div`
  height: 0;
  overflow: hidden;
  padding-top: 75%;
  background: #282c34;
  position: relative;

  ${media.tablet`
    padding-top: 56.25%;
  `}

  ${media.desktop`
    padding-top: 45%;
  `}
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Img = styled.img`
  animation: ${rotate} infinite 20s linear;
  pointer-events: none;
  height: 220px;
  order: 1;

  ${media.tablet`
    order: 2;
  `}

  @media screen and (min-width: 900px) {
    position: absolute;
    right: 0;
  }

  ${media.desktop`
    height: 260px;
  `}
`

export const TextContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;

  flex-direction: column;
  justify-content: center;

  ${media.tablet`
    padding: 2em;
    flex-direction: row;
    justify-content: space-between;
  `}

  ${media.desktop`
    padding: 3em;
  `}
`

export const Title = styled.h1`
  order: 2;

  ${media.tablet`
    font-size: 2.8em;
    margin-bottom: .2em;
    order: 1;
  `}
`

export const MainSection = styled.section`
  max-width: 1024px;
  margin: auto;
`

export const Section = styled.section`
  padding: 12px 16px;

  ${media.desktop`
    padding: 12px 60px;
  `}
`;

export const Heading = styled.h2`
  margin-top: 0;
`

export const Text = styled.p`
  ${props => props.centered && `text-align: center;`}

  strong {
    font-weight: 700;
  }
`;

export const FrameContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`

export const CourseSection = styled.h3`
  border-bottom: 1px solid rgba(0, 0, 0, .2);
  padding-bottom: 8px;
`

export const SectionContent = styled.ul`
  list-style: none;
  padding: 0;
`

export const LessonTitle = styled.h4`

`

export const LessonDescription = styled.p`

`

export const Remark = styled.p`
  font-size: 11px;
`
