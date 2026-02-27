export default class Pelicula {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async getPeliculas() {
        const res = await fetch(`${this.baseUrl}?action=listar`);
        return await res.json();
    }

    async comprarPelicula(usuarioId, peliculaId) {
        const res = await fetch(`${this.baseUrl}?action=comprar`, {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({usuario_id: usuarioId, pelicula_id: peliculaId})
        });
        return await res.json();
    }
}