<?php
class Usuario {
    private $pdo;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    public function getById($id) {
        $stmt = $this->pdo->prepare("SELECT * FROM usuario WHERE id = ?");
        $stmt->execute([$id]);
        return $stmt->fetch();
    }

    public function getAll() {
        $stmt = $this->pdo->query("SELECT * FROM usuario");
        return $stmt->fetchAll();
    }

    public function create($nombre, $email, $contrasena) {
        $stmt = $this->pdo->prepare("INSERT INTO usuario (nombre, email, contrasena) VALUES (?, ?, ?)");
        $stmt->execute([$nombre, $email, $contrasena]);
        return $this->pdo->lastInsertId();
    }
}
?>