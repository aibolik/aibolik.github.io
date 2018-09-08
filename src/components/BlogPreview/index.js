import React from 'react'
import styled from 'styled-components'
import CalendarIcon from './calendar.svg'
import moment from 'moment'

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

const BlogPreview = ({ title, slug, content, publishDate }) => (
  <BlogContainer>
    <Title>{title}</Title>
    <p>
      {content.filter(({ __typename }) => __typename === 'ContentfulBlogPostCopy')[0].copy.childMarkdownRemark.excerpt}
    </p>
    <DateContainer>
      <Img src={CalendarIcon} />
      Published on&nbsp;<time dateTime={publishDate}>{moment(parseInt(publishDate)).format('Do of MMMM, YYYY')}</time>
    </DateContainer>
  </BlogContainer>
)

export default BlogPreview