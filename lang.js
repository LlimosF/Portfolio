let btnToggleLang = document.getElementById("toggle-lang");
let langHome = document.getElementById("to-home");
let langHello = document.getElementById("home-hello-text");
let langDownload = document.getElementById("download");

let langImage = document.getElementById("toggle-lang");

let langAbout = document.getElementById("to-about");
let langSkill = document.getElementById("to-skills");
let langProjet = document.getElementById("to-projects");
let langContact = document.getElementById("to-contact");

let langInstagram = document.getElementById("instagram");
let langFacebook = document.getElementById("facebook");
let langLinkedin = document.getElementById("linkedin");
let langGithub = document.getElementById("instagram");
let langTelephone = document.getElementById("telephone");
let langMail = document.getElementById("mail");

let lang = "fr";

function toggleLang() {

  if (lang === "fr") {

    langHome.textContent = "Home";
    langAbout.textContent = "About";
    langSkill.textContent = "Skills";
    langProjet.textContent = "Portfolio";
    langContact.textContent = "Contact";
    langImage.src = "media/header/england.png";
    langHello.textContent = "Hello & Welcome";
    langDownload.textContent = "Download CV";

    lang = "en";

  } else {

    langHome.textContent = "Accueil";
    langAbout.textContent = "À propos";
    langSkill.textContent = "Compétences";
    langProjet.textContent = "Portfolio";
    langContact.textContent = "Contact";
    langImage.src = "media/header/france.png";
    langHello.textContent = "Bonjour & Bienvenue";
    langDownload.textContent = "Télécharger CV";

    lang = "fr";

  }
}

btnToggleLang.addEventListener("click", toggleLang);
