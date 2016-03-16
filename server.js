/**
  This is where I'm sticking all the node stuff.
*/


// set up express server
var express = require('express'), 
app = express(),
path = require('path'),
router = express.Router(),
server = require('http').createServer(app),
io = require('socket.io').listen(server);

// this is how you register all your other folders
app.use('/views', express.static(__dirname + '/views'));
app.use('/public',express.static(__dirname + '/public'));
app.use('/controllers', express.static(__dirname + '/controllers'));


server.listen(process.env.PORT || 3000, function () {
  console.log('Chatty listening on port 3000')  
});

// CRUD stuff

app.get('/', function (req, res) {
  console.log('Talking from ' + __dirname)
    res.sendfile(__dirname + '/views/index.html')
})

// sockets stuff

io.sockets.on ('connection', function (socket) {
  console.log('I connected to the socket!!');
});