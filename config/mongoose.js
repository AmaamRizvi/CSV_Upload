const mongoose = require("mongoose");
// DycNZg9ED3sECkxf
mongoose.connect(
  "mongodb+srv://amaamrizvi6557:DycNZg9ED3sECkxf@cluster0.pxtxhrz.mongodb.net/"
);

const db = mongoose.connection;

db.once("open", function () {
  console.log("database connected to the server successfully!");
});

module.exports = db;
