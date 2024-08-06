var routes = require("express").Router();
const {
  createStudent,
  getStudent,
  deleteStudent,
} = require("../controllers/studentController");
const { createStudentSchema } = require("../validations/studentValidation");

routes.get("/getStudent", getStudent);
routes.post("/createStudent", createStudentSchema, createStudent);
routes.delete("/deleteStudent", createStudentSchema, deleteStudent);

module.exports = routes;
