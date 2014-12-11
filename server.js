var express             = require('express'),
    app                 = express(),
    bodyParser          = require('body-parser'),
    meetupsController   = require('./server/controllers/meetups-controller');

app.use(bodyParser.json())

app.get('/', function (request, response) {
  response.sendFile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));

app.post('/api/meetups', meetupsController.create);

app.listen(3000, function() {
  console.log('ready and waiting');
});