const express = require("express")
const controlador = require("../../controllers/alumnos")
const RepositorioAlumnos = require("../../database/RepositorioAlumnos")

const controlador = new Controller(new RepositorioAlumnos())
const router = express.Router()

router.get("/", (req, res) => {
  controlador.obtenerAlumnos().then((alumnos) => {
    res.render('./alumnos/Lista.ejs',{
        pageName : "Alumnos",
        alumnos :alumnos
    })
  })
})

router.get('/Registro', async (req,res) => {
    res.render('./alumnos/Formulario.ejs',{pageName : "Alumnos"})
})

router.post("/", (req, res) => {
  controlador.agregarAlumno(req.body.name, req.body.email)
  res.status(200)
  res.json({ message: req.body.name })
})

module.exports = router