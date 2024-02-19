const Project = require("./../models/Project");

exports.getProject = (req, res) => {
  return res.status(200).render("Project/AddProject.ejs");
};
