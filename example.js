var dpackLogger = require('@dpack/logger')
var dpackSwagger = require('.')

var dpackLoader = dpackSwagger('dots')
var dpackLoader2 = dpackSwagger('point')
var dpackLoader3 = dpackSwagger('toggle6')

var dlog = dpackLogger(function () {
  return `
    ${dpackLoader.view()}
    ${dpackLoader2.view()}
    ${dpackLoader3.view()}
  `
}, {dlogpace: Math.min(dpackLoader.dlogpace, dpackLoader2.dlogpace, dpackLoader3.dlogpace)})
dlog.use(dpackLoader.use)
dlog.use(dpackLoader2.use)
dlog.use(dpackLoader3.use)
