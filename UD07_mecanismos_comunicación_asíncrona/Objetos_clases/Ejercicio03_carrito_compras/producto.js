export default class Producto {
    static #id = 0; // contador privado de la clase

    constructor(nombre, precio, cantidad, tieneImpuesto) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.cantidad = Number(cantidad);
        this.tieneImpuesto = tieneImpuesto;
        this.id = this.#generarId();
    }

    #generarId() { //Metdo privado
        Producto.#id += 1; // aumenta contador
        return Producto.#id; // DEvuelve el nuevo ID
    }

    getId() {
        return this.id;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombreNuevo) {
        this.nombre = nombreNuevo;
    }

    getPrecio() {
        return this.precio;
    }

    setPrecio(precioNew) {
        if (this.#numeroValido(precioNew)) this.precio = parseFloat(precioNew);
        else throw new Error("Numero invalido: debe ser positivo")
    }

    getCantidad() {
        return this.cantidad;
    }

    setCantidad(cantidadNueva) {
        if (this.#numeroValido(cantidadNueva)) this.cantidad = Number(cantidadNueva);
        else throw new Error("Numero invalido: debe ser positivo")
    }

    getTieneImpuesto() {
        return this.tieneImpuesto;
    }

    setTieneImpuesto(valor) {
        if (typeof valor === 'boolean') this.tieneImpuesto = valor;
        else throw new Error("Ingrese un valor booleano");
    }

    #numeroValido(num) {
        if (num > 0 && Number.isFinite(num)) return true
        else return false;
    }
}
