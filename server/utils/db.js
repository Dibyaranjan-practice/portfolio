const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => console.log("mongo connected"))
  .catch((err) => console.log("mongo connection failed", err));
