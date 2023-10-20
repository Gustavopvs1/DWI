const express = require("express")
const controlador = require("../../controllers/alumnos")
const RepositorioAlumnos = require("../../database/RepositorioAlumnos")

const controlador = new Controller(new RepositorioAlumnos())
const router = express.Router()

router.get("/", (req, res) => {
  controlador.obtenerAlumnos().then((alumnos) => res.json(alumnos))
})

router.post("/", (req, res) => {
  controlador.agregarAlumno(req.body.name, req.body.email)
  res.status(200)
  res.json({ message: req.body.name })
})

module.exports = router