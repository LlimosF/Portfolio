<?php

  require("component/database.php");

?>

<div>
  <form method="POST" class="form-fix">
    <h3 class="title-form">Inscription</h3>
    <div class="bloc-form">
      <input type="text" name="name" id="nom" placeholder="Nom *" required>
    </div>
    <div class="bloc-form">
      <input type="email" name="email" id="email" placeholder="Adresse e-mail *" required>
    </div>
    <div class="bloc-form">
      <input type="password" name="password" id="password" placeholder="Mot de passe *" required>
    </div>
    <button type="submit" class="validate">Inscrire</button>

    <?php

      if(isset($_POST["name"], $_POST["email"], $_POST["password"]) && !empty($_POST["name"]) && !empty($_POST["email"]) && !empty($_POST["password"])) {
        
        $name = strip_tags($_POST["name"]);
        $email = strip_tags($_POST["email"]);
        $password = password_hash($_POST["password"], PASSWORD_ARGON2ID);
      
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
          $inscription = "INSERT INTO users(`name`, `email`, `password`) VALUES (:name, :email, :password)";
      
          $query = $db->prepare($inscription);
          $query->bindValue(":name", $name, PDO::PARAM_STR);
          $query->bindValue(":email", $email, PDO::PARAM_STR);
          $query->bindValue(":password", $password, PDO::PARAM_STR);
          
          $query->execute();
      
        }

      }
  
    ?>
    
  </form>
</div>