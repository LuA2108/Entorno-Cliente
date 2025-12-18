// 1. Obtener la seccion de usuarios
let sectionUsers = document.getElementById("usuarios");

// 2. Obtener la lista de usuarios, padre del usuario activo
let listUsers = sectionUsers.children[1];

// 3. Recorre los elementos hijos de <ul> -> lista
// Es mas seguro si se recorre de atras hacia adelante
for (let i = listUsers.children.length -1; i >= 0 ; i--) {
    // 4. Se obtiene cada item de usuarios
    let li = listUsers.children[i]

    // 5. Se comprueba el nombre de la clase de cada elemento
    // Si contiene activo elimina el item 
    if(li.className.includes("activo") ) {
        listUsers.removeChild(li);
    }
}
