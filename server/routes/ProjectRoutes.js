const router = require("express").Router();
const ProjectController = require("./../controllers/ProjectController");

router.get("/", ProjectController.getAllProject);
router.get("/add", ProjectController.getAddProject);
router.post("/add", ProjectController.postAddProject);
module.exports = router;
