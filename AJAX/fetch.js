const boton = document.getElementById("btnCargar");
const lista = document.getElementById("lista");

boton.addEventListener("click", function () {
    fetch("datos.php")
        .then(resp => {
            if(!resp.ok) {
                throw new Error(`Error en la peticion: ${response.status}`);
            }
            return resp.json(); // Se convierte en JSON
        })
        .then(usuarios => {
            lista.innerHTML = "";
            usuarios.forEach(u => {
                const li = document.createElement("li");
                li.textContent = `${u.nombre} (${u.edad} años.)`;
                lista.appendChild(li);
            });
        })
        .catch(error => {
            console.error("Hubo un error: ", error);
        })
});
