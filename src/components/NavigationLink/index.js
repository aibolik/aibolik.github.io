import React from 'react';
import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import { media } from '../../helpers/style-helper'

const Link = styled(GatsbyLink)`
  display: block;
  width: calc(100% - 40px);
  padding: 12px 0;
  color: ${props => props.theme.secondaryLight};
  text-decoration: none;
  order: 2;

  &[data-active] {
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
`;

const isPartiallyActive = ({ isPartiallyCurrent, isCurrent, location, href }) => {
  if (href === '/') {
    return (isCurrent || location.pathname.indexOf('/blog') > -1) ? { 'data-active': true } : null;
  }
  return isPartiallyCurrent ? { 'data-active': true } : null;
}

export default ({ to, children }) => <Link getProps={isPartiallyActive} to={to}>{children}</Link>;
