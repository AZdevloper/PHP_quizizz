<?php
require_once('../includes/autoloader.php');
session_start();

$conn1 = new DbConnection();
if (isset($_GET['score']) && isset($_GET['username'])) {
    
    $query = $conn1->connect()->prepare("INSERT INTO `user`( `username`, `score`) VALUES (?,?)");
    $query->execute(array($_GET['username'],$_GET['score']));
    echo 'scoore :'. $_GET['score'].'username :   '.$_GET['username'];
    
}else {
    # code...
    # =========== get questions ========== #
    $query = $conn1->connect()->prepare("SELECT * FROM `questions` ;");
   $query->execute();
   $allquestion =  $query->fetchAll(PDO::FETCH_ASSOC);
    
    $question = array();
    foreach($allquestion as $row){
        $question[] = $row;
    }
   
    # =========== get options ========== #
    $query = $conn1->connect()->prepare("SELECT * FROM `choices` ;");
    $query->execute();
    $allquestion =  $query->fetchAll(PDO::FETCH_ASSOC);
     
    $choices = array();
    foreach($allquestion as $row){
        $choices[] = $row;
    }
   
    # =========== insert options into questions ========== #
    for($i=0; $i<sizeof($choices); $i++){
        for($j=0; $j<sizeof($question); $j++){
            if($choices[$i]['questionId'] == $question[$j]['id']){
               $question[$j]['questionChoiceContent'][] = htmlspecialchars($choices[$i]['choiceContent']);
               }
        }
    }
   
   echo json_encode($question) ;

}   


?>