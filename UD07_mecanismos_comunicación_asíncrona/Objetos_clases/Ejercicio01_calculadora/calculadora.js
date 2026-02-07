class Calculadora {
    #resultado = 0;

    // Metodo publico
    sumar(numero) {
        if (!Number.isFinite(numero)) {
            throw new Error("El caracter pasado no es un numero. ");
        } else {
            this.#resultado += numero;
        }
    }

    // Metodo publico
    restar(numero) {
        if (!Number.isFinite(numero)) {
            throw new Error("El caracter pasado no es un numero. ");
        } else {
            this.#resultado -= numero;
        }
    }

    // Metodo publico
    multiplicar(numero) {
        if (!Number.isFinite(numero)) {
            throw new Error("El caracter pasado no es un numero. ");
        } else {
            this.#resultado *= numero;
        }
    }

    // Metodo publico que divide
    dividir(numero) {
        if (!Number.isFinite(numero)) {
            throw new Error("El caracter pasado no es un numero. ");
        } else {
            if (numero === 0) {
                console.log("No se puede dividir entre cero.")
            } else {
                this.#resultado /= numero
            }
        }
    }

    obtenerResultado() {
        return this.#resultado;
    }

    reiniciar() {
        this.#resultado = 0;
    }
}

// Ejemplo de uso
const calc = new Calculadora();

calc.sumar(10);
calc.restar(5);
calc.multiplicar(3);
calc.dividir(5);
console.log(calc.obtenerResultado())
calc.reiniciar();
console.log(calc.obtenerResultado())
