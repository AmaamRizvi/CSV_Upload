// const mongoose = require("mongoose");
// // DycNZg9ED3sECkxf
// mongoose.connect(
//   "mongodb+srv://amaamrizvi6557:DycNZg9ED3sECkxf@cluster0.pxtxhrz.mongodb.net/"
// );

// const db = mongoose.connection;

// db.once("open", function () {
//   console.log("database connected to the server successfully!");
// });

const mongoose = require("mongoose");

const db = mongoose
  .connect(
    "mongodb+srv://amaamrizvi6557:DycNZg9ED3sECkxf@cluster0.pxtxhrz.mongodb.net/"
  )
  .then(() => {
    console.log("database connected to the server successfully!");
  })
  .catch((e) => {
    console.log(e, "not connected");
  });

module.exports = db;
