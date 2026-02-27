<?php
class Pelicula {
    private $pdo;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    public function getAllDisponibles() {
        $stmt = $this->pdo->query("SELECT * FROM pelicula WHERE disponible = 1");
        return $stmt->fetchAll();
    }

    public function getById($id) {
        $stmt = $this->pdo->prepare("SELECT * FROM pelicula WHERE id = ?");
        $stmt->execute([$id]);
        return $stmt->fetch();
    }
}
?>