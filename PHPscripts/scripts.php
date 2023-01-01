<?php
require_once('../includes/autoloader.php');
// if ($_GET['request'] == 1 ){
//     // echo "tralalla tralalire";
// }
$conn1 = new DbConnection();
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



?>