const pizzaRatioExito = () => Math.random() > 0.6;

//Sintaxis función flecha es diferente a la asignación, no tiene return porque se hace en la línea inicial
const pizzaPedido = ()=> new Promise((resolve, reject)=>{
	setTimeout(() =>{
		if(pizzaRatioExito()){
			resolve("Pizza entregada con éxito!");
		}else{
			reject("Ha fallado la entrega de la pizza!");
		}
	}, 2500)
})

//Sintaxis usando then y null, respecto a la función flecha
pizzaPedido()
	.then((value)=>console.log(value))
	.then(null, (error)=>console.log(error));
