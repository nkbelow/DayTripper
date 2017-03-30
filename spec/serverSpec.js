var models = require('../spec/serverSpec');

describe('', function() {

  beforeEach( function(done) {

    mongoose.connect('mongodb://localhost/daytripper');
    var db = mongoose.connection;
    
    mongoose.connection.collections.forEach(function(collection, i, database) {
      collection.disconnect(function() {});
      if (i === database.length - 1) {
        done;
      }
    });
    
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
      username: String,
      password: String,
    });

    var User = mongoose.model('User', UserSchema);

    done();
  });

  afterEach( function(done) {
    db.disconnect();
    done();
  });

  describe('')
});