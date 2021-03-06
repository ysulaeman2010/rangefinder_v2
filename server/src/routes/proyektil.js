const express = require("express");
const proyektilController = require("../controllers/proyektil");

const router = express.Router();

router.get("/proyektil/get/", proyektilController.getData);
router.patch("/proyektil/patch/", proyektilController.patchData);

module.exports = router;
