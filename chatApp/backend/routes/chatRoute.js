const asyncHandler = require('express-async-handler');
const express = require('express');
const router = express.Router();
const { accessChat, fetchChats, createGroup, rename,remove,addTogroup } = require('../controller/chatControlle');
const { protect } = require("../middlewares/authMiddleware");

router.post('/', protect, accessChat);
router.get('/fetchChats', protect, fetchChats);
router.post('/createGroup', protect, createGroup);
router.put('/rename', protect, rename);
router.put('/remove', protect, remove);
router.put('/addTogroup', protect, addTogroup);


module.exports = router;