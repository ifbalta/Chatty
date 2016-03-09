/**
  This is where I'm sticking all the node stuff.
*/


// set up express server
var express = require('express'), 
app = express(),
path = require('path'),
router = express.Router(),
server = require('http').createServer(app),
io = require('socket.io').listen(server)

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile());
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/'));

app.listen(process.env.PORT || 3000, function () {
  console.log('Chatty listening on port 3000')  
});

/*server.listen(3000, function () {
  console.log('Started listening on port 3000')  
})*/

app.get('/', function (req, res) {
  console.log('Talking from ' + __dirname)
    res.sendFile(__dirname + '/start.html')
})