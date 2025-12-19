// 1. Obtenemos todos los elementos con clase "productos"
let producto = document.querySelectorAll(".producto");

// 2. Se crea el elemento <ul> para la lista de productos
let lista = document.createElement("ul");

// 3.  Se recorre todos los elementos de clase producto
for (let i = 0; i < producto.length; i++) {
    
    // 4. Se obtiene el primer h3 - que es el titulo de cada producto
    let nombreProducto = producto[i].querySelector("h3").textContent;

    // 5. Se crea el elemento li 
    let li = document.createElement("li");

    // 6. Se le asigna un nombre de producto
    li.textContent = nombreProducto;

    // 7. Se le agrega a la lista el nuevo elemento <li> con su valor
    lista.appendChild(li);
}
// 8. Se obtiene el elemento boddy y se le agrega la lista como primer elemento
document.body.prepend(lista);