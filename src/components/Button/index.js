import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
  box-sizing: border-box;
  height: 42px;
  border-radius: 4px;
  border: none;

  color: ${props => props.theme.lightText};
  text-transform: uppercase;
  background: linear-gradient(to right, rgba(74,79,105,1) 0%,rgba(73,84,142,1) 30%,rgba(74,120,141,1) 100%);

  cursor: pointer;
`

const Button = ({ children }) => (
  <Btn>
    {children}
  </Btn>
)

export default Button