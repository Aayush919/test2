const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    pic: {
        type: String,
        default:"https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1703135554~exp=1703136154~hmac=af028165ec266f1dde6102747d76721d49e87fec5f38b85f30d0f6a06c3a21df"
    }

},
    { timestamps: true })
    
    
const User = mongoose.model("User", userSchema);

module.exports = User;