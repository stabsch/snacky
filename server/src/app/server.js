var express = require('express')
var app = express()
var path = require('path')
var server = require('http').Server(app)
var io = require('socket.io')(server)
// import * as Snack from '../snack.js'
var Snack = require('../snack.js')


// server.listen(4000)
var pastSnacks = []
//
// I don't think it's really necessary to save to a json, start with clean slate at every server start 
//
//console.log(path.resolve(__dirname, '..', 'public'))
app.use(express.static(path.resolve(__dirname, '..', 'public')))

io.sockets.on('connection', function (socket) {
    // what happens when a client wants to add a new snack
    socket.on('createSnack', (data, callback) => {
    	// id obviously not truly unique, but ok for now
    	// Snack.setID(data)
    	// add to past snacks on the server
    	pastSnacks.push(Snack.setID(data))
    	
        console.log(pastSnacks)
    	// broadcast to all Users connected (including original client)
    	socket.broadcast.emit('addSnack', data)
    	// socket.emit('addSnack', data)
        // does it with a callback
        console.log(data.messageID)
        callback(data.messageID)
    	})
    socket.on('matchUsertoSnackMessage', (data, callback) => {
        console.log(data.name,data.messageID)
        // add user to message's matchedUsers array
        pastSnacks.filter(Snack => Snack.messageID == data.messageID).forEach(element => {
            element.matchedUsers.push(data.name)
        })
        console.log( pastSnacks.filter(Snack => Snack.messageID == data.messageID))
        // goes out to socket in App to edit list of Snackmessages accordingly
        socket.broadcast.emit('editInMatchedUser', data)
        socket.emit('editInMatchedUser', data)
    })
    
    // if a new client connects, serve him the past Snacks	
    socket.emit('oldSnacks', pastSnacks);
    socket.emit('needCoffee',10)
});

console.log(new Date().getTime())

// change this port (or do process.env)
// server.listen(4000)
module.exports = server
