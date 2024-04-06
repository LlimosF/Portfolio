<footer id="footer">
  <div class="container-footer-newsletter" id="newsletter">
    <h2 class="title-footer">newsletter</h2>
    <form class="form-newsletter" method="POST" action="component/traitement-newsletter.php">
      <input type="email" name="emailnewsletter" required placeholder="Adresse e-mail" id="input-newsletter">
      <button type="submit" id="btn-newsletter" name="submit_newsletter">Inscription</button>
      <div class="bloc-newsletter">
        
        <?php
        require_once("component/database.php");
        ?>
      </div>  
    </form>
  </div>
  <p class="copyright">Copyright 2024 Florian LLIMOS.</p>
</footer>
