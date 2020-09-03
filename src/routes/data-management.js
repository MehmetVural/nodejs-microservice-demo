const express = require("express");
const router = express.Router();

const DataManagementController = require("../controllers/data-management-controller");

router.get("/", (req, res, next) => {
    return res.status(200).send({
        message: "UHUL! The API is UP && RUNNING!"
    });
});

router.get("/populate", DataManagementController.populate);
router.get("/clear",  DataManagementController.clear);

//mongoDB_URL                 = process.env.MONGODB_URL;
//mongoDB_database_user       = process.env.MONGODB_DATABASE-USER;
//mongoDB_database_password   = process.env.MONGODB_DATABASE_PASSWORD
//mongoDB_database_name       = process.env.MONGODB_DATABASE_NAME
//const mongourl = "mongodb://" + mongoDB_database_user + ":" + mongoDB_database_password +"@" + mongoDB_URL + "/" + mongoDB_database_name;

router.get("/connect", (req, res, next) => {
    return res.status(200).send({
        message: process.env.MONGODB_URL
    });
});

//console.log(mongourl);

//router.delete("/clear", DataManagementController.clear);

module.exports = router;
