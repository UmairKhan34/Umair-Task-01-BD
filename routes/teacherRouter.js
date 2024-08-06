var routes = require("express").Router();
const {
  createTeahcer,
  getTeacher,
  deleteTeacher,
} = require("../controllers/teacherController");
const { createTeacherSchema } = require("../validations/teacherValidation");

routes.get("/getTeacher", getTeacher);
routes.post("/createTeacher", createTeacherSchema, createTeahcer);
routes.delete("/deleteTeacher", createTeacherSchema, deleteTeacher);

module.exports = routes;
