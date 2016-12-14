var browserify = require('browserify')
var concat = require('concat-stream')
var path = require('path')
var test = require('tape')
var fs = require('fs')

test('should unwrap nested CSS', function (t) {
  t.plan(1)

  var expected = fs.readFileSync(path.join(__dirname, 'out.css'), 'utf8')
  browserify(path.join(__dirname, 'in.js'))
    .transform('sheetify/transform', { use: [ './' ] })
    .plugin('css-extract', { out: createWs })
    .bundle()

  function createWs () {
    return concat({ encoding: 'string' }, function (css) {
      t.equal(css.trim(), expected.trim(), 'css is equal')
    })
  }
})
