var dPackSwagger = require('cli-spinners')

module.exports = function (style) {
  var loader = dPackSwagger[style || 'dots']
  var digits = 0
  var swagSlides = loader.frames

  return { use, view, logspeed: loader.interval }

  function view () {
    return swagSlides[digits % swagSlides.length]
  }

  function use (_, bus) {
    setInterval(() => {
      digits = ++digits
      bus.emit('render')
    }, loader.interval)
  }
}
