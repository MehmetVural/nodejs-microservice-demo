const mongoose = require('mongoose');
//const environment = require('../config/environment');

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });
//mongoose.connect('mongodb+srv://localhost:27017/test', { useNewUrlParser: true });
//var db = mongoose.connection;

mongoose.Promise = global.Promise;

module.exports = mongoose;
