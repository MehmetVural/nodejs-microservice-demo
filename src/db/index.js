const mongoose = require('mongoose');
//const environment = require('../config/environment');
mongoDB_URL                 = "172.30.229.9:27017";
mongoDB_user       = process.env.MONGODB_USER;
mongoDB_password   = process.env.MONGODB_PASSWORD
mongoDB_name       = process.env.MONGODB_DATABASE
const mongourl = "mongodb://" + mongoDB_user + ":" + mongoDB_password +"@" + mongoDB_URL + "/" + mongoDB_name;
//console.log(mongourl);
//mongoose.connect(mongourl, { useNewUrlParser: true });
mongoose.connect(mongourl, { useUnifiedTopology: true });

//mongoose.connect('mongodb+srv://localhost:27017/test', { useNewUrlParser: true });
//var db = mongoose.connection;

mongoose.Promise = global.Promise;

module.exports = mongoose;
