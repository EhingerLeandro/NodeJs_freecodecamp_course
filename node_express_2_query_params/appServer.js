const express = require("express");
const app = express();
const {infoCursos} = require("./cursos.js") 

app.get("/", (req, res)=>{
    res.send("Bienvenidos a esta servidor que implementa query params!")
}) 

app.get("/api/cursos", (req, res)=>{
    res.send(JSON.stringify(infoCursos))
})

/*--------Routers--------*/
//El router es usado para reemplazar las url largas que se repiten varias veces
const routerProgram = require("./routers/programacion.js")
app.use("/api/cursos/programacion", routerProgram);

const routerMate = require("./routers/matematicas.js");
app.use("/api/cursos/matematicas", routerMate);

/*------------------Puerto-------------------*/
const PUERTO = process.env.PORT || 3003;

app.listen(PUERTO, ()=>{
    console.log(`El servidor está escuchando en el puerto ${PUERTO}...`)
})
