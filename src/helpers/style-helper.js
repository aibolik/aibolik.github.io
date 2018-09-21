import { css } from 'styled-components'

const sizes = {
  tablet: 768,
  desktop: 1020,
  desktopMedium: 1280
}

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media screen and (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})