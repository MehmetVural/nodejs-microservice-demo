var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var Keycloak = require('keycloak-connect');
var cors = require('cors');

var app = express();
app.use(bodyParser.json());

// Enable CORS support
app.use(cors());

// Create a session-store to be used by both the express-session
// middleware and the keycloak middleware.


var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
  ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
  mongoURL = process.env.OPENSHIFT_MONGODB_DB_URL || process.env.MONGO_URL,
  mongoURLLabel = "";

var memoryStore = new session.MemoryStore();

app.use(session({
  secret: '8d67fc9c-ddde-4b49-a78d-466279a10fdb',
  resave: false,
  saveUninitialized: true,
  store: memoryStore
}));

// Provide the session store to the Keycloak so that sessions
// can be invalidated from the Keycloak console callback.
//
// Additional configuration is read from keycloak.json file
// installed from the Keycloak web console.

var keycloak = new Keycloak({
  store: memoryStore
});

app.use(keycloak.middleware({
  logout: '/logout',
  admin: '/'
}));

app.get('/service/public', function (req, res) {
  res.json({ message: 'public' });
});

app.get('/service/secured', keycloak.protect('realm:user'), function (req, res) {
  res.json({ message: 'secured' });
});

app.get('/service/admin', keycloak.protect('realm:admin'), function (req, res) {
  res.json({ message: 'admin' });
});

//app.use('*', function (req, res) {
//  res.send('Not found!');
//});
app.get('/', function (req, res) {

  res.send('Server is running!');

});

//app.listen(port, ip);
app.listen(port, function () {
  console.log('Started at port 3000');
});