<?php
class DbConnection {
    private $host = "localhost";
    private $user = "root";
    private $pwd = "root";
    private $dbName = "php_qizizz";
    // connection object
    private $conn;
    public function __construct(){
        try{
            $dsn = 'mysql:host='.$this->host.';dbname='.$this->dbName;
            $this->conn = new PDO($dsn, $this->user, $this->pwd);
            $this->conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
            
         }
         catch(PDOException $e){
             echo "Error: " . $e->getMessage();
           }
    }

    public function __destruct() {
        $this->conn = NULL;
    }
    public function connect(){
        return $this->conn;
    }
}
?>