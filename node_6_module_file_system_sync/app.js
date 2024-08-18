const fs = require("fs");

const readFile = fs.readFileSync("index.html", "utf-8");
console.log(readFile);

// fs.rename("index.html", "main.html", (err)=>{
// 	if(err){
// 		throw err;}
// 	console.log("cambio a nombre 'main.html' exitoso."); })

// fs.rename("main.html", "index.html", (err)=>{
// 	if(err){
// 		throw err;}
// 	console.log("cambio a nombre 'index.html' exitoso."); })

const addingText = fs.appendFileSync("index.html", "<p>Información adicionada</p>");
console.log(addingText);

const overwrite =fs.writeFileSync("newIndex.html", "Esta es la información sobre-escrita otra vez");
console.log(overwrite);
