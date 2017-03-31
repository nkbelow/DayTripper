var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var connection = require('../database-mongo/index.js');
var db = require('../database-mongo/models.js');
var bodyParser = require('body-parser');
var request = require('request');
var passport = require('./middleware/initGoogle.js');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session({
  secret: 'Victoria\'s',
  resave: true,
  saveUninitialized: true
}));


app.get('/getEvents', function(req, res) {
	db.selectAll(function(err, events){
		if (err) {
			res.send(err);
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

app.post('/updateEvent', function(req, res) {
  db.updateEvent(req.body.location, req.body.newInfo, function(err, events) {
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

app.get('/authenticate', passport.authenticate('google', { scope : ['profile', 'email'] }), function(req, res) {
});

app.get('/auth/google/callback', passport.authenticate('google'), function(req, res) {

  // var exampleTrip = {
  //   id: 23,
  //   events: [{'name': 'hello', 'number': 3}, {'name': 'goodbye', 'number': 4}],
  //   name: 'this is a string',
  //   photos: ['string1', 'string2', 'string3'],
  //   participants: ['nick', 'below', 'anthony', 'gus']
  // };
  // db.createTrip(exampleTrip, function(err, events) {
  //   if (err) {
  //     console.log(err, 'this is my err');
  //   } else {
  //     console.log(events, 'this is my event');
  //   }
  // });
  res.redirect('/');
});

// GET for Search component
app.get('/search', function(req, res) {
	console.log('YELP QUERY', req.query);

  var yelpRequest = {
    url: 'https://api.yelp.com/v3/businesses/search?sort_by=review_count&limit=8&location=' + req.query.location + '&term=' + req.query.term,
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

app.listen(process.env.PORT || 3000, function() {
  console.log('Magic happens on port 3000!');
});
