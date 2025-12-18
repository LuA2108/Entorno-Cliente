// 1. Obtener la seccion de usuarios
let sectionUsers = document.getElementById("usuarios");

// 2. Obtener la lista de usuarios, padre del usuario activo
let listUsers = sectionUsers.children[1];

// 3. Recorre los elementos hijos de <ul> -> <li>
for (let i = 0; i < listUsers.children.length ; i++) {
    // 4. Se obtiene cada item de usuarios
    let li = listUsers.children[i]

    // 5. Se agrega la clase verificado con classList
    li.classList.add("verificado")
}

