var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');
//mongoose.connect('mongodb://mm:hrsf73@ds159348.mlab.com:59348/day-tripper');
mongoose.connect(process.env.MONGODB_URI);

var connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function() {
  console.log("Connected to MongoDB!");
});

module.exports = connection;

