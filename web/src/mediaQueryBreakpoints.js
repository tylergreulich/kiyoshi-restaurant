import { css } from 'styled-components'

const sizes = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
}

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) =>
    css`
      @media (max-width: ${sizes[label]}px) {
        ${css(...args)};
      }
    `
  return acc
}, {})
