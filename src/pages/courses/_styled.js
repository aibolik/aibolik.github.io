import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

export const Content = styled.section`
  padding: 16px;
  min-height:
`;

export const Link = styled(GatsbyLink)`
  text-decoration: none;
  color: inherit;

  p {
    line-height: 1.5;
  }
`;

export const CourseTitle = styled.h2`
  font-size: 1.8em;
  line-height: 1.2;
`;
