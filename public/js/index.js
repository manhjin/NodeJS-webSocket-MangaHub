var socket = io();
socket.on('connect',function(){
    console.log('Connected');
});
socket.on('disconnect',function(){
    console.log('Disconnected from server');
});
socket.on('newEmail',function(email){
    console.log('new Email',email);
});
socket.emit('createEmail',{
   to:'manhjin@gmail.com',
   text:'hey'
});