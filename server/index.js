var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database-mongo/index.js')
var bodyParser = require('body-parser');
var request = require('request');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());


app.get('/getEvents', function(req, res) {
	db.selectAll(function(err, events){
		if (err) {
			res.setStatus(500);
		} else {
			res.send(events);
		}
	})
});

app.post('/createUser', function(req, res) {
  db.createUser(req.body, function(err, user) {
    if (err) {
      res.send(err);
    } else {
      res.status(200).send();
    }
  })
});

app.post('/createEvent', function(req, res) {
	db.createEvent(req.body, function(err, events) {
		if (err) {
			res.send(err);
		} else {
			res.status(200).send();
		}
	})
});

app.post('/removeEvent', function(req, res) {
  db.removeEvent(req.body, function(err, events) {
    if (err) {
      res.send(err);
    } else {
      res.status(200).send();
    }
  })
});

// GET for Search component
app.get('/search', function(req, res) {
	console.log('YELP QUERY', req.query);

  var yelpRequest = {
    url: 'https://api.yelp.com/v3/businesses/search?sort_by=review_count&limit=5&location=' + req.query.location + '&term=' + req.query.term,
    method: 'GET',
    json: true,
    headers: {
      authorization: 'Bearer rq8_N38VNAGT5kiZU6nfuETDw2fhd_Plo4x27mPPrTKNdzxWkRxu1d3flc4_WfqbvYedanJUH5XyfovG3ZimMoL19TSLdxXdqS-vm3t1uSJbny1owcfUSuiQCFTDWHYx'
    }
  };

  // send GET request to Yelp
  request(yelpRequest, function(error, response, body) {
    if (error) {
      console.error('---> YELP ERROR', error);
    } else {
      res.status(201).send(body.businesses);
    }
  });
});

app.listen(3000, function() {
  console.log('Magic happens on port 3000!');
});
