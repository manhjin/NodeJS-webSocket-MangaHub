const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const publicPath  = path.join(__dirname,'../public');

var app = express();
var server = http.createServer(app);
var io = socketIO(server);
app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');
    socket.emit('newEmail',{
        from:'manh@gmail.com',
        text:'hello'
    });
    socket.on('createEmail',(newEmail)=>{
        console.log('createEmail',newEmail);
    });
    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });
});

server.listen(3000,()=>{
    console.log('server is running on port 3000');
});
