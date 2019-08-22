import React, { Component } from 'react'
import styled from 'styled-components'
import Avatar from '../Avatar'
import NavigationLink from '../NavigationLink';
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
`;

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
            <NavigationLink to='/'>Blog</NavigationLink>
            {/* <NavigationLink to='/newsletters'>Newsletters</NavigationLink> */}
            {/* <NavigationLink to='/projects'>Projects</NavigationLink> */}
            <NavigationLink to='/courses'>Courses</NavigationLink>
            <NavigationLink to='/about'>About</NavigationLink>
          </Sections>
        </NavigationContainer>
      </Nav>
    )
  }
}

export default Navigation
