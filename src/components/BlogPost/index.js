import React from 'react'
import styled from 'styled-components'
import CalendarIcon from './calendar.svg'

const BlogContainer = styled.article`
  line-height: 1.5;
`

const Title = styled.h2`
  font-size: 1.8em;
  line-height: 1.2;
`

const DateContainer = styled.time`
  display: flex;
  font-family: 'Merriweather', Georgia, Arial;
  font-style: italic;
  color: rgba(33, 33, 33, .34);
`

const Img = styled.img`
  width: 14px;
  height: 24px;
  margin-right: 8px;
  opacity: .34;
`

const BlogPost = props => (
  <BlogContainer>
    <Title>My Programming Experience</Title>
    <p>
      Hi, there! I will begin with explaining how I started my way in programming. In the far 2008th, I entered to Kazakh-Turkish High School for gifted students. All Kazakh-Turkish Schools in our country make a big emphasis on subject...
    </p>
    <DateContainer>
      <Img src={CalendarIcon} />
      Published on 19th of July
    </DateContainer>
  </BlogContainer>
)

export default BlogPost