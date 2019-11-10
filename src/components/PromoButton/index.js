import React from 'react';
import styled from 'styled-components';
import { space, layout, border, color, typography } from 'styled-system';

const Button = styled.button`
  padding: 8px 16px;
  background: transparent;
  border: 1px solid rgba(0, 0, 0, .24);
  border-radius: 8px;
  text-decoration: none;
  text-align: center;

  ${space}
  ${layout}
  ${border}
  ${color}
  ${typography}
`;

const PromoButton = props => {
  const { children, ...rest } = props;
  return (
    <Button {...rest}>
      {children}
    </Button>
  );
}

export default PromoButton;
