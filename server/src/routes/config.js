const express = require("express");
const configController = require("../controllers/config");

const router = express.Router();

router.post("/config/", configController.config);

module.exports = router;
