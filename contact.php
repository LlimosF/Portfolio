<div id="contact">
  <h2 class="title-section">Contact</h2>
  <div class="container-contact">
    <form class="form-contact" method="POST">

      <?php
    
        require_once("component/database.php");

        if(!empty($_POST)) {

          $name = htmlspecialchars($_POST["name"]);
          $email = htmlspecialchars($_POST["email"]);
          $number = htmlspecialchars($_POST["number"]);
          $content = htmlspecialchars($_POST["content"]);
      
          if(isset($_POST["name"], $_POST["email"], $_POST["number"], $_POST["content"]) && !empty($_POST["name"]) && !empty($_POST["email"]) && !empty($_POST["number"]) && !empty($_POST["content"])) {
              
            $sql = "INSERT INTO `formulaire`(name, email, number, content) VALUES (:name, :email, :number, :content)";
              
            $query = $db->prepare($sql);
            $query->bindValue(":name", $name, PDO::PARAM_STR);
            $query->bindValue(":email", $email, PDO::PARAM_STR);
            $query->bindValue(":number", $number, PDO::PARAM_INT);
            $query->bindValue(":content", $content, PDO::PARAM_STR);
              
            if($query->execute()){
              echo "<span class='success'>Votre formulaire a bien été envoyé.</span>";
            } else {
              echo "<span class='error'>Erreur lors de l'envoie du formulaire.</span>";
            }

          }

        }

      ?>

      <div class="bloc-form">
        <input type="text" name="name" required placeholder="Prénom" id="input-text-contact">
      </div>
      <div class="bloc-form">
        <input type="email" name="email" required placeholder="Adresse e-mail" id="input-email-contact">
      </div>
      <div class="bloc-form">
        <input type="number" name="number" required placeholder="Numéro de téléphone" id="input-number-contact">
      </div>
      <div class="bloc-form">
        <textarea name="content" rows="3" placeholder="Votre message" id="textarea-contact"></textarea>
      </div>
      <button type="submit" id="button-contact">Envoyer</button>
    </form>
    <div class="container-cv">
      <div class="contact-container-cv">
        <button id="download1" class="download-dark" title="Télécharger mon cv" tabindex="0">Télécharger CV</button>
      </div>
      <img src="media/cv.png" alt="CV de Florian Llimos">
    </div>
  </div>
</div>
