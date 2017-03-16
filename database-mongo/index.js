// pulls Mongoose dependency for creating schemas
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// creates a user Schema. this will be the basis of how user data is stored in the db
var EventSchema = new Schema({
	eventTitle: {String},
	eventDescription: {String},
	business: {String, required: true},
	eventHours: [{String, required: true}],
	phone: {String, required: true},
	address: {String, required: true},
	longitude: {Number, required: true},
	latitude: {Number, required: true}
})

// sets the created_at parameter equal to the current time
EventSchema.pre('save', function(next){
    now = new Date();
    this.updated_at = now;
    if(!this.created_at) {
        this.created_at = now
    }
    next();
});

// indexes this schema in 2dsphere format
EventSchema.index({location: '2dsphere'});

// exports the EventSchema for use elsewhere. sets the mongoDB collection to be used as: "events"
module.exports = mongoose.model('events', EventSchema);