const mongoose = require("mongoose");


//    try with atlas exports.db=async () => {
//         try {
//             await mongoose.connect("mongodb://127.0.0.1:27017/MernChat");
//             console.log("DB Connected");
//         } catch (error) {
//             console.log(error);
//         }
//     }


// module.export = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URI)
//                 console.log("DB Connected");
//     }
    
//     catch (error) {
//                 console.log(error)
//             }
//  }

//db connect problem ok 
//jwt 

mongoose.connect("mongodb://127.0.0.1:27017/MernChatApp").then((e)=>{
    console.log("succfully run db....")

}).catch(() => {
        console.log("db error.....")
    })