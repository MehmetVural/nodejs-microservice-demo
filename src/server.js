var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();

app.use(bodyParser.json());

// Enable CORS support
app.use(cors());

// Create a session-store to be used by both the express-session
// middleware and the keycloak middleware.

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
  ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

const router = express.Router()

///////////// KEYCLOAK
// Provide the session store to the Keycloak so that sessions
// can be invalidated from the Keycloak console callback.
//
// Additional configuration is read from keycloak.json file
// installed from the Keycloak web console.
// const express = require("express");

/*
var Keycloak = require('keycloak-connect');
var session = require('express-session');
var memoryStore = new session.MemoryStore();

router.use(session({
    secret: '8d67fc9c-ddde-4b49-a78d-466279a10fdb',
    resave: false,
    saveUninitialized: true,
    store: memoryStore
}));

var keycloak = new Keycloak({
    store: memoryStore
});

//const mongoose = require("./config/keycloak-config");

app.use(keycloak.middleware({
    logout: '/logout',
    admin: '/admin'
}));

*/
// keycloak.protect('realm:admin'),
//// END KEYCLOAK

// APIS keycloak.protect('realm:admin'),
app.use("/workbc/api/v1", require("./routes"));

app.get('/', function (req, res) {
  res.send("Server is Running");
});

//app.listen(port, ip);
app.listen(port, function () {
  console.log('Started at port %s', port);
});