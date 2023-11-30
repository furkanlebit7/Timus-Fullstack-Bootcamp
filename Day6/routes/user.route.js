const express = require("express");

const controller = require("../controller");

const router = express.Router({ mergeParams: true });

router.route("/").get(controller.userController.getUsers);
router.route("/:id").get(controller.userController.getUserById);
router.route("/").post(controller.userController.postUser);
router.route("/:id").put(controller.userController.updateUser);
router.route("/:id").delete(controller.userController.deleteUser);
module.exports = router;
