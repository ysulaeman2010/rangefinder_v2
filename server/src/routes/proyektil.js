const express = require("express");
const configController = require("../controllers/config");

const router = express.Router();

router.post("/proyektil/post/", configController.postData);
router.get("/proyektil/get/", configController.getData);
router.patch("/proyektil/patch/", configController.patchData);

module.exports = router;
