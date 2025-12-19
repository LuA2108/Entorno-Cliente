// 1. Obtenemos todos los elementos con clase "productos"
let producto = document.querySelectorAll(".producto");

// 2. Se recorre los elementos de clase producto
for (let i = 0; i < producto.length; i++) {
    
    // 3. Se obtiene el primer elemento coincidente "precio" de cada producto
    let precioElemento = producto[i].querySelector(".precio") ;

    // 4. Se obtiene el valor de precio parseado a entero y se le suma 5
    let precio = parseFloat(precioElemento.textContent);
    precio += 5;

    // 5. Se reemplaza por el nuevo valor
    precioElemento.textContent = precio.toFixed(2);
    
    // 6. Si el precio es mayor a 30 se le agrega la clase caro
    if(precio > 30) 
        precioElemento.classList.add("caro");
}

