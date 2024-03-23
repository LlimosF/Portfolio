let btnToggle = document.getElementById("toggle-theme");
let background = document.getElementById("background-fixed");
let typing = document.getElementById("typing");
typing.classList.add("color-dark");
let ulNavTop = document.getElementById("list-nav-top");
let liNavTop = ulNavTop.getElementsByTagName("li");
let hello = document.getElementById("home-hello-text");
hello.classList.add("color-dark");
let download = document.getElementById("download");
let header = document.getElementById("header");
let toHome = document.getElementById("to-home");
let toAbout = document.getElementById("to-about");
let toSkills = document.getElementById("to-skills");
let toProjects = document.getElementById("to-projects");
let toContact = document.getElementById("to-contact");
let burger = document.getElementById("burger");

let themeInstagram = document.getElementById("instagram");
let themeFacebook = document.getElementById("facebook");
let themeLinkedin = document.getElementById("linkedin");
let themeGithub = document.getElementById("github");
let themeTelephone = document.getElementById("telephone");
let themeMail = document.getElementById("mail");
let homeButton = document.getElementById("home-bottom");

let theme = "Dark";

function toggleTheme() {
  if (theme === "Dark") {
    background.classList.remove("container-theme-dark");
    background.classList.add("container-theme-light");
    btnToggle.src = "media/header/soleil.png";
    typing.classList.remove("color-dark");
    typing.classList.add("color-light");
    hello.classList.remove("color-dark");
    hello.classList.add("color-light");
    download.classList.remove("download-dark");
    download.classList.add("download-light");
    header.classList.remove("header-dark");
    header.classList.add("header-light");
    burger.src = "media/theme/light/menu.png";

    toHome.classList.remove("li-nav-top-dark");
    toHome.classList.add("li-nav-top-light");

    toAbout.classList.remove("li-nav-top-dark");
    toAbout.classList.add("li-nav-top-light");

    toSkills.classList.remove("li-nav-top-dark");
    toSkills.classList.add("li-nav-top-light");

    toProjects.classList.remove("li-nav-top-dark");
    toProjects.classList.add("li-nav-top-light");

    toContact.classList.remove("li-nav-top-dark");
    toContact.classList.add("li-nav-top-light");

    themeInstagram.src = "media/theme/light/instagram.png";
    themeFacebook.src = "media/theme/light/facebook.png";
    themeLinkedin.src = "media/theme/light/linkedin.png";
    themeGithub.src = "media/theme/light/github.png";
    themeTelephone.src = "media/theme/light/telephone.png";
    themeMail.src = "media/theme/light/mail.png";
    homeButton.src = "media/theme/light/arrow.png";
    homeButton.classList.remove("home-bottom-dark");
    homeButton.classList.add("home-bottom-light");

    theme = "Light";
  } else {
    background.classList.remove("container-theme-light");
    background.classList.add("container-theme-dark");
    btnToggle.src = "media/header/lune.png";
    typing.classList.remove("color-light");
    typing.classList.add("color-dark");
    hello.classList.remove("color-light");
    hello.classList.add("color-dark");
    download.classList.remove("download-light");
    download.classList.add("download-dark");
    header.classList.remove("header-light");
    header.classList.add("header-dark");
    burger.src = "media/theme/dark/menu.png";

    toHome.classList.remove("li-nav-top-light");
    toHome.classList.add("li-nav-top-dark");
    
    toAbout.classList.remove("li-nav-top-light");
    toAbout.classList.add("li-nav-top-dark");
    
    toSkills.classList.remove("li-nav-top-light");
    toSkills.classList.add("li-nav-top-dark");
    
    toProjects.classList.remove("li-nav-top-light");
    toProjects.classList.add("li-nav-top-dark");
    
    toContact.classList.remove("li-nav-top-light");
    toContact.classList.add("li-nav-top-dark");

    themeInstagram.src = "media/theme/dark/instagram.png";
    themeFacebook.src = "media/theme/dark/facebook.png";
    themeLinkedin.src = "media/theme/dark/linkedin.png";
    themeGithub.src = "media/theme/dark/github.png";
    themeTelephone.src = "media/theme/dark/telephone.png";
    themeMail.src = "media/theme/dark/mail.png";
    homeButton.src = "media/theme/dark/arrow.png";
    homeButton.classList.remove("home-bottom-light");
    homeButton.classList.add("home-bottom-dark");

    theme = "Dark";
  }
}

btnToggle.addEventListener("click", toggleTheme);
