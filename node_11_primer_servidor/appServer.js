const http = require("http");

const servidor = http.createServer((req, res)=>{
	console.log("Solicitud nueva");
	res.end("Hola mundo");
});

const puerto =3002;

servidor.listen(puerto, ()=>{
	console.log(`El servidor está escuchando en http://localhost:${puerto}...`);
}); 