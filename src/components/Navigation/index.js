import React, { Component } from 'react'
import styled from 'styled-components'
import Avatar from '../Avatar'
import Link from 'gatsby-link'
import { media } from '../../helpers/style-helper'

const Nav = styled.nav`
  background: ${props => props.theme.background};
  color: ${props => props.theme.lightText};

  ${media.tablet`
    position: fixed;
    top: 0;
    
    height: 100vh;
    width: 280px;

    .twitter-follow-button {
      display: none;
    }
  `}

  ${media.desktop`
    width: 320px;

    .twitter-follow-button {
      display: block;
    }
  `}
`

const NavigationContainer = styled.div`
  position: relative;
`

const NavigationClose = styled.button.attrs({
  className: props => props.open && 'close'
})`
  position: absolute;
  height: 26px;
  top: 8px;
  right: 9px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  cursor: pointer;
  background: none;
  border: none;

  & > span {
    display: block;
    width: 26px;
    height: 4px;
    background: white;
    border-radius: 6px;
    transition: all .3s;
  }
              
  &.close > span {
    &:first-child {
      position: relative;
      top: 10px;
      transform: rotate(45deg);
    }

    &:nth-child(2) {
      opacity: 0;
    }

    &:nth-child(3) {
      position: relative;
      top: -9px;
      transform: rotate(-45deg);
    }
  }

  ${media.tablet`
    display: none;
  `}
`

const Sections = styled.ul.attrs({
  className: props => props.open && 'open'
})`
  display: flex;
  flex-direction: column;
  margin-bottom: 0;
  padding: 0 16px 10px;
  height: 50px;
  overflow: hidden;
  list-style: none;
  font-size: 22px;
  transition: height .3s ease;

  &.open {
    height: 240px;
  }

  ${media.tablet`
    height: auto;
  `}  
`

const LinkItem = styled(Link).attrs({
  activeClassName: 'active'
})`
  display: block;
  width: calc(100% - 40px);
  padding: 12px 0;
  color: ${props => props.theme.secondaryLight};
  text-decoration: none;
  order: 2;

  &.active {
    color: ${props => props.theme.lightText};
    font-weight: 400;
    order: 1;

    ${media.tablet`
      background: rgba(255, 255, 255, .15);
      margin-left: -16px;
      margin-right: -16px;
      padding-left: 16px;
    `}
  }

  ${media.tablet`
    width: auto;
    order: 1;  
  `}
`
 
class Navigation extends Component { 
  constructor(props) {
    super(props)

    this.state = {
      open: false
    }
  }

  handleNavigationToggle = () => {
    this.setState(prevState => (
      {
        open: !prevState.open
      }
    ))
  }

  render() {
    return (
      <Nav>
        <Avatar />
        <NavigationContainer>
          <NavigationClose open={this.state.open} onClick={this.handleNavigationToggle}>
            <span></span>
            <span></span>
            <span></span>
          </NavigationClose>
          <Sections open={this.state.open}>
            <LinkItem to='/' exact>Blog</LinkItem>
            {/* <LinkItem to='/newsletters'>Newsletters</LinkItem> */}
            {/* <LinkItem to='/projects'>Projects</LinkItem> */}
            {/* <LinkItem to='/courses'>Courses</LinkItem> */}
            <LinkItem to='/about'>About</LinkItem>
          </Sections>
        </NavigationContainer>
      </Nav>
    )
  }
}

export default Navigation