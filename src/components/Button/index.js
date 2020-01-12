import React from 'react'
import styled from 'styled-components'
import { media } from '../../helpers/style-helper';

const Btn = styled.button`
  box-sizing: border-box;
  height: 42px;
  padding: 0 8px;
  border-radius: 4px;
  border: none;

  color: ${props => props.theme.lightText};
  background: linear-gradient(to right, rgba(74,79,105,1) 0%,rgba(73,84,142,1) 30%,rgba(74,120,141,1) 100%);

  cursor: pointer;

  ${media.tablet`
    padding: 0 16px;
  `}
`

const Button = ({ children }) => (
  <Btn>
    {children}
  </Btn>
)

const LoadableBtn = styled(Btn)`
  position: relative;
  overflow: hidden;

  span {
    display: inline-block;
    position: relative;
    transition: transform .3s;
  }

  &:after {
    content: '';
    opacity: 0;
    transition: opacity .3s;
  }

  &.loading {
    span {
      transform: translateX(-200%);
    }

    &:after {
      content: '';
      position: absolute;
      left: calc(50% - 10px);
      top: calc(50% - 10px);

      width: 10px;
      height: 10px;
      border: 4px solid;
      border-left-color: transparent;
      border-radius: 50%;

      opacity: 1;
      animation: rotate 1s linear infinite;
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export const LoadableButton = ({ children, loading, ...otherProps }) => (
  <LoadableBtn className={loading ? 'loading' : ''} {...otherProps}>
    <span>{children}</span>
  </LoadableBtn>
)

export default Button
