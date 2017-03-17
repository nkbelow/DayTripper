var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database-mongo/index.js')
var bodyParser = require('body-parser');


var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser());


app.get('/get', function(req, res) {
	db.selectAll(function(err, events){
		if (err) {
			res.setStatus(500);
		} else {
			res.send(events);
		}
	})
});

app.post('/create', function(req, res) {
	db.createEvent(req.body, function(err, events) {
		if (err) {
			res.send(err);
		} else {
			res.status(200).send();
		}
	})
})


app.listen(3000, function() {
  console.log('Magic happens on port 3000!');
});
