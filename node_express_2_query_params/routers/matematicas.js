const express = require("express");
const {infoCursos} = require("../cursos");

const routerMate = express.Router();

/*-------------routing--matemáticas--------------*/
routerMate.get("/", (req, res)=>{
    res.send(JSON.stringify(infoCursos.matematicas));
})

routerMate.get("/:tema", (req, res)=>{
    const tema = req.params.tema;
    const resultado = infoCursos.matematicas.filter( itemTema =>{
        return itemTema.tema === tema;
    })
    if(resultado.length === 0){
       return res.status(404).send(`No se encontró nada con el tema ${tema}.`)
    }
    res.send(JSON.stringify(resultado));
})

module.exports = routerMate;