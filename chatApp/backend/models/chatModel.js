const mongoose = require("mongoose");

const chatModel=mongoose.Schema({
    chatName: {
        type: String,
        trim: true
    },
    isGroupChat: {
        type: Boolean,
        default: false
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }]
    , latestMessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message"
    }
    ,
    groupAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},
    {
        timestamps: true,
    }

);


const Chat = mongoose.model("Chat", chatModel);

module.exports = Chat;

//chatName
//gourpChat
//list of users
//messgess or latest messges


//trim
// --remove the leading and trailling spaces from the string before the save into a database
//mongoose.schema.types.objectiD