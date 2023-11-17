const express = require("express");

const authRouter = require("./auth.route");
const employeeRouter = require("./employee.route");
const bardakRoute = require("./bardak.route");

const router = express.Router();

router.use("/auth", authRouter);
router.use("/employee", employeeRouter);
router.use("/urun", bardakRoute);

module.exports = router;
