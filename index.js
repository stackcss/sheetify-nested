var nest = require('postcss-nested')
var postcss = require('postcss')

module.exports = sheetifyNest

// SASS plugin for Sheetify
// (str, str, obj, fn) -> null
function sheetifyNest (filename, source, opts, done) {
  var processor = postcss([ nest(opts) ])
  processor.process(source)
    .then(function (res) {
      done(null, res.css)
    })
    .catch(done)
}
