//  OpenShift sample Node application
var express = require('express'),
  app = express(),
  morgan = require('morgan');

Object.assign = require('object-assign')

//app.engine('html', require('ejs').renderFile);
//app.use(morgan('combined'))

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
  ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
  mongoURL = process.env.OPENSHIFT_MONGODB_DB_URL || process.env.MONGO_URL,
  mongoURLLabel = "";


const keycloak = require('./config/keycloak-config.js').initKeycloak();
app.use(keycloak.middleware());

const testController = require('./controller/test-controller.js');
app.use('/test', testController);

app.get('/', function (req, res) {
  res.send("Server is up!");
});

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

//module.exports = app;