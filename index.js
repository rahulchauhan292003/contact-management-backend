const express = require("express");
const app = express();
const contactRoutes = require("./routes/contactRoutes");
const connectDB = require("./config/db");
const cors = require('cors')

app.use(express.json());
app.use(cors());

app.use("/api/user", contactRoutes);

app.get((req, res) => {
  res.send("hello");
});
connectDB();

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
