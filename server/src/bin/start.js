var server = require('../app/server.js') // eslint-disable-line no-unused-vars
var port = process.env.PORT || 4000

console.log('port ' + port)
server.listen(port)