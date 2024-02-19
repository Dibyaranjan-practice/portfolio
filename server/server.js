const express = require("express");
require("dotenv").config();
require("ejs");
require("./utils/db");

const projectRoutes = require("./routes/ProjectRoutes");

const app = express();
app.set("view engiene", "ejs");
app.use("/project", projectRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log("server running on 5000"));
