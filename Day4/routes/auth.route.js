const express = require("express");

const controller = require("../controller");

const router = express.Router({ mergeParams: true });

router.route("/login").post(controller.authController.login);
router.route("/refresh").post(controller.authController.refresh);
router.route("/logout/:token").post(controller.authController.login);

module.exports = router;
