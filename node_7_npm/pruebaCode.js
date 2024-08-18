//Si se corre desde node se convierte directamente en un objeto.
const pruebaJson = require("./prueba.json");

console.log(pruebaJson);
console.log(typeof pruebaJson);
console.log("--------***---------")


let info = {
	title:"information",
	version:1.0,
	available:true
}

let infoJSON = JSON.stringify(info);
console.log(infoJSON);
console.log(typeof infoJSON);