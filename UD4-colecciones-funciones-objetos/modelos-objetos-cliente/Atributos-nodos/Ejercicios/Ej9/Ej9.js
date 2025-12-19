// 1. Obtenemos todos los elementos con clase "productos"
let producto = document.querySelectorAll(".producto");

// 2. Se obtiene el elemento con id "productos"
let sectionProducts = document.getElementById("productos");

// 3. Inicializacion del precio y producto
let precioCaro = 0;
let productoCaro = null;

// 4. Se recorre los elementos de clase producto
for (let i = 0; i < producto.length ; i++) {
    // 5. Se obtiene de producto el elemento de clase precio
    let elePrecio = producto[i].querySelector(".precio");

    // 6. Se obtiene el valor del elemento precio
    let precio = parseFloat(elePrecio.textContent);

    // 7. Se comprueba si es el mayor, para guardar el elemento producto mas caro y su precio
    if (precio > precioCaro) {
        precioCaro = precio
        productoCaro = producto[i];
    }
}
// 8. Mueve el producto mas caro como el primer elemento de la seccion productos
sectionProducts.prepend(productoCaro);

