import React from 'react';
import styled from 'styled-components';
import { space, typography } from 'styled-system';

const AbstractText = styled.div`
  ${space}
  ${typography}
`;

const Text = ({ as, children, ...rest }) => (
  <AbstractText as={as} {...rest}>{children}</AbstractText>
);

export default Text;
