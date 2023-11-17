const express = require("express");

const controller = require("../controller");

const router = express.Router({ mergeParams: true });

// router.route("/person").get(controller.employeeController.getPerson);

module.exports = router;
