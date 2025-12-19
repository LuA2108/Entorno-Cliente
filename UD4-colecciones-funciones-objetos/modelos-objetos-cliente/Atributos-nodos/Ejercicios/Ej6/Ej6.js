// 1. Obtener la seccion de productos
let sectionProducts = document.getElementById("productos");

// 2. Obtengo todos los elementos "producto"
let productos = document.querySelectorAll(".producto");

// 3. Obtener el primer producto
let firstProduct = productos[0];

// 4. Se clona profundamente el primer producto
let clon = firstProduct.cloneNode(true);

// 5. Se obtiene el primer hijo del clon y se cambia el titulo
clon.firstElementChild.textContent = "Teclado PRO";

// 6. Se cambia el data-id del primer producto
clon.dataset.id = "201";

// 7. Se agrega a seccion de producos el nuevo elemento clon
sectionProducts.appendChild(clon);





