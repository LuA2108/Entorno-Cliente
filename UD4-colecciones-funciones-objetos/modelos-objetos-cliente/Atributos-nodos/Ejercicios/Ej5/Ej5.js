// 1. Obtener la seccion de productos
let sectionProducts = document.getElementById("productos");

// 2. Se crea el nuevo elemento que contendra los datos del nuevo producto
let nuevoProducto = document.createElement("div");
nuevoProducto.classList.add("producto");

// 5. Obtener el ultimo elemento (Solo funciona ya que los productos son los ultimos)
let ultElem = sectionProducts.lastElementChild;
let ultId = parseInt(ultElem.dataset.id);
nuevoProducto.dataset.id = (ultId+1);

// 3. Crear el titulo del producto y su clase
let nombre = document.createElement("h3");
nombre.textContent = "Pantalla";

// 3. Crear el precio del producto y su clase
let precio = document.createElement("p");
precio.classList.add("precio");
precio.textContent = "99.99";

// 4. Añadir el nombre y precio del producto en su contenedor.
nuevoProducto.appendChild(nombre);
nuevoProducto.appendChild(precio);

// 5. Se agrega el nuevo producto a la seccion productos
sectionProducts.appendChild(nuevoProducto);
