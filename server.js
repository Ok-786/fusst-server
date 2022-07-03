const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const company = require("./routes/user");

//enviorment variables in .env file
require("dotenv").config();

//create express server
const app = express();
const port = process.env.PORT || 7000;

//middleware allow us to parse json
app.use(cors());
app.use(express.json());

console.log('hello')

const uri = process.env.ATLAS_URI
  ? process.env.ATLAS_URI
  : "mongodb+srv://osama:p4dFB4OCV3hbxHKs@cluster0.txsjl.mongodb.net/fusst?authSource=admin&replicaSet=atlas-vbzzgl-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// const connection = mongoose.connection;
// connection.once("open", () => {
//   console.log("MongoDb database connection established succesfully");
// });

app.use("/api/", company);


// heruku deployment
if (process.env.NODE_ENV = "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(dirname, 'client', 'build', 'index.html'));
  })
}

//start listening on a certain port
app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
