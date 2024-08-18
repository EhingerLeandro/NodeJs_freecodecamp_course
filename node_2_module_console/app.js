console.log("Hola mundo");

console.warn("Va ocurrir un error...");

console.error("Ocurrió un error!");

// This generates a more detailed error message.
console.error(new Error("¡Otro error ha ocurrido!"));

//It gives a lot of information about the process that is being executed.
// console.log(process);

//The next one describes the execution enviroment; this 
//shows a shorter and more concise version.
console.log(process.env);

console.log("-----------------****-------------------")

//This "process.argv" shows an array which is related to 
//the way that is used when "app.js" is started with nodejs.
console.log(process.argv);
console.log(process.argv[1]);

//In the next line "process.memoryUsage() shows how much memory is applied" 
console.log(process.memoryUsage());