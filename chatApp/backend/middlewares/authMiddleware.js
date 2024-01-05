const jwt = require('jsonwebtoken');
const userModel = require("../models/userModel.js");
const asyncHandler = require("express-async-handler");
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

const protect = asyncHandler(async (req, res, next) => {
    let token;
   
console.log(req.headers)
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];
         
            const decoded = jwt.verify(token, process.env.JWt_Secret);
         

            req.user = await userModel.findById(decoded.id).select("-password");
            next();

        } catch (error) {
            console.log(error);
            res.status(401);
            throw new Error("Not authrized", "token failed")
        }

    }

    if (!token) {
console.log("tu h kyha")
        res.status(401);
        throw new Error("Not authrized", "token failed")
    }

})


module.exports = { protect };