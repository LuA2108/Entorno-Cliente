let link = "www.linkedin.com/in/lucero-cahuana";

//Abrir nueva ventana, segun caracteristicas: anchoXalto
let w = window.open("https://www.linkedin.com/in/lucero-cahuana/", 
                    "Linkedin", 
                    "width=500, height=200");

//Ubicacion de la pagina actual
let urlActual = location.href;
console.log("URL completa: ", urlActual);

//Nombre de la ventana actual
console.log("Nombre ventana: ", window.name);
console.log("Nombre ventana: ", w.name);

//Informacion del navegador
let infoNavegador = "clipboard: " + navigator.clipboard+"\n";
infoNavegador += "cookieEnabled: " + navigator.cookieEnabled+"\n";
infoNavegador += "geolocation: " + navigator.geolocation+"\n";
infoNavegador += "language: " + navigator.language+"\n";
infoNavegador += "userAgent: " + navigator.userAgent;

console.log(infoNavegador);

//Propiedades width-height availWidth-availHeight -> Screen
console.log("Ancho: ",screen.width);
console.log("Alto: ",screen.height);
console.log("Ancho: ",screen.availWidth);
console.log("Alto: ",screen.availHeight);

window.print();