var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to MongoDB!");
});

var EventSchema = mongoose.Schema({
	description: String,
	start: String,
	end: String,
	location: String,
	phone: String,
	address: String,
	latitude: Number,
	longitude: Number,
});

var Event = mongoose.model('Event', EventSchema);

var selectAll = function(callback) {
	Event.find({}, function(err, events) {
		if (err) {
			callback(err, null);
		} else {
			callback(null, events)
		}
	});
};

var createEvent = function(obj, callback) {
	Event.create(obj, function(err, events) {
		if (err) {
			callback(err, null);
		} else {
			console.log('CREATE --->', events)
			callback(null, events);
		}
	});
};

var removeEvent = function(obj, callback) {
	Event.remove(obj, function(err, events) {
		if (err) {
			callback(err, null);
		} else {
			console.log('---> EVENT REMOVED!')
			callback(null, events);
		}
	})
};

module.exports.Event = Event;
module.exports.selectAll = selectAll;
module.exports.createEvent = createEvent;
module.exports.removeEvent = removeEvent;