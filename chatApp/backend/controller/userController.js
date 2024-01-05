var asynHandler = require("express-async-handler");
var userModel = require("../models/userModel");
var generatToken = require("../config/generatToken");
var bcrypt = require('bcrypt');
var { protect } = require('../middlewares/authMiddleware');
//@description //create new user
//@route post
//@access public
//if you want to use asyncHandler or try catch both are same

const registerUser = asynHandler(async (req, res) => {
    console.log(req.body)
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({
            error:"please add all the fields"
        })
    }


    try {
        
    } catch {
        
    }

    const existUser = await userModel.findOne({ email: email })  
    if (existUser) {
        return res.status(400).json({ error: "user alredy exit whith this email..." })
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    console.log(hash);
    // console.log(passHash);
    const user = await userModel.create({
        username,
            email,
        password:hash

    })
  
    if (user) {
        return  res.status(200).json({
            username: user.username,
            id: user._id,
            email: user.email,
            token: generatToken(user._id)
        })
    } else {
        res.status(400).json({error:"user not found..."})
    }

})

const authUser = asynHandler(async (req, res) => {
    const { email, password } = req.body;
    console.log(email)
    if (!email || !password) {
        return res.json({ error: "please add all the fields" })
    }
    const user = await userModel.findOne({ email: email });
    if (!user) {
        return res.status(404).json({ error: "user not found whith this email"});
    }

    const match =await bcrypt.compare(password, user.password);
    if (email && match) {
      return  res.json({
            _id:user.id,
            username: user.username,
            email: user.email,
            token: generatToken(user.id),
        })
    }
    else {
        res.status(401).json("password or email Wrong...")
    }

    

})

const allusers = asynHandler(async (req, res) => {
    const loggedInUserId = req.user.id;

    const keyword = req.query.search ? {
        $and: [
            {
                $or: [
                    { username: { $regex: `^${req.query.search}`, $options: 'i' } },
                    { email: { $regex: `^${req.query.search}`, $options: 'i' } }
                ]
            },
            { _id: { $ne: loggedInUserId } }
        ]
    } : {};

    try {
        const users = await userModel.find(keyword);
        if (users && users.length > 0) {
            res.json(users);
        } else {
            return res.status(401).json({ error: "No users found" });
        }
    } catch (error) {
        res.status(500).json({ error: "No user FOund" });
    }
});





module.exports = { registerUser, authUser, allusers }

