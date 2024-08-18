function saludo (name){
	return "Hola "+ name + ", espero que estes bien.";
}

function saludoMundo (){
	return "Hola mundo como vamos?";
}

function onlyThisFunction (){
	return "Exportando solo esta función.";
}

//La siguiente es la primera formar de exportar un módulo
/* module.exports.saludo = saludo;
module.exports.saludoMundo = saludoMundo; */

//Otra manera de exportar un modulo puede ser la siguiente:
module.exports = {
	saludo: saludo,
	saludoMundo: saludoMundo,
	onlyThisFunction: onlyThisFunction
}


