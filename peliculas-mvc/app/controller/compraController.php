<?php
require_once 'models/Usuario.php';
require_once 'models/Pelicula.php';
require_once 'models/Pedido.php';
require_once 'models/DetallePedido.php';

class CompraController {
    private $usuario;
    private $pelicula;
    private $pedido;
    private $detalle;

    public function __construct($pdo) {
        $this->usuario = new Usuario($pdo);
        $this->pelicula = new Pelicula($pdo);
        $this->pedido = new Pedido($pdo);
        $this->detalle = new DetallePedido($pdo);
    }

    // Listar todas las películas disponibles
    public function listarPeliculas() {
        $peliculas = $this->pelicula->getAllDisponibles();
        echo json_encode($peliculas);
    }

    // Comprar una película
    public function comprar() {
        $data = json_decode(file_get_contents('php://input'), true);
        $usuario_id = $data['usuario_id'] ?? null;
        $pelicula_id = $data['pelicula_id'] ?? null;

        if (!$usuario_id || !$pelicula_id) {
            echo json_encode(['success' => false, 'message' => 'Faltan datos']);
            return;
        }

        $pelicula = $this->pelicula->getById($pelicula_id);
        if (!$pelicula || !$pelicula['disponible']) {
            echo json_encode(['success' => false, 'message' => 'Película no disponible']);
            return;
        }

        // Crear pedido
        $pedido_id = $this->pedido->crear($usuario_id, $pelicula['precio'], 'pagado');

        // Crear detalle
        $this->detalle->crear($pedido_id, $pelicula_id, $pelicula['precio']);

        // Opcional: marcar película como no disponible si solo se permite 1 compra
        // $this->pelicula->marcarNoDisponible($pelicula_id);

        echo json_encode(['success' => true, 'message' => 'Compra realizada con éxito']);
    }

    // Obtener pedidos de un usuario
    public function pedidosUsuario($usuario_id) {
        $pedidos = $this->pedido->getByUsuario($usuario_id);
        foreach ($pedidos as &$pedido) {
            $pedido['detalles'] = $this->detalle->getByPedido($pedido['id']);
        }
        echo json_encode($pedidos);
    }
}
?>