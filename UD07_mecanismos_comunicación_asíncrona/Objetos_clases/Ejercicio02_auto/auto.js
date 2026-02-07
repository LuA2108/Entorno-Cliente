class Auto {
    #velocidad = 0
    #encendido = false

    // Constructor inicial
    constructor(marca, modelo, patente) {
        this.marca = marca      // string
        this.modelo = Number(modelo) // numero
        this.patente = patente  // string
    }

    getVelocidad(){
        return this.#velocidad;
    }

    arrancar() {
        this.#encendido = true;
    }

    apagar() {
        if(this.#velocidad === 0) {this.#encendido = false;}
    }

    acelerar() {
        if(this.#encendido) {this.#velocidad += 10;}
    }

    desacelerar() {
        if(this.#encendido && this.#velocidad > 0) {this.#velocidad -= 10;}
    }

    toString() {
        return `${this.marca} ${this.modelo}, patente ${this.patente}`;
    }
}

// Ejemplo de uso:
const miAuto = new Auto('Toyota', 2021, 'ABC123');
console.log(miAuto.toString()); // Toyota 2021, patente ABC123
miAuto.arrancar();
miAuto.acelerar();
console.log("Velocidad inicial: ",miAuto.getVelocidad()); // 10
miAuto.desacelerar();
console.log("Velocidad final: ",miAuto.getVelocidad()); // 0
miAuto.apagar();