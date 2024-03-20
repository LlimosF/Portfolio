let btnToggle = document.getElementById("toggle-theme");
let background = document.getElementById("background-fixed");
let typing = document.getElementById("typing");
typing.classList.add("color-dark");
let ulNavTop = document.getElementById("list-nav-top");
let liNavTop = ulNavTop.getElementsByTagName("li");
let hello = document.getElementById("home-hello-text");
hello.classList.add("color-dark");
let download = document.getElementById("download");

let themeInstagram = document.getElementById("instagram");
let themeFacebook = document.getElementById("facebook");
let themeLinkedin = document.getElementById("linkedin");
let themeGithub = document.getElementById("github"); // Corrected ID
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

    themeInstagram.src = "media/theme/light/instagram.png";
    themeFacebook.src = "media/theme/light/facebook.png";
    themeLinkedin.src = "media/theme/light/linkedin.png";
    themeGithub.src = "media/theme/light/github.png";
    themeTelephone.src = "media/theme/light/telephone.png";
    themeMail.src = "media/theme/light/mail.png";
    homeButton.src = "media/theme/light/arrow.png";

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

    themeInstagram.src = "media/theme/dark/instagram.png";
    themeFacebook.src = "media/theme/dark/facebook.png";
    themeLinkedin.src = "media/theme/dark/linkedin.png";
    themeGithub.src = "media/theme/dark/github.png";
    themeTelephone.src = "media/theme/dark/telephone.png";
    themeMail.src = "media/theme/dark/mail.png";
    homeButton.src = "media/theme/dark/arrow.png";

    theme = "Dark";
  }
}

btnToggle.addEventListener("click", toggleTheme);
