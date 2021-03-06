import React from 'react';
import styled from 'styled-components';
import { space, layout, flexbox, border, color, textAlign } from 'styled-system';

const AbstractBox = styled.div`
  ${space}
  ${layout}
  ${flexbox}
  ${border}
  ${color}
  ${textAlign}
`;

const Box = ({ as, children, ...props }) => (
  <AbstractBox as={as} {...props}>{children}</AbstractBox>
);

export default Box;
