<?php

  $userdb = "root";
  $passworddb = "";

  try {

    $db = new PDO('mysql:host=;dbname=', $userdb, $passworddb);

  } catch (PDOException $e) {

    print "Erreur :" . $e->getMessage() . "<br/>";
    die;
  
  }