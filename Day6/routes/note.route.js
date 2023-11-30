const express = require("express");

const controller = require("../controller");

const router = express.Router({ mergeParams: true });

router.route("/").get(controller.notesController.getNotes);
router.route("/:id").get(controller.notesController.getNoteById);
router.route("/").post(controller.notesController.insertNote);
router.route("/:id").put(controller.notesController.updateNote);
router.route("/:id").delete(controller.notesController.deleteNote);
router.route("/user/:id").get(controller.notesController.getNotesByUserId);

module.exports = router;
