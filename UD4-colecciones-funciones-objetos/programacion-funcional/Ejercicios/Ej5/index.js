// index.js
import { addItems, clearItems, primerSuspenso, aprobados, notaMedia, cambiaNotas } from './functions.js';

var notas = [];
var entrada;

// Bucle principal
do {

    // Solicita la entrada del usuario
    entrada = prompt("Introduce una nota o varias separadas por coma (Cancelar para terminar):");

    // Si el usuario no cancela ni esta vacio se agrega a notas 
    if (entrada !== null && entrada.trim() !== "") {
        notas = addItems(notas, entrada);
    }

} while (entrada !== null);

let notasLimpias = clearItems(notas);
let suspenso = primerSuspenso(notasLimpias);
let aprob = aprobados(notasLimpias);
let media = notaMedia(notasLimpias);
let notasFinales = cambiaNotas(notasLimpias, 10);

console.log("− Notas introducidas: " + notas.join(", "));
console.log("− Notas válidas: " + notasLimpias.join(", "));
console.log("− El primer suspenso es " + suspenso);
console.log("− Hay " + aprob.length + " aprobados: " + aprob.join(", "));
console.log("− La nota media es " + media);
console.log("− Las notas finales son " + notasFinales.join(", "));