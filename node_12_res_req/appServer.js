 const http = require("http");

const server = http.createServer((req, res)=>{
	console.log("--> req es (solicitud)");
	console.log(req.url);
	console.log(req.method);

	console.log("---------####---------");

	console.log("--> res es una respuesta")
	res.setHeader("content-type", "application/json");
	console.log(res.getHeaders());

	console.log(res.statusCode); // cifra 200
	res.statusCode = 404; //Cambiando el status
	console.log(res.statusCode); //statusCode alterado
	//res.end se refleja en la pantalla del navegador
	res.end("Hola mundo");
})

const port = 3003;

server.listen(port, ()=>{
	console.log(`El servidor está escuchando en el puerto ${port}...`);

})