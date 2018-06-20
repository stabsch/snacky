var express = require('express')
var app = express()
var path = require('path')
var server = require('http').Server(app)
var io = require('socket.io')(server)

// server.listen(4000)
console.log(path.resolve(__dirname, '..', 'public'))
app.use(express.static(path.resolve(__dirname, '..', 'public')))

io.sockets.on('connection', function (socket) {
    socket.on('set', function (status, callback) {
        console.log(status);
        callback('ok');
    });
});

server.listen(4000)
module.exports = app
