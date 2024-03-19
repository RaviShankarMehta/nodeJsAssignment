const routes = require("express").Router();


const { registerPatient } = require("../controllers/registerPatient");
routes.post("/registerPatient",registerPatient)
module.exports = routes