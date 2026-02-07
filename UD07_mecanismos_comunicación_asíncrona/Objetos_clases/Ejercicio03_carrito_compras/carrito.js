import Producto from './producto.js';

// Clase que representa un carrito de compras
export default class Carrito  {
    #impuesto = 0.10; // Porcentaje de impuesto

    // MEtodo que crea una lista de productos por defecto
    constructor() {
        this.productos = [];
    }

    // Agrega un producto a la lista
    agregarProductos(producto) {
        this.productos.push(producto);
    }

    // Actializa la cantidad de productos segun el ID
    actualizarCantidadProductos(id, cantidad) {
        if(cantidad < 0 || !Number.isFinite(cantidad)) { throw new Error("Cantidad inválida");}
        let encontrado = false;

        this.productos.forEach(p => {
            if(p.getId() === id) {
                p.setCantidad(cantidad);
                encontrado = true;
            }
        });

        if(!encontrado) throw new Error(`Producto con ID ${id} no encontrado.`);
    }

    // Elimina un producto segun el ID
    eliminarProducto(id) {
        let indice = -1;

        this.productos.forEach((p, i) => {
            if(p.getId() === id) {
                indice = i;
            }
        });

        if(indice != -1) this.productos.splice(indice, 1)
    }

    // Calcula el impuesto del producto que solo tiene impuesto
    calcularImpuestoTotal() {
        let impuestoTotal = 0;
        
        this.productos.forEach(p => {
            if(p.getTieneImpuesto()) {
            impuestoTotal += p.getPrecio() * p.getCantidad() *this.#impuesto;
            }
        });
        return impuestoTotal;
    }

    // Calcula el total incluyendo impuestos
    calcularTotal() {
        let total = 0;

        this.productos.forEach(p => {
            total +=  p.getPrecio() * p.getCantidad();
        });

        return total + this.calcularImpuestoTotal();
    }  

    // Obtiene la cantidad total de productos
    obtenerCantidadTotal() {
        let total = 0;

        this.productos.forEach(p => {
            total += p.getCantidad();
        });

        return total;
    }

    // Imprime un string con los datos del producto, tipo factura
    toString() {
        let texto = "=== Carrito ===\n";
        let subtotal = 0;

        this.productos.forEach(p => {
            texto += `${p.getNombre()}\t${p.getPrecio()}/u\t${p.getCantidad()}\n`
            subtotal += p.getPrecio() * p.getCantidad();
        });

        texto += `Subtotal productos: ${subtotal}€\n`;
        texto += `Subtotal impuestos: ${this.calcularImpuestoTotal()}€\n`;
        texto += `Total: ${this.calcularTotal()}€\n`;

        return texto;
    }
}