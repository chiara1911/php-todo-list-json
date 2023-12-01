<?php

$filecontent = file_get_contents("list.json");
// var_dump($filecontent);


$list = json_decode($filecontent, true);
// var_dump($list);
if(isset($_POST['task'])){
    $newTask = [
        "text"=> $_POST['task'],
        "done"=> false
    ];
   array_push($list, $newTask);
   file_put_contents("list.json", json_encode($list));
}
if(isset($_POST["removed"])){
    $removeTask=$_POST["removed"];
array_splice($list, $removeTask, 1);
file_put_contents("list.json", json_encode($list));

}


header('Content-Type: application/json');
echo json_encode($list);

?>