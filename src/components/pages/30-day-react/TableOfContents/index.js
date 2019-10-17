import React from 'react';
import Text from '../../../Text';
import Box from '../../../Box';

import Lesson from './Lesson';

import content from './content';

const TOC = () => {

  return (
    <Box px={3} as="section">
      <Text as="h4" fontSize="18px">Table of Contents</Text>

      <div>
        {content.map((lesson, i) => (
          <Lesson key={i}>
            <Lesson.Image src={lesson.image} />
            <Lesson.Title>{lesson.title}</Lesson.Title>
            <Lesson.Description>{lesson.description}</Lesson.Description>
            <Box display="flex">
              {lesson.tags.map((tag, i) => (
                <Lesson.Tag key={`tag-${i}`}>{tag}</Lesson.Tag>
              ))}
            </Box>
          </Lesson>
        ))}
      </div>
    </Box>
  );
}

export default TOC;
