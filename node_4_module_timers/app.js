function aprendiendo (tema){
	console.log(`Estoy aprendiendo ${tema}`);
}
/*para usar una función declarada previamente se puede
manejar dos sintaxis*/
setTimeout(()=>aprendiendo("javascript"), 2000);
setTimeout(aprendiendo, 1000, "node");



function probando(){
	console.log("Probando setImmediate con esta función");
}
console.log("antes de setImmediate");
//setImmediate se activa una vez todo el código síncrono se ha ejecutado
//this method is deprecated in some browsers but it works with in node.js
setImmediate(probando);
console.log("después de setImmediate");


let value=0;
function suma(a, b){
	let sum=a+b;
	value +=1;
	console.log(sum +value);
}
setInterval(suma, 1000, 3, 2 );

