<?php

$nb = $_POST["id"];


try {
$bdd = new PDO('mysql:host=localhost;dbname=Tune;charset=utf8','root', 'root');
} catch(Exception $e)
{
  die('erreur :' . $e->getMessage());
}

$song = $bdd->prepare('SELECT id, titre, dateSortie, description, src, poster FROM tube WHERE id = ?');
$song->execute(array($nb));
$data = $song->fetch();



echo json_encode($data);

?>
