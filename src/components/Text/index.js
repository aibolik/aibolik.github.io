import React from 'react';
import styled from 'styled-components';
import { space, typography } from 'styled-system';

const AbstractText = styled.div`
  line-height: 1.4;
  ${space}
  ${typography}
`;

const Text = ({ as, children, ...rest }) => (
  <AbstractText as={as} {...rest}>{children}</AbstractText>
);

export default Text;
