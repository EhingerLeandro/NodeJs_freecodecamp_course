const express = require("express");
const app = express();
const {infoCursos} = require("./cursos.js");

/*-----------Routing----------*/ 

app.get("/", (req, res)=>{ 
    res.send("El primer servidor express, del curso de freecodecamp!")
});

app.get("/api/cursos", (req, res)=>{
    res.send(JSON.stringify(infoCursos));
});

/*---------Programacion-routing---------*/

app.get("/api/cursos/programacion", (req, res)=>{
    res.send(JSON.stringify(infoCursos.programacion))
});
//En la siguiente línea se usa parametroS, que son parte de la URL
app.get("/api/cursos/programacion/:lenguaje", (req, res)=>{
    const lenguaje = req.params.lenguaje;
    const resultados = infoCursos.programacion.filter(itemCurso =>{
        return itemCurso.lenguaje === lenguaje;
    });
    if(resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
    }
    res.send(JSON.stringify(resultados));
});

/*---------Matematicas-routing---------*/

app.get("/api/cursos/matematicas", (req, res)=>{
    res.send(JSON.stringify(infoCursos.matematicas ));
});

app.get("/api/cursos/matematicas/:tema", (req, res)=>{
    const tema = req.params.tema;
    const resultados = infoCursos.matematicas.filter(itemTema =>{
        return itemTema.tema === tema;
    })
    if(resultados.length ===0 ){
        return res.status(404).send(`No se encontró el tema sobre ${tema}`);
    }
    res.send(JSON.stringify(resultados));
})


app.get("/api/cursos/programacion/:lenguaje/:nivel", (req, res)=>{
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;
    const resultados = infoCursos.programacion.filter(curso=>{
        return curso.lenguaje === lenguaje && curso.nivel === nivel;
    });

    if(resultados.length ===0){
        return res.status(404).send(`No se encontraron resultados!`);
    }
    res.send(JSON.stringify(resultados));
})

/*El process.env.PORT reconoce el puerto que facilita la 
infraestructura que está siendo usada por node y express*/
const PUERTO = process.env.PORT || 3003;

app.listen(PUERTO, ()=>{
    console.log(`El servidor está escuchando en el puerto ${PUERTO}...`)
});