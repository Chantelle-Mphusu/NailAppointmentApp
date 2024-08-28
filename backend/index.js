const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const cors = require("cors");
const app = express();
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
    origin: ["Access-Control-Allow-Origin","http://localhost:3000"],
    methods: ["Access-Control-Allow-Methods","GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.use(bodyParser.json());


app.use(cookieParser());

app.use(express.json());


 

 app.use("/", Route);



