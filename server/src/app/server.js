var express = require('express')
var app = express()
var path = require('path')
var server = require('http').Server(app)
var io = require('socket.io')(server)
// import * as Snack from '../snack.js'
var Snack = require('../snack.js')


// server.listen(4000)
var pastSnacks = []



//console.log(path.resolve(__dirname, '..', 'public'))
app.use(express.static(path.resolve(__dirname, '..', 'public')))

io.sockets.on('connection', function (socket) {
    socket.on('set', function (status, callback) {
        console.log(status);
        callback('this is a callback');
    });

    // what happens when a client wants to add a new snack
    socket.on('createSnack', (data, callback) => {
    	// id obviously not truly unique, but ok for now
    	// Snack.setID(data)
    	// add to past snacks on the server
    	pastSnacks.push(Snack.setID(data))
    	// save
        console.log(pastSnacks)
    	// broadcast to all Users connected (including original client)
    	socket.broadcast.emit('addSnack', data)
    	// socket.emit('addSnack', data)
        console.log(data.messageID)
        callback(data.messageID)
    	})
    
    // if a new client connects, serve him the past Snacks	
    socket.emit('oldSnacks', pastSnacks);
    socket.emit('needCoffee',10)
});

console.log(new Date().getTime())

server.listen(4000)
module.exports = app
