import productTeardownImage from './assets/product-teardown.svg';
import fishingImage from './assets/fishing.svg';
import weatherImage from './assets/weather.svg';
import keyboardImage from './assets/keyboard.svg';
import audioImage from './assets/audio-speech.svg';
import debounceImage from './assets/debounce.svg';
import animationImage from './assets/animation.svg';
import catinderImage from './assets/catinder.svg';

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

  {
    image: keyboardImage,
    title: 'Keyboard App',
    description: `Even if this lesson is not really "real-world" project, it has many interactions, so we have more opportunities to practice hooks.`,
    tags: ['project', 'hooks'],
  },

  {
    image: audioImage,
    title: 'Playing with Audio. Taking notes from speech',
    description: `Here we will explore how to interact with interesting asynchronous API of browser - <em>SpeechRecognition</em>. We will dive into usage of 'useEffect' hook.`,
    tags: ['project', 'hooks'],
  },

  {
    image: debounceImage,
    title: 'Debounce hook',
    description: `We will implement Debounce hook - 'useDebounce'. Using debounce hook we will try to reduce number of re-renders, and I will show how to profile components in ReactDevTools.`,
    tags: ['project', 'custom hook'],
  },

  {
    image: animationImage,
    title: 'Simple animation with `useSpring`',
    description: `I will show how powerful is 'react-spring' library. With the release of Hooks it became even easier to create different animation with 'useSpring' hooks.`,
    tags: ['project', 'animations'],
  },

  {
    image: catinderImage,
    title: 'CaTinder',
    description: `Tinder App for cats :). We will be implementing complex animation with 'react-spring', 'react-use-gesture'. Everything is hooks.`,
    tags: ['project', 'animations'],
  },



]
