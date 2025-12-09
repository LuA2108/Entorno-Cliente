//Mensaje que se imprime cada 5seg
let recordatorio = "Recordatorio: han pasado 5 segundos";

//
let t1 = new Date();
console.log(t1.getHours() + ":" + t1.getMinutes() + ":" + t1.getSeconds());
identificador = window.setInterval(() => {
    let t2 = new Date();
    console.log(t2.getHours() + ":" + t2.getMinutes() + ":" + t2.getSeconds());

    console.log(recordatorio);
    
    if (!confirm("¿Desea continuar con el recordatorio?")) {
        clearInterval(identificador)
        console.log("Recordatorio finalizado");
    }
}, 5000); //Intervalo en milisegundos | 5*1000 = 5seg


