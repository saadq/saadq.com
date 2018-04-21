import { css } from 'styled-components'

const theme = css`
  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    font-size: 0.8em;
    font-family: Consolas, monospace;
  }

  :not(pre) > code[class*='language-'] {
    background: transparent !important;
    font-size: 0.9em;
  }

  pre[class*='language-'] {
    background: #fafafa !important;
    color: black !important;
    padding: 1em;
    overflow-x: auto;
    font-weight: 300 !important;
  }

  .token {
    &.comment {
      color: #888;
    }
  }

  kbd {
    background-color: #f7f7f7;
    border: 1px solid #ccc;
    border-radius: 3px;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2), 0 0 0 2px #fff inset;
    color: #333;
    display: inline-block;
    font-size: 11px;
    line-height: 1.4;
    margin: 0 0.1em;
    padding: 0.1em 0.6em;
    text-shadow: 0 1px 0 #fff;
  }
`

export default theme
