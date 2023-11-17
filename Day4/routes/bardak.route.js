const express = require("express");

const controller = require("../controller");

const router = express.Router({ mergeParams: true });

router.route("/bardak").post(controller.urunController.bardakSave);
router.route("/bardak").get(controller.urunController.bardakGetAll);
router.route("/bardakq").get(controller.urunController.bardakGetQuery);
router.route("/bardak/:id").get(controller.urunController.bardakGet);
router.route("/bardak/:id").put(controller.urunController.bardakUpdate);
router.route("/bardak/:id").delete(controller.urunController.bardakDelete);

module.exports = router;
