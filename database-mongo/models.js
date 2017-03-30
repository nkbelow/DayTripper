var mongoose = require('mongoose');
var connection = require('./index');

var EventSchema = mongoose.Schema({
  username: String,
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

var UserSchema = mongoose.Schema({
  userId: String,  
  token: String,
  firstname: String,
  lastname: String,
  email: String
});

var User = mongoose.model('User', UserSchema);

var TripSchema = mongoose.Schema({
  id: Number,
  events: Array, 
  name: String,
  photos: Array,
  participants: Array
});

var Trip = mongoose.model('Trip', TripSchema);

var createTrip = function(obj, callback) {
  Trip.create(obj, function(err, trip) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, trip);
      console.log(trip);
    }
  })
}

var createUser = function(obj, callback) {
  User.create(obj, function(err, user) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, user);
      console.log(user)
    }
  });
};

var findUser = function(userId, callback) {
  User.find({userId: userId}, function(err, user) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, user);
    }
  })
}

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

var updateEvent = function(id, newInfo, callback) {
  Event.update(id, newInfo, function(err, events) {
    if (err) {
      callback(err, null);
    } else {
      console.log('UPDATE --->', events)
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
  });
};


module.exports.Event = Event;
module.exports.selectAll = selectAll;
module.exports.createUser = createUser;
module.exports.createEvent = createEvent;
module.exports.removeEvent = removeEvent;
module.exports.updateEvent = updateEvent;
module.exports.findUser = findUser;
module.exports.createTrip = createTrip;