// Seleccionamos el botón y la lista
const boton = document.getElementById("btnCargar");
const lista = document.getElementById("lista");

// Peticion GET con XHR
boton.addEventListener("click", function() {
    // Instancia del objeto
    const xhr = new XMLHttpRequest();

    // Comunicacion con el serv - GEt metodo
    xhr.open('GET', 'datos.php', true);

    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4) {
            if(xhr.status === 200) {
                try {
                    const usuarios = JSON.parse(xhr.responseText);
                    lista.innerHTML = "";
                    usuarios.forEach(u => {
                        const li = document.createElement("li");
                        li.textContent = `${u.nombre} (${u.edad} años)`;
                        lista.appendChild(li);
                    });

                } catch (e) {
                    console.error("Error al procesar JSON: ", e);
                }
            } else {
                console.error("Error en la petición:", xhr.status)
            }
        }
    };

    // Enviar peticion al serv
    xhr.send();
});

boton.addEventListener("click", function () {
    xhr = new XMLHttpRequest();
    xhr.open("GET", "datos.php", true);

    xhr.send();

    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4){
            if(xhr.status = 200) {
                try {
                    const usuarios = JSON.parse(xhr.responseText);
                    lista.innerHTML = "";
                    usuarios.forEach(u => {
                        const li = document.createElement("li");
                        li.textContent = `${u.nombre} (${u.edad} años)`;
                        lista.appendChild(li);
                    });

                } catch (e) {
                    console.error("Error al procesar JSON: ", e)
                }
            }
        }
    };

})