const router = require("express").Router();
const ProjectController = require("./../controllers/ProjectController");

router.get("/",ProjectController.getProject);
module.exports = router;
