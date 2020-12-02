const mongoose = require('mongoose');
//const environment = require('../config/environment');
mongoDB_user       = process.env.MONGODB_USER;
mongoDB_password   = process.env.MONGODB_PASSWORD
mongoDB_name       = process.env.MONGODB_DATBASE

// Openshift config
//mongoDB_URL                 = "172.30.34.74:27017";
mongoDB_user                  = "user"
mongoDB_password              = "password"
mongoDB_name                  = "mongodb"; 
mongoDB_URL                   = "172.25.111.98:27017";
//mongoDB_URL                   = "127.0.0.1:27017";
const mongourl = "mongodb://" + mongoDB_user + ":" + mongoDB_password +"@" + mongoDB_URL + "/" + mongoDB_name;
//const mongourl = "mongodb://172.25.111.98:27017/" + mongoDB_name;
//const mongourl = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false"

// Local Debug Config
//mongoDB_URL                 = "127.0.0.1:27017"; //DEV
//mongoDB_URL                   = "172.25.111.98:27017"; //PROD
//const mongourl = "mongodb://" + mongoDB_URL + "/mongodb"; // + mongoDB_name; //DEV

//console.log(mongourl);
mongoose.connect(mongourl, { useNewUrlParser: true  });
//mongoose.connect(mongourl, {  useUnifiedTopology: true });

//mongoose.connect('mongodb+srv://localhost:27017/test', { useNewUrlParser: true });
//var db = mongoose.connection;

mongoose.Promise = global.Promise;

module.exports = mongoose;