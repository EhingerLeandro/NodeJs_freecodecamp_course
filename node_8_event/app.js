
const EventEmitter = require("events");
console.log(EventEmitter);

console.log("--------***---------");

const emisorProductos = new EventEmitter;
emisorProductos.on( "compra", (total, numProductos)=>{
	console.log(`Se realizó una compra por $${total}`);
	console.log(`Se adquirieron ${numProductos} productos.`)
})
emisorProductos.emit("compra", 800, 16);