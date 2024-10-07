const router = require("express").Router();
const projectsController = require("../controllers/projectsController");

router.get("/", projectsController.getProjects);

module.exports = router;
