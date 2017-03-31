var mongoose = require('mongoose');
var db = require('../database-mongo/models.js');
var expect = require('chai').expect;

beforeEach(function(done) {
  mongoose.connect('mongodb://localhost/dayTripper');
  mongoose.connection.collections.forEach(function(collection, index, database) {
    collection.remove(function() {});
    if (index === database.length) {
      done();
    }
  });
});

afterEach(function(done) {
  mongoose.connection.close(function() {
    console.log('test over, disconnected');
    done();
  });
});
describe('createEvents', function() {
  it('should require have an id', function(done) {
    db.createEvent({description: 'eating tacos'}, function(err, event) {
      if(err) {
        done(err);
      } else {
        db.getEvents(function(err, events) {
          expect(events.length).to.be(0);
          done();
        });
      }
    });
  });
});
describe('it should get all events for the user', function(done) {
  
});