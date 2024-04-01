<?php
require_once("component/database.php");
?>

<form method="POST" class="">
    <h3 class="">Connexion</h3>
    <div class="">
        <input type="email" name="email" id="email" placeholder="Adresse e-mail" required>
    </div>
    <div class="bloc-form">
        <input type="password" name="password" id="password" placeholder="Mot de passe" required>
    </div>
    <button type="submit" class="">Me connecter</button>

    <?php
    if (!empty($_POST)) {
        if (isset($_POST["email"], $_POST["password"]) && !empty($_POST["email"]) && !empty($_POST["password"])) {
            if (filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
                $sql = "SELECT * FROM users WHERE email = :email";
                $query = $db->prepare($sql);
                $query->bindValue(":email", $_POST["email"], PDO::PARAM_STR);
                $query->execute();
                $user = $query->fetch();
                if ($user && password_verify($_POST["password"], $user["password"])) {
                    session_start();
                    $_SESSION["user"] = [
                        "id" => $user["id"],
                        "nom" => $user["nom"],
                        "email" => $user["email"]
                    ];
                    header("Location: gestion.php");
                    exit();
                } else {
                    echo "<span class='error'>Le mot de passe et / ou l'adresse e-mail sont incorrects.</span>";
                }
            } else {
                echo "<span class='error'>Le mot de passe et / ou l'adresse e-mail sont incorrects.</span>";
            }
        } else {
            echo "<span class='error'>Veuillez remplir tous les champs.</span>";
        }
    }
    ?>
</form>
