const mongoose = require('mongoose');
//const environment = require('../config/environment');
mongoDB_URL                 = "172.30.229.9:27017";
mongoDB_database_user       = process.env.MONGODB_USER;
mongoDB_database_password   = process.env.MONGODB_PASSWORD
mongoDB_database_name       = process.env.MONGODB_DATABASE
const mongourl = "mongodb://" + mongoDB_database_user + ":" + mongoDB_database_password +"@" + mongoDB_URL + "/" + mongoDB_database_name;
console.log(mongourl);
//mongoose.connect(mongourl, { useNewUrlParser: true });
mongoose.connect(mongourl, { useUnifiedTopology: true });

//mongoose.connect('mongodb+srv://localhost:27017/test', { useNewUrlParser: true });
//var db = mongoose.connection;

mongoose.Promise = global.Promise;

module.exports = mongoose;
