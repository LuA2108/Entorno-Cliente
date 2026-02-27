const boton = document.getElementById("btnCargar");
const lista = document.getElementById("lista");

async function cargarUsuario() {
    try {
        const respuesta = await fetch("datos.php");

        if(!respuesta.ok) {
            throw new Error(`Error http: ${respuesta.status}`);
        }

        const usuarios = await respuesta.json();
        lista.innerHTML = "";

        usuarios.forEach(u => {
            const li = document.createElement("li");
            li.textContent = `${u.nombre} (${u.edad} años)`;
            lista.appendChild(li);
        });
    } catch (e) {
        console.error("Error al cargar usuario: ", e);
    }
}

boton.addEventListener("click",cargarUsuario);