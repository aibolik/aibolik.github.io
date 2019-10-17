import React from 'react';
import styled from 'styled-components';
import { space, layout, flex, border } from 'styled-system';

const AbstractBox = styled.div`
  ${space}
  ${layout}
  ${flex}
  ${border}
`;

const Box = ({ as, children, ...props }) => (
  <AbstractBox as={as} {...props}>{children}</AbstractBox>
);

export default Box;
