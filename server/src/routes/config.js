const express = require("express");
const configController = require("../controllers/config");

const router = express.Router();

router.post("/config/post/", configController.postData);
router.get("/config/get/", configController.getData);
router.patch("/config/patch/", configController.patchData);

module.exports = router;
