const express = require("express");
const {infoCursos} = require("../cursos");
const {programacion} = require("../cursos").infoCursos;

const routerProgram = express.Router();

/*Para usar req.body primero se debe activar el -Middleware- que 
se ha escrito después de este comentario, se ejecuta despues de 
recibir una solicitud y antes de enviar una respuesta*/
routerProgram.use(express.json())
 
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
        /*Se usa código 204 porque cuando no se encuentran elementos ese es el código
        por su parte 404 se refiere a una situación donde la url no existe.*/
        return res.status(204).send(`No se encontró nada en el lenguaje ${lenguaje}`)
    }
    /*En esta parte de req.query.ordenar se permite ordenar los valores que 
    hay en la propiedad vistas*/
    if(req.query.ordenar === "vistas"){
        return res.send(JSON.stringify(resultados.sort((a, b)=>{
            return b.vistas -a.vistas;
        })))
    }
    res.send(JSON.stringify(resultados));
})
 
routerProgram.post("/", (req, res)=>{
    let cursoNuevo = req.body;
    programacion.push(cursoNuevo);
    res.send(JSON.stringify(programacion));
})

routerProgram.put("/:id", (req, res)=>{
    let cursoActualizado =  req.body;
    let id = req.params.id;
    let indice = programacion.findIndex(curso=>curso.id == id);
    if(indice >= 0){
        programacion[indice]= cursoActualizado;
    }else{
        res.status(404);
    }
    res.send(JSON.stringify(programacion))
})

routerProgram.patch("/:id", (req, res)=>{
    const infoActualizada = req.body;
    const id = req.params.id;
    const indice = programacion.findIndex(curso=> curso.id === parseInt(id));
    if(indice >= 0){
        //esto no es una copia sino una referencia al mismo objeto original.
        const cursoAModificar = programacion[indice];
        Object.assign(cursoAModificar, infoActualizada);
    }
    res.json(programacion); 
})

routerProgram.delete("/:id", (req, res)=>{
    const id = req.params.id;
    const indice = programacion.findIndex(curso=> curso.id == id);
    if(indice >= 0){
        programacion.splice(indice, 1);
    }  
    res.json(programacion);
})

module.exports = routerProgram;