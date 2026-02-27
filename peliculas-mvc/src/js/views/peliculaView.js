export default class PeliculaView {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
    }

    renderPeliculas(peliculas, comprarCallback) {
        this.container.innerHTML = '';
        peliculas.forEach(p => {
            const div = document.createElement('div');
            div.innerHTML = `
                <h3>${p.titulo}</h3>
                <p>Precio: $${p.precio}</p>
                <button>Comprar</button>
            `;
            div.querySelector('button').addEventListener('click', () => {
                comprarCallback(p.id);
            });
            this.container.appendChild(div);
        });
    }

    mostrarMensaje(msg) {
        alert(msg);
    }
}