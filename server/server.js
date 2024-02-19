const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("ejs");
require("./utils/db");

const projectRoutes = require("./routes/ProjectRoutes");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.set("view engiene", "ejs");
app.use("/project", projectRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log("server running on 5000"));
