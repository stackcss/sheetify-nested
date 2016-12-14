var css = require('sheetify')

css`
  :host {
    .input {
      color: blue;
    }
    .button {
      &:hover, &:focus {}
    }
  }
`
