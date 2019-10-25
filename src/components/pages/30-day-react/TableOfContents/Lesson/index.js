import React from 'react';
import styled from 'styled-components';
import { space, layout } from 'styled-system';

import Text from '../../../../Text';
import Box from '../../../../Box';

const Img = styled.img`
  width: 100%;
  ${space}
  ${layout}
`;

const Tag = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 4px 10px;
  margin-right: 8px;
`;

const Title = ({ children }) => (
  <Text as="p" m={0} fontWeight="600" mt={2} mb={3} fontSize="1.2em">{children}</Text>
);

const Description = ({ children }) => (
  <Text as="p" m={0} mb={3} pr={3}>{children}</Text>
);

const Image = ({ src, ...props }) => (
  <Img src={src} {...props} />
);

const Lesson = ({ children, ...props }) => {
  return (
    <Box mb={4} {...props}>{children}</Box>
  );
}

Lesson.Title = Title;
Lesson.Description = Description;
Lesson.Image = Image;
Lesson.Tag = Tag;

export default Lesson;
