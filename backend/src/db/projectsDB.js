const { ObjectId } = require("mongodb");
const connectToDB = require("./connectDB");

const getAllProjects = async () => {
  const db = await connectToDB();
  const projectsCollection = db.collection("projects");
  return await projectsCollection.find().toArray();
};

module.exports = {
  getAllProjects,
};
