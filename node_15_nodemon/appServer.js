const http = require("http");

const servidor = http.createServer((req, res)=>{
//   const {method} = req;
  res.end("Hola, mundo! FreeCodeCamp is the best!");
});

const PUERTO = 3003;
servidor.listen(PUERTO,()=>{
    console.log("El servidor está escuchando... " + PUERTO)
} );
