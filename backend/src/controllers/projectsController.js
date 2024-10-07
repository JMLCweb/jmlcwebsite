const projectsDB = require("../db/projectsDB");
const { ObjectId } = require("mongodb");

const getProjects = async (req, res) => {
  try {
    const projects = await projectsDB.getAllProjects();
    res.status(200).json({
      status: "OK",
      data: projects,
    });
  } catch (error) {
    console.error("Error in getProjects:", error);
    res.status(500).json({
      status: "error",
      message: "Error getting projects",
    });
  }
};

module.exports = {
  getProjects,
};
