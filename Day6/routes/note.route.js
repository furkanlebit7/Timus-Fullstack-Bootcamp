const express = require("express");

const controller = require("../controller");

const router = express.Router({ mergeParams: true });

router.route("/").get(controller.notesController.getNotes);
router.route("/:id").get(controller.notesController.getNoteById);
router.route("/").post(controller.notesController.insertNote);

module.exports = router;
