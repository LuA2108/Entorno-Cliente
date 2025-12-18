// 1. Crear un nuevo elemento <li>
let nuevoUsuario = document.createElement("li");

// 2. Le asignamos una clase al elemento
nuevoUsuario.className = "user";

// 3. Se le da algun valor
nuevoUsuario.textContent = "Juan";

// 4. Se obtiene el nodo seccion usuarios
let seccionUsuarios = document.getElementById("usuarios");

//5. Obtener la lista - h2:0, ul:1 
let listaUsuarios = seccionUsuarios.children[1];

// 5. Se agrega el nuevo elemento a la lista
listaUsuarios.append(nuevoUsuario);