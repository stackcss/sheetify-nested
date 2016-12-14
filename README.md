# sheetify-nested [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5] [![test coverage][6]][7]
[![downloads][8]][9] [![js-standard-style][10]][11]

Sheetify plugin to unwrap nested rules.

```
// in.js
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
```

```
/* out.css */
._5e252abd .input {
    color: blue;
}
._5e252abd .button:hover,._5e252abd .button:focus {}
```

## Command line
```sh
$ browserify ./test/in.js -t [ sheetify/transform -u sheetify-nested ]
```

## JS api
```js
const browserify = require('browserify')

browserify()
  .transform('sheetify/transform', { use: [ 'sheetify-nested' ] })
  .bundle()
```

## Installation
```sh
$ npm install sheetify-nested
```

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/sheetify-nested.svg?style=flat-square
[3]: https://npmjs.org/package/sheetify-nested
[4]: https://img.shields.io/travis/stackcss/sheetify-nested/master.svg?style=flat-square
[5]: https://travis-ci.org/stackcss/sheetify-nested
[6]: https://img.shields.io/codecov/c/github/stackcss/sheetify-nested/master.svg?style=flat-square
[7]: https://codecov.io/github/stackcss/sheetify-nested
[8]: http://img.shields.io/npm/dm/sheetify-nested.svg?style=flat-square
[9]: https://npmjs.org/package/sheetify-nested
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
