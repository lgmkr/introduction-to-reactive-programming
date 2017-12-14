const serve = require('serve')
const server = serve('./assets', {
  port: 1337,
  ignore: ['node_modules']
})
