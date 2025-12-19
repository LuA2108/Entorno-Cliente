// 1. Creacion del contenedor tarjeta y clase "card"
let card = document.createElement("div");
card.classList.add("card");

// 2. Creacion del titulo de la tarjeta con contenido asignado
let titulo = document.createElement("h3");
titulo.textContent = "Listado actualizado";

// 3. Se agrega en el contenedor tarjeta el titulo
card.appendChild(titulo);

// 4. Se obtiene la seccion usuarios
let sectionUsers = document.getElementById("usuarios");

// 5. Obtenemos la lista, que es el primer <ul>
let lista = sectionUsers.querySelector("ul");

// 6. Se mueve la lista al contenedor tarjeta
card.appendChild(lista);

// 7. Se mueve el contenedor tarjeta a la seccion usuarios
sectionUsers.appendChild(card);

