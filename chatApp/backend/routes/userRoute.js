
const express = require("express");
const router = express.Router();
const { registerUser, authUser, allusers } = require('../controller/userController')
const {protect}=require("../middlewares/authMiddleware")

router.post("/signup", registerUser);
router.post("/auth", authUser);
router.get("/", protect, allusers);




module.exports = router;
