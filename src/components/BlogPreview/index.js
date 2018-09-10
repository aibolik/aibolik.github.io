import React from 'react'
import styled from 'styled-components'
import PublishDate from '../PublishDate'

const BlogContainer = styled.article`
  line-height: 1.5;
`

const Title = styled.h2`
  font-size: 1.8em;
  line-height: 1.2;
`

const BlogPreview = ({ title, slug, content, publishDate }) => (
  <BlogContainer>
    <Title>{title}</Title>
    <p>
      {content.filter(({ __typename }) => __typename === 'ContentfulBlogPostCopy')[0].copy.childMarkdownRemark.excerpt}
    </p>
    <PublishDate publishDate={publishDate} />
  </BlogContainer>
)

export default BlogPreview