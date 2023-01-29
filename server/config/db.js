var mongoose = require('mongoose');

module.exports = function() {
  // Connect to the MongoDB database
  mongoose.connect('mongodb://localhost:27017/your-db-name', { useNewUrlParser: true });

  // Log an error if the connection fails
  mongoose.connection.on('error', function(err) {
    console.log('MongoDB connection error: ' + err);
    process.exit(-1);
  });

  // Log a message when the connection is successful
  mongoose.connection.once('open', function() {
    console.log('MongoDB connection successful');
  });
};
