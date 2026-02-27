export default class PeliculaController {
    constructor(model, view, usuarioId) {
        this.model = model;
        this.view = view;
        this.usuarioId = usuarioId; // Simular usuario logueado
    }

    async init() {
        const peliculas = await this.model.getPeliculas();
        this.view.renderPeliculas(peliculas, this.comprar.bind(this));
    }

    async comprar(peliculaId) {
        const res = await this.model.comprarPelicula(this.usuarioId, peliculaId);
        this.view.mostrarMensaje(res.message);
        this.init(); // actualizar lista si cambió disponibilidad
    }
}