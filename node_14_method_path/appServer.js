const http = require("http");
const cursos = require("./curso.js");

const servidor = http.createServer((req, res)=>{
    const {method} = req;
    switch(method){
        case "GET":
            return manejarSolicitudGET(req, res);
        case "POST":
            return manejarSolicitudPOST(req, res);
        default :
            res.statusCode=501;
            res.end(`El método usado no puede ser manejado por el servidor: ${method}`);
    }
});

function manejarSolicitudGET(req, res){
    const path = req.url;
    if( path === "/"){
        res.statusCode = 200;//Este número viene por defecto y no es necesario asignarlo.
        console.log("Method GET has been used!");
        return res.end("Bienvenidos a mi primer servidor y API creados con Node.js");
        
    }else if(path==="/cursos"){
        return res.end(JSON.stringify(cursos.infoCursos));
    }else if(path === "/cursos/programacion"){
        return res.end(JSON.stringify(cursos.infoCursos.programacion));
    }
    res.statusCode = 404;
    return res.end("El curso solicitado no existe!");
}


function manejarSolicitudPOST(req, res){
    const path = req.url;
    if(path === "/cursos/programacion"){
        res.statusCode = 200;
        return res.end("El servidor recibio una solicitud POST para /cursos/programacion");
    }
    
}

const PUERTO=3003;
servidor.listen(PUERTO, ()=>{
    console.log("El servidor esta escuchando... en el puerto: "+PUERTO);
})