const asyncHandler = require("express-async-handler");
const chatModel = require("../models/chatModel");
const userModel = require("../models/userModel");
const { json } = require("body-parser");

//@description     Create or fetch One to One Chat
//@route           POST /api/chat/
//@access          Protected

const accessChat = asyncHandler(async (req, res) => {
    const { userId } = req.body;

    if (!userId) {
        console.log("user not have perametter userID...")
        return res.sendStatus(400);
    }

    var isChat = await chatModel.find({
        isGroupChat: false,
        $and: [{ users: { $elemMatch: { $eq: req.user._id } } }, { users: { $elemMatch: { $eq: req.user._id } } }]
    })
        .populate('users', '-password')
        .populate('latestMessage')

    isChat = await userModel.populate(isChat, {
        path: 'latestMessage.sender',
        select: 'pic name email'
    })

    if (isChat.length > 0) {
        res.send(isChat[0]);
        return;
    } else {
        var chatData = {
            chatName: "sender",
            isGroupChat: false,
            users: [req.user._id, userId],
        }
    }

    try {
        var createChat = await chatModel.createC(chatData);
        var Fullchat = await chatModel.findOne({ id: createChat.id })
            .populate('users', -'password')
        res.status(200).json(Fullchat);
        return;

    } catch (error) {
        res.status(400);
        throw new Error(error.message);
    }


})


//@description     fetch all the chats to log in user
//@route           get /api/chat/fetchChats
//@access          Protected
const fetchChats = asyncHandler(async (req, res, next) => {
    try {
        let chats = await chatModel.find({ users: { $elemMatch: { $eq: req.user._id } } })
            .populate('users', '-password')
            .populate('groupAdmin', '-password')
            .populate('latestMessage')
            .sort({ updatedAt: -1 })

        chats = await userModel.populate(chats, {
            path: "latestMessage.sender",
            select: "name pic email",
        });
        res.status(200).json(chats);
    }
    catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
})


//@description      for creating group
//@route           get /api/chat/createGroup
//@access          Protected

const createGroup = asyncHandler(async (req, res, next) => {

    console.log("hui")

    if (!req.body.users || !req.body.name) {
        return res.status(400).send({ message: "Please Fill all the feilds" });
    }



    var users = JSON.parse(req.body.users);
    if (users.length < 2) {
        return res.status(400).send("ore than 2 users are required to form a group chat")
    }
    users.push(req.user) //use may be id in the future
    try {

        const groupChat = await chatModel.create({
            isGroupChat: true,
            groupAdmin: req.user,
            users: users,
            chatName: req.body.name
        })

        const FullChat = await chatModel.findOne({ _id: groupChat.id })
            .populate('users', '-password')
            .populate('groupAdmin', '-password')
            .populate('latestMessage')
        res.status(200).json(FullChat);

    }
    catch (error) {
        res.status(400)
        throw new Error(error.message)
    }
})

//@description     rename group or update group name
//@route           get /api/chat/rename
//@access          Protected

const rename = asyncHandler(async (req, res) => {
    try {
        const { chatName, chatId } = req.body;
        const chat = await chatModel.findByIdAndUpdate(chatId, {
            chatName: chatName
        }, {
            new: true
        })
            .populate("users", '-password')
            .populate("groupAdmin", '-password')
            .populate('latestMessage')

        if (!chat) {
            res.status(404);
            throw new Error("Chat Not Found");
        } else {
            res.status(200).json(chat);
        }
    }
    catch (error) {
        res.status(404);
        throw new Error("Chat Not Found");
    }
})


//@description     addTogroup new user
//@route           get /api/chat/addToGroup
//@access          Protected

const addTogroup = asyncHandler(async (req, res) => {
    try {
        const { userId, chatId } = req.body;

        // check if the requester is admin

        const added = await chatModel.findByIdAndUpdate(chatId, {
            $push: { users: userId }
        },
            {
                new: true
            })
            .populate("users", '-password')
            .populate("groupAdmin", "-password")
            .populate("latestMessage")

        if (!added) {
           return res.status(404);
            throw new Error("Chat Not Found");
        } else {
             return res.json(added);
        }
    }
    catch (error) {
        res.status(401)
        throw new Error("Chat Not Found");

    }
})

const remove = asyncHandler(async (req, res) => {
    try {
        
        const { userId, chatId } = req.body;

        
        
        
     
        const remove = await chatModel.findByIdAndUpdate(chatId, {
            $pull:{ users: userId }
        },{
                new: true
        })
            .populate("users", "-password")
            .populate("groupAdmin", "-password")
            .populate("latestMessage")
      

        if (!remove) {
            return res.status(404);
            throw new Error("Chat Not Found");
        } else {
           return  res.json(remove);
        }
    }
    catch (error) {
        res.status(401)
        throw new Error("Chat Not Found");

    }
})


module.exports = { accessChat, fetchChats, createGroup, rename, addTogroup, remove }

