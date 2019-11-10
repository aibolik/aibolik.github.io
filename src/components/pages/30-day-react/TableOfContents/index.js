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
          <Lesson key={i} display={['block', 'flex']}>
            <Box order={[1, 2]} flex={['none', 0.3]}>
              <Lesson.Image src={lesson.image} />
            </Box>
            <Box order={[2, 1]} flex={['none', 0.7]}>
              <Lesson.Title>{lesson.title}</Lesson.Title>
              <Lesson.Description dangerouslySetInnerHTML={{ __html: lesson.description }} />
              <Box display="flex">
                {lesson.tags.map((tag, i) => (
                  <Lesson.Tag key={`tag-${i}`}>{tag}</Lesson.Tag>
                ))}
              </Box>
            </Box>
          </Lesson>
        ))}
        <Text fontWeight="400" fontSize="1.2em" fontStyle="italic" textAlign="center" mb={4}>More coming soon...</Text>
      </div>
    </Box>
  );
}

export default TOC;
