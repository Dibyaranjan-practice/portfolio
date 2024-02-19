const mongoose = require("mongoose");

const Project = mongoose.Schema({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const ProjectModel = new mongoose.model("Project", Project);

module.exports = ProjectModel;
