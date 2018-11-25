import styled from 'styled-components'
import BookIcon from './assets/book.svg'

const colors = {
  text: '#101010',
  secondary: 'rgba(16, 16, 16, .54)',
  subhead: 'rgba(16, 16, 16, .65)',
  link: '#3763A0',

  divider: 'rgba(0, 0, 0, .12)',
}

/**
 * Header styles
 */

export const LayoutContainer = styled.section`
  max-width: 80em;
  margin: auto;
  padding: 24px;

  color: ${colors.text};
  font-family: 'Source Sans Pro', Georgia, Arial;

  @media print {
    padding-top: 0;
  }
`


export const HeaderContainer = styled.header`
max-width: 400px;

border-bottom: 1px solid ${colors.divider};
`

export const Section = styled.section`
  &:not(:first-of-type) {
    margin-top: 44px;
  }

  @media print {
    &:not(:first-of-type) {
      margin-top: 32px;
    } 
  }
`

export const List = styled.ul`
  padding-left: ${props => props.withDisc ? '24px' : '0'};
  list-style: ${props => props.withDisc ? 'circle' : 'none'};
`

export const TitleHeading = styled.h1`
  margin-bottom: 0;

  font-size: 3em;

  @media print {
    margin-top: 0;
  }
`

export const LinksList = styled.ul`
  padding: 0;
  list-style: none;

  li {
    display: inline-block;
    margin-right: 12px;
  }
`

export const Anchor = styled.a`
  text-decoration: none;
  color: ${colors.link};

  &:hover {
    text-decoration: underline;
  }
`

/**
 * Content
 */

export const Content = styled.article`
  display: flex;

  main {
    padding-right: 24px;
    flex: 2;

    li {
      margin-top: 2px;
    }
  }

  aside {
    flex: 1;
  }
`

export const SectionHeading = styled.h2`
  margin-bottom: 0;
`

export const SubHead = styled.h3`
  margin-bottom: 0;

  color: ${colors.subhead};
`

export const MetaInfo = styled.span`
  font-size: .9em;
  color: ${colors.secondary};
`

export const CoursesList = styled.ul`
  padding-left: 0;
  list-style: none;

  li::before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 14px;
    margin-right: 8px;

    background: url(${BookIcon}) 0px 1px no-repeat;
  }

  @media print {
    list-style: disc;
    padding-left: 18px;

    li::before {
      display: none;
    }
  }
`

export const BulletedList = styled.ul`
  padding: 0;

  list-style: none;

  li {
    display: inline-block;

    :not(:last-of-type)::after {
      content: '';
      position: relative;
      top: -3px;
      
      display: inline-block;
      width: 5px;
      height: 5px;
      margin: 0 6px;
      border-radius: 50%;
    
      background: ${colors.secondary};
    }
  }
`

// export const Work