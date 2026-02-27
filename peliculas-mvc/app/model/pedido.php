<?php
class Pedido {
    private $pdo;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    public function crear($usuario_id, $total, $estado='pendiente') {
        $stmt = $this->pdo->prepare("INSERT INTO pedido (usuario_id, total, estado) VALUES (?, ?, ?)");
        $stmt->execute([$usuario_id, $total, $estado]);
        return $this->pdo->lastInsertId();
    }

    public function getByUsuario($usuario_id) {
        $stmt = $this->pdo->prepare("SELECT * FROM pedido WHERE usuario_id = ?");
        $stmt->execute([$usuario_id]);
        return $stmt->fetchAll();
    }

    public function getById($id) {
        $stmt = $this->pdo->prepare("SELECT * FROM pedido WHERE id = ?");
        $stmt->execute([$id]);
        return $stmt->fetch();
    }
}
?>