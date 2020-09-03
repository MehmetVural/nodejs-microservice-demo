require("dotenv").config({
  //path: process.env.NODE_ENV === "development" ? ".env.development" : ""
  path: ".env.development"
});

const config = {
  development: {
    mongoURL: 'mongodb://localhost:27017/bon-appetit', //process.env.DATABASE_URL,
    port: 3001, //process.env.PORT
  }
};

module.exports = config[process.env.NODE_ENV];
