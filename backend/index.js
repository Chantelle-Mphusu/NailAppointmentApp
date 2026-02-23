const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const cors = require("cors");
const app = express();
const path = require('path');
require("dotenv").config();
const cookieParser = require("cookie-parser");
const Route = require("./Routes/Routes");
const { MONGO_URL, PORT } = process.env;

 
mongoose
  .connect(MONGO_URL)
  .then(() => console.log("MongoDB is connected successfully"))
  .catch((err) => console.error(err));




app.use(
  cors({
    origin: ["http://localhost:3000","https://nail-app1.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);



app.use(bodyParser.json());


app.use(cookieParser());

app.use(express.json());


// Serve static files from the React frontend
//app.use(express.static(path.join(__dirname, "../frontend/build"))); 

//app.get("*", (req, res) => {
 // res.sendFile(path.join(__dirname, "../frontend/build", "index.html")); 
//});

 app.use("/", Route);

 app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});


