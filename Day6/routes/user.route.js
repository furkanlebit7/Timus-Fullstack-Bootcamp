const express = require("express");

const controller = require("../controller");

const router = express.Router({ mergeParams: true });

router.route("/").get(controller.userController.getUsers);
router.route("/:id").get(controller.userController.getUserById);
router.route("/").post(controller.userController.insertUser);
router.route("/:id").put(controller.userController.updateUser);
router.route("/:id").delete(controller.userController.deleteUser);
router.route("/:id/notes").get(controller.userController.getUserNotes);

module.exports = router;
