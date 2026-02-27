<?php
class DetallePedido
{
    private $pdo;

    public function __construct($pdo)
    {
        $this->pdo = $pdo;
    }

    public function crear($pedido_id, $pelicula_id, $precio)
    {
        $stmt = $this->pdo->prepare("INSERT INTO detalle_pedido (pedido_id, pelicula_id, precio) VALUES (?, ?, ?)");
        $stmt->execute([$pedido_id, $pelicula_id, $precio]);
        return $this->pdo->lastInsertId();
    }

    public function getByPedido($pedido_id)
    {
        $stmt = $this->pdo->prepare("SELECT dp.*, p.titulo FROM detalle_pedido dp 
                                    JOIN pelicula p ON dp.pelicula_id = p.id 
                                    WHERE dp.pedido_id = ?");
        $stmt->execute([$pedido_id]);
        return $stmt->fetchAll();
    }
}
