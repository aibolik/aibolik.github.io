import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'
import normalize from 'styled-normalize'
import { media } from '../helpers/style-helper'

import Navigation from '../components/Navigation'

injectGlobal`
  ${normalize}

  body {
    font-family: 'Roboto Slab', 'Roboto', Arial;
    font-weight: 300;
  }
`

const theme = {
  background: `#4A4F69`,
  foreground: `rgba(33, 33, 33, .77)`,
  lightText: `#FFF`,
  secondaryLight: `rgba(255, 255, 255, .8)`
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  ${media.tablet`
    flex-direction: row;
  `}
`

const ContentContainer = styled.div`
  ${media.tablet`
    position: relative;
    left: 320px;
  `}
`

const Layout = ({ children, data }) => (
  <ThemeProvider theme={theme}>
    <Container>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      
        <Navigation />
        <ContentContainer>
          {children()}
        </ContentContainer>
    </Container>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
