const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(
      "mongodb+srv://rahulchauhan1420:7w4py3eJEypbMhMj@cluster0.r8d8s.mongodb.net/contacts?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => {
      console.log("mongoDB is connected");
    });
};

module.exports = connectDB
