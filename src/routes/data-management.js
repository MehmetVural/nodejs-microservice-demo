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


module.exports = router;
