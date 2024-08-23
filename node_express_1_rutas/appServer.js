const express = require("express");
const app = express();
const {infoCursos} = require("./cursos.js");

app.get("/", (req, res)=>{ 
    res.send("El primer servidor express, del curso de freecodecamp!")

})

const PUERTO = process.env.PORT || 3003;

app.listen(PUERTO, ()=>{
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`)
});