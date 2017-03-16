var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to MongoDB!");
});


// creates a user Schema. this will be the basis of how user data is stored in the db
var EventSchema = mongoose.Schema({
	eventTitle: String,
	eventDescription: String,
	business: String,
	eventHours: String,
	phone: String,
	address: String,
	longitude: Number,
	latitude: Number,
});

var Event = mongoose.model({'Event', EventSchema});

module.exports.Event = Event;