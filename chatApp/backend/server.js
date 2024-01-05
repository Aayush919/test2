
const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
require("./models/dbconnet")
const userRoute = require("./routes/userRoute");
const chatRoute = require("./routes/chatRoute");
const cors = require('cors');





app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
var a = "aayush malviya"

app.use("/user", userRoute);
app.use("/api/chat", chatRoute);







app.get("/", (req,res,next) => {
    res.json( "server succefully run bro " )
})











app.use((req, res, next) => {
    res.status(404).json({ message: "Page Not Found" });
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        success: false,
        error: {
            message: err.message || "Internal Server Error",
        },
    });
});


const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log("server stated on port no 3000")
})



//tommowr react
//all the http request https
//avoid cors error with proxy
//npm-create-react 
//aap.use route 
//nav react-router-dom in react

