const express = require("express");
const router = express.Router();

//const keycloak = require('../config/keycloak-config.js');

router.get("/", (req, res, next) => {
  return res.status(200).send({
    message: "The API is UP && RUNNING! v.1"
  });
});

router.use("/restaurant",  require("./restaurant"));
router.use("/data", require("./data-management"));
router.use("/review", require("./review"));
router.use("/event", require("./event"));
router.use("/dish", require("./dish"));
router.use("/home", require("./home"));

module.exports = router;