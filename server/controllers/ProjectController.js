const Project = require("./../models/Project");

exports.getAddProject = (req, res) => {
  return res.status(200).render("Project/AddProject.ejs");
};

exports.getAllProject = async (req, res) => {
  const allProjects = await Project.find();
  return res.status(200).json(allProjects);
};
exports.postAddProject = async (req, res) => {
  await Project.create({ ...req.body });
  return res.status(200).render("Project/AddProject.ejs");
};
