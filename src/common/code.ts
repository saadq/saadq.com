import { css } from 'styled-components'

const lightTheme = css`
  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    font-size: 0.8em;
    font-family: monospace;
  }

  :not(pre) > code[class*='language-'] {
    background: transparent !important;
  }

  pre[class*='language-'] {
    background: #fafafa !important;
    color: black !important;
    padding: 1em;
    overflow-x: scroll;
    font-weight: 300 !important;
  }
`

const darkTheme = css``

export { lightTheme, darkTheme }