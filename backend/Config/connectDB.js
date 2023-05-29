const mongoose = require("mongoose");

const mongoUrl =
  "mongodb+srv://Elkotel:dreamer@cluster0.s8h135w.mongodb.net/Project?retryWrites=true&w=majority";
const connectDB = () => {
  mongoose.connect(mongoUrl, (err) => {
    err ? console.log(err) : console.log("database is connected");
  });
};

module.exports = connectDB;
