<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Florian Llimos | Admin</title>
</head>
<body>

  <?php

    require_once("component/database.php");
    require_once("component/check-admin.php");
    require_once("component/background.php");
    require_once("component/header.php");
  
    // GET ALL EMAIL NEWSLETTER
  
    $sqlNewsletter = "SELECT * FROM newsletter ORDER BY 'id' DESC";
    $queryNewsletter = $db->query($sqlNewsletter);
    $newsletter = $queryNewsletter->fetchAll();
  
    // GET ALL CONTACT FORMULAIRE
  
    $sqlFormulaire = "SELECT * FROM formulaire ORDER BY 'id' DESC";
    $queryFormulaire = $db->query($sqlNewsletter);
    $formulaire = $queryFormulaire->fetchAll();
  
  ?>
  
</body>
</html>
