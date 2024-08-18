//Sintaxis con asignación de promesa #1
const promisedOne = new Promise((resolve, reject)=>{
	setTimeout(()=>{
			if(Math.random() >= 0.5){
				resolve("Primera promesa cumplida!");
			}else{
				reject("Primera promesa rechazada!");
			}
	},3000)
})

//Sintaxis con función clásica
function promisedTwo (){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(Math.random()>=0.5){
				resolve("Segunda promesa cumplida!");
			}else{
				reject("Segunda promesa rechazada!")
			}
		}, 2000)
	})
} 


//Sintaxis usando callback respecto a la asignación de promesa #1
const manejoCumplimiento = (valor)=>{
	console.log(valor + " Usando callback");
}
const manejoRechazo = (error) =>{
	console.log(error + " Usando callback");
}
promisedOne.then(manejoCumplimiento, manejoRechazo);


//Sintaxis usando then y catch respecto a la asignación de promesa #1
promisedOne.then((value)=>{
	console.log(value);
}).catch((error)=>{
	console.log(error);
})

//Sintaxis usando then y catch con función clásica
promisedTwo().then((value)=>{
	console.log(value);
}).catch((error)=>{
	console.log(error);
})