const express = require("express");
const {infoCursos} = require("../cursos");

const routerProgram = express.Router();
 
/*-------------routing--programación--------------*/
routerProgram.get("/", (req, res)=>{
    res.send(JSON.stringify(infoCursos.programacion));
})

routerProgram.get("/:lenguaje", (req, res)=>{
    const lenguaje = req.params.lenguaje;
    const resultados = infoCursos.programacion.filter(itemCurso =>{
        return itemCurso.lenguaje === lenguaje;
    })

    if(resultados.length === 0){
        return res.status(404).send(`No se encontró nada en el lenguaje ${lenguaje}`)
    }
    /*En esta parte de req.query.ordenar se permite ordenar los valores que 
    hay en la propiedad vistas*/
    if(req.query.ordenar === "vistas"){
        return res.send(JSON.stringify(resultados.sort((a, b)=>{
            return b.vistas -a.vistas;
        })))
    }else{
        res.send(JSON.stringify(resultados ));
    }
    res.send(JSON.stringify(resultados));
})
 
module.exports = routerProgram;