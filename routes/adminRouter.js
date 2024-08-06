var routes = require("express").Router();
const {
  createAdmin,
  getAdmin,
  deleteAdmin,
} = require("../controllers/adminController");
const { createAdminSchema } = require("../validations/adminValidation");

routes.get("/getAdmin", getAdmin);
routes.post("/createAdmin", createAdminSchema, createAdmin);
routes.delete("/deleteAdmin", createAdminSchema, deleteAdmin);

module.exports = routes;
