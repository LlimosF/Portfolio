<footer id="footer">
  <div class="container-footer-newsletter">
    <h2 class="title-footer">newsletter</h2>
    <form class="form-newsletter">
      <input type="email" required placeholder="Adresse e-mail">
      <button type="submit">Inscription</button>
      <div class="bloc-newsletter">
        
        <?php
    
        require_once("component/database.php");

        if(!empty($_POST)) {

          $email = htmlspecialchars($_POST["email"]);

          if(isset($_POST["email"]) && !empty($_POST["email"])) {
        
            $sql = "INSERT INTO `newsletter`(email) VALUES (:email)";
              
            $query = $db->prepare($sql);
            $query->bindValue(":email", $email, PDO::PARAM_STR);
            $query->execute();
        
            if($query->execute()){
        
              echo "<span class='success'>Vous êtes bien inscrit à la newsletter.</span>";
        
            } else {
        
              echo "<span class='error'>Erreur lors de l'inscription à la newsletter.</span>";
        
            }
        
          }

        }

      ?>
      </div>  
    </form>
  </div>
  <p class="copyright">Copyright 2024 Florian LLIMOS.</p>
</footer>
