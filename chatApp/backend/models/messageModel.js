const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
    ,content: {
        type: String,
        trim: true,  
        
    }
    ,
 chat: {
     type: mongoose.Schema.Types.ObjectId,
     ref: "Chat"
 }
},
    {
        timestamps: true,
    }

);


const Message = mongoose.model("Message", messageSchema);

module.exports = Message;

//chatName
//gourpChat
//list of users
//messgess or latest messges


//trim
// --remove the leading and trailling spaces from the string before the save into a database
//mongoose.schema.types.objectiD
//all the message where is show 