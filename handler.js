'use strict'
const universalHello = require('./handler.hello')
const awsHello = (event, context, callback) => universalHello(event, context, callback)
const azureHello = (context, req) => universalHello(req, context, (err, res) => context.done(err, res))
switch (process.env.PROVIDER) {
  case 'azure':
    module.exports.hello = azureHello
    break
  default:
    module.exports.hello = awsHello
}
