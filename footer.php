<footer id="footer">
  <div class="container-footer-newsletter" id="newsletter">
    <h2 class="title-footer">newsletter</h2>
    <form class="form-newsletter">
      <input type="email" required placeholder="Adresse e-mail" id="input-newsletter">
      <button type="submit" id="btn-newsletter">Inscription</button>
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
        
              echo "<span class='success' id='success-newsletter'>Vous êtes bien inscrit à la newsletter.</span>";
        
            } else {
        
              echo "<span class='error' id='error-newsletter'>Erreur lors de l'inscription à la newsletter.</span>";
        
            }
        
          }

        }

      ?>
      </div>  
    </form>
  </div>
  <p class="copyright">Copyright 2024 Florian LLIMOS.</p>
</footer>
