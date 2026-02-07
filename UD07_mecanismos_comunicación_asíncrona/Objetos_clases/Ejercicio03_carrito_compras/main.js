import Producto from "./producto.js";
import Carrito from "./carrito.js";


// Ejemplo de uso:
const producto1 = new Producto('Manzana', 1.5, 10, true);
const producto2 = new Producto('Pan', 2, 5, false);

const carrito = new Carrito();

carrito.agregarProductos(producto1);
carrito.agregarProductos(producto2);
console.log(carrito.toString());
console.log('Total con impuestos:', carrito.calcularTotal());
console.log('Total impuestos:', carrito.calcularImpuestoTotal());
console.log('Cantidad total de ítems:', carrito.obtenerCantidadTotal()+ "\n");

carrito.actualizarCantidadProductos(producto1.getId(), 20);
console.log(carrito.toString());


carrito.eliminarProducto(producto2.getId());
console.log(carrito.toString());