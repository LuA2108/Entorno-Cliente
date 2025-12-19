// 1. Crear el nuevo elemento <li>
let newUser = document.createElement("li");

// 2. Asignarle una clase
newUser.className = "user";

// 3. Asignarle contenido
newUser.textContent = "Nicole";

// 4. Obtener la seccion de usuarios
let sectionUsers = document.getElementById("usuarios");

// 5. Obtener la lista que esta en la pos 1
let listUsers = sectionUsers.children[1];

// 6. Con la funcion agregarlo al inicio el nuevo elemento en la lista
listUsers.prepend(newUser);

