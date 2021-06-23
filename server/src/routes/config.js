const express = require("express");
const configController = require("../controllers/config");

const router = express.Router();

router.post("/config/post/", configController.postData);
router.get("/config/get/", configController.getData);
router.get("/config/get/:id", configController.getDataById);

module.exports = router;
