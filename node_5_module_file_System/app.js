const fs = require("fs");

fs.readFile("index.html", "utf-8", (err, contenido)=>{
	if(err){
		/* Se puede utilizar console.log(err), o throw err, este último entrega 
		un poco más de info, además detiene el programa, mientras que 
		console.log(err), continua con el resto del código.*/ 
		// console.log(err);
		throw err;
	}else{
		console.log(contenido);
	}
	console.log("texto para probar throw err.");
})

// fs.rename("index.html", "main.html", (err)=>{
// 	if(err){
// 		throw err;}
// 	console.log("cambio a nombre 'main.html' exitoso."); })

// fs.rename("main.html", "index.html", (err)=>{
// 	if(err){
// 		throw err;}
// 	console.log("cambio a nombre 'index.html' exitoso."); })

fs.appendFile("index.html", "<p>Información adicionada</p>", (err)=>{
	if(err){
		throw err;
	}
	console.log("Adición al archivo completado.");
})

fs.writeFile("newIndex.html", "Esta es la información sobre-escrita", (err)=>{
	if(err){
		throw err;
	}
	console.log(`Sobre-escritura del archivo 'newIndex.html' completado en 
caso de que ya exista, de lo contrario crea uno nuevo. `);
})


/*Nota: Estos métodos no son ejecutados necesariamente en el mismo orden
que aparecen en el código, para asegurar que se realizan en el su orden
de aparición se debe agregar async, en la carpeta node_6_modules... 
se muestra esto.*/