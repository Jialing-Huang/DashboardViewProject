const express = require("express");
const adminController = require("../controllers/admin");
const router = express.Router();

//Set the router
router.post("/register", adminController.createAdmin);
router.post("/login", adminController.adminLogin);

module.exports = router;