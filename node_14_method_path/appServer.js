const http = require("http");
const cursos = require("./curso.js");
const { log } = require("console");

//Servidor creado para manejar solicitudes GET, POST, PUT, DELETE
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
    console.log(res.statusCode);
    if( path === "/"){
        res.writeHead(200, {"content-type": "application/json"});
        // res.statusCode = 200; //Este número viene por defecto y no es necesario asignarlo
        console.log("Method GET has been used!");
        //res.end muestra output en la pantalla del navegador
        return res.end("Bienvenidos a mi primer servidor y API creados con Node.js");
    //En el manejo de GET se comparan varianiones de la URL
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

        /*Procesando cuerpo de la solicitud */
        let cuerpo="";
        req.on("data",contenido=>{
           cuerpo += contenido.toString();
        });
        req.on("end",()=>{
            console.log(cuerpo);
            console.log(typeof cuerpo);
            console.log("-------####-------");
            //convertir a un objeto de javascript
            cuerpo = JSON.parse(cuerpo);
            console.log(typeof cuerpo);
            console.log(cuerpo.titulo);
            res.end("El servidor recibión una solicitud POST para /cursos/programacion");   
        })

        // res.statusCode = 200; //Este número viene por defecto y no es necesario asignarlo
        return res.end("El servidor recibio una solicitud POST para /cursos/programacion");
    } 
    res.statusCode = 404;
    return res.end("El curso solicitado no existe!");
}

const PUERTO=3003;
servidor.listen(PUERTO, ()=>{
    console.log("El servidor esta escuchando... en el puerto: "+PUERTO);
})