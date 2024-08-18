saludar = require("./saludos.js");

const {onlyThisFunction} = require("./saludos.js");

console.log(saludar.saludo("Amigo"));

console.log(saludar.saludoMundo());

console.log(onlyThisFunction());