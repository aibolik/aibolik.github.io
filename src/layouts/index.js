import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'
import normalize from 'styled-normalize'
import { media } from '../helpers/style-helper'
import Navigation from '../components/Navigation'
import SignUpForm from '../components/SignUpForm'
import Footer from '../components/Footer'
import 'typeface-roboto-slab'
import 'typeface-merriweather'

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
  color: ${props => props.theme.foreground};
  
  ${media.tablet`
    position: relative;
    left: 320px;
    width: calc(100% - 320px);
  `}
`

const Layout = ({ children, data }) => (
  <ThemeProvider theme={theme}>
    <div>
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
          <SignUpForm />
          <Footer />
        </ContentContainer>
    </Container>
    </div>
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
