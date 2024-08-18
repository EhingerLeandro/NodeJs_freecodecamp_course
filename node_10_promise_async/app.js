
function ordenarProducto (producto){
	return new Promise((resolve, reject)=>{
		console.log("Ordenando producto");
		setTimeout(()=>{
			if(producto === "taza"){
				resolve(`Se ha ordenado el producto "${producto}" exitosamente.`);
			}else{
				reject("Falló la orden del pedido");
			}	
		}, 3000);
	})
}

function procesarPedido (respuesta ){ 
	return new Promise(resolve=>{
		console.log("Procesando pedido...");
		console.log(`La respuesta fue: "${respuesta}"`);
		setTimeout(()=>{
			resolve("Disfruta tu pedido.")
		}, 4000)
	})
}

//Utilizando then & catch
/* 
ordenarProducto("lápiz")
	.then(value=>{
		console.log(value);
		return procesarPedido(value);
	})
	.then(valueProcesado=>{
		console.log(valueProcesado);
	})
	.catch(error=>{
		console.log(error);
	})
*/

//Utilizando async & await
async function consolidaPedido (producto){
	try{
		const respuesta1 = await ordenarProducto(producto);
		console.log(`Respuesta recibida --> ${respuesta1}`);
		const respuesta2 = await procesarPedido(respuesta1);
		console.log(respuesta2);
	}catch(error){
		console.log(error);
	}
}

consolidaPedido("taza");