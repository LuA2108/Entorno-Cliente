// 1. Se obtiene todos los botones: botonBub, botonCapt y botonStop
const botonBub = document.getElementById("botBub");
const botonCapt = document.getElementById("botCapt");
const botonStop = document.getElementById("botStop");

// 2. Se obtiene el contenedor, el elemento titulo y el parrafo
const contenedor = document.getElementById("myDiv");
let tituloElement = contenedor.querySelector("h2");
let myP = document.getElementById("myP");

    // 3. Listeners del div y del parrafo
    contenedor.addEventListener("click", listenerDiv);
    myP.addEventListener("click", listenerP);

    // 4. Boton Bubbling
    botonBub.addEventListener("click", () => {
        // 4.1 - Se cambia el texto del elemento titulo y myP
        titulo(tituloElement, "BUBBLING");
        titulo(myP, "Event bubbling");

        // 4.2 - Se activa el evento en el Div y P, al hacer click con la funcion listener
        // la funcion imprime un alert
        contenedor.addEventListener("click", listenerDiv);
        myP.addEventListener("click", listenerP);
    });

    // 6. Boton Capturing
    botonCapt.addEventListener("click", () => {
        // 6.1 - Se cambia el texto del elemento titulo y myP
        titulo(tituloElement, "CAPTURING");
        titulo(myP, "Event capturing");

        // 6.2 - Se activa el evento en el Div y P, llamando a la funcion
        contenedor.addEventListener("click", listenerDiv, true);
        myP.addEventListener("click", listenerP, true);
    });

    // 7. Boton Stop - Se debe usar despues del uso de bubbling o capturing, 
    // porque sino, los eventos se acumulan y ejecutan varias veces
    botonStop.addEventListener("click", () => {
        // 7.1 - Se cambia el texto del elemento titulo y myP
        titulo(tituloElement, "EVENTO CLIC DESACTIVADO");
        titulo(myP, "Click me!");

        // 7.2 - Se deben eliminar los listener para bubbling y capturing
        // Sino, seguiria activo el otro
        contenedor.removeEventListener("click", listenerDiv, true); //capturing
        contenedor.removeEventListener("click", listenerDiv, false); //bubbling

        // 7.3 - Eliminar listener de myP 
        myP.removeEventListener("click", listenerP, true); //capturing
        myP.removeEventListener("click", listenerP, false); //bubbling
    });

// FUNCIONES ---------------------------------------

/**
 * Imprime un mensaje de alerta del elemento <div>
 */
function listenerDiv() {
    alert("Has hecho click en el naranja");
}

/**
 * Imprime un mensaje de alerta del elemento <p>
 */
function listenerP() {
    alert("Has hecho click en el blanco");
}

/**
 * Cambia el texto de un elemento HTML.
 * @param {HTMLElement} elemento Elemento al que se le asigna el texxto 
 * @param {string} texto Texto que se mostrara
 */
function titulo(elemento, texto) {
    elemento.textContent = texto;
}

