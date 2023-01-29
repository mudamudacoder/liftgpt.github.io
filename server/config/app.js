var express = require('express');
var path = require('path');
var app = express();

// Enable CORS for all routes
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Define a static folder for serving the frontend files
app.use(express.static(path.join(__dirname, '../../client/liftgpt/dist/liftgpt')));

// Define routes
//app.use('/api', require('./routes/api'));

// Fallback route to serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/liftgpt/dist/liftgpt/index.html'));
});

module.exports = app;
