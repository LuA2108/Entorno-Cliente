let url = "https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3B5s9Dqc5uRDygUyuys8S%2FLQ%3D%3D";
const win = window.open(url, "linkedin", 
            "width=500, height=200, top=100, left=200");

console.log("---- Datos Generales----");
console.log(win.location.href);
console.log(win.name);

console.log("---- Datos Navegador----");

//Se imprime los datos del screen
console.log("---- Datos del Screen ----")
console.log("Altura web (px): "+ win.screen.availHeight );
console.log("Ancho web (px): "+ win.screen.availWidth);
console.log("Altura completa web: "+ win.screen.height);
console.log("Ancho completa web: "+ win.screen.width);

