import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import normalize from 'styled-normalize'
import { media } from '../helpers/style-helper'
import Navigation from '../components/Navigation'
import SignUpForm from '../components/SignUpForm'
import Footer from '../components/Footer'
import 'typeface-roboto-slab'
import 'typeface-merriweather'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    font-family: 'Roboto Slab', 'Roboto', Arial;
    font-weight: 300;
  }
`

const theme = {
  background: `#4A4F69`,
  foreground: `rgba(33, 33, 33, .77)`,
  codeBackground: `rgba(255,229,100,.2)`,
  codeColor: `#4a4a4a`,
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

const ContentContainer = styled.main`
  color: ${props => props.theme.foreground};

  ${media.tablet`
    position: relative;
    left: 280px;
    width: calc(100% - 280px);
  `}

  ${media.desktop`
    position: relative;
    left: 320px;
    width: calc(100% - 320px);
  `}
`

const Layout = ({ children, hideNewsletterSignUp }) => {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <div>
        <Container>
          <Helmet
            title={site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          />
          <Navigation />
          <ContentContainer>
            {children}
            {!hideNewsletterSignUp && <SignUpForm />}
            <Footer />
          </ContentContainer>
        </Container>
        </div>
      </ThemeProvider>
    </>
  )
}

Layout.defaultProps = {
  hideNewsletterSignUp: false,
};

Layout.propTypes = {
  children: PropTypes.func,
  hideNewsletterSignUp: PropTypes.bool,
}

export default Layout
