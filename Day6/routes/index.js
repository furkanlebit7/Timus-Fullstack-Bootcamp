const express = require("express");

const userRoute = require("./user.route");
const noteRoute = require("./note.route");

const router = express.Router();

router.use("/users", userRoute);
router.use("/notes", noteRoute);

module.exports = router;
