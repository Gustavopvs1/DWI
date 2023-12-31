const express = require("express")
const path = require('path')
var bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'./views'))

const alumnos = require('./rutas/api/alumnos');
const alumno = require('./rutas/alumno');

app.use('./api/alumno', alumnos)
app.use('/alumnos', alumno)
app.get('/', (req,res) =>{
    res.render('index.js')
})

app.listen(3000,()=> {
    console.log("Servicio inició correctamente")
}
)