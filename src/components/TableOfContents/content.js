import productTeardownImage from './assets/product-teardown.svg';
import fishingImage from './assets/fishing.svg';
import weatherImage from './assets/weather.svg';

export default [
  {
    image: productTeardownImage,
    title: 'Components and Styling (CSS-in-JS)',
    description: 'We will go through main building blocks of React App: Components. Also we will setup our CSS in JS and try `styled-components`',
    tags: ['building blocks'],
  },

  {
    image: fishingImage,
    title: 'Using hooks and creating your own',
    description: `We will explore basic hooks with the simplest implementation, then implement data fetching hook step-by-step(doing naive implementation then refactoring, showing along the way how to use useEffect/useState/useReducer)`,
    tags: ['building blocks', 'hooks'],
  },

  {
    image: weatherImage,
    title: 'Weather App',
    description: `I find this project suitable to practice using hooks and styling. We will build something similar to weather widget in Google search.`,
    tags: ['project'],
  },

  // {
  //   image: weatherImage,
  //   title: 'Weather App',
  //   description: `I find this project suitable to practice using hooks and styling. We will build something similar to weather widget in Google search.`,
  //   tags: ['project'],
  // },
]
