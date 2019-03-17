<?php
class Blog {
    private $db;

    function __construct() {
        $this->createDatabaseConnection();
    }

    private function createDatabaseConnection() {
        $this->db = new PDO("mysql:host=localhost;dbname=test;charset=utf8", 'root', '1');
        $this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $this->db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    }

    public function fetchAll() {
        $query = $this->db->prepare("SELECT * FROM `blog` ORDER BY `slno` DESC");
        $query->execute();
        return  $query->fetchAll();
    }
}
