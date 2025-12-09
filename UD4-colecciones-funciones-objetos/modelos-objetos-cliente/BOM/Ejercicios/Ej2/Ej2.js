
console.log("--- Redimension de pantalla ---");
let x = parseInt(prompt("Indique el porcentaje a redimensionar: "));

if (!isNaN(x) && x !== 0) {
    console.log("Porcentaje a aplicar: ", x, "%");

    x = x/100;
    let ancho = window.innerWidth - (x * window.innerWidth);
    let alto = window.innerHeight - (x * window.innerHeight);

    console.log("Ancho nuevo a aplicar: ", ancho);
    console.log("Altura nueva a aplicar: ", alto);

    let w = window.open(
        "index.html", 
        "miVentana", 
        "width:" + ancho + ", height:" + alto
    );

} else if(x === 0) {
    console.log("No valido 0.");
}
else {
    console.log("EL usuario cancelo.");
}







