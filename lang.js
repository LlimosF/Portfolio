buttonLang = document.getElementById("toggle-lang");

let toHome = document.getElementById("to-home");
let toAbout = document.getElementById("to-about");
let toSkills = document.getElementById("to-skills");
let toProjects = document.getElementById("to-projects");
let toContact = document.getElementById("to-contact");

let aboutbloc1 = document.getElementById("about-presentation");
let aboutbloc2 = document.getElementById("about-diplome");
let aboutbloc3 = document.getElementById("about-passion");
let aboutbloc4 = document.getElementById("about-recherche");
let aboutbloc5 = document.getElementById("about-idee");

let homeHelloText = document.getElementById("home-hello-text");

let download1 = document.getElementById("download");
let download2 = document.getElementById("download1");

let toInstagram = document.getElementById("instagram");
let toFacebook = document.getElementById("facebook");
let toLinkedin = document.getElementById("linkedin");
let toGithub = document.getElementById("github");
let toTelephone = document.getElementById("telephone");
let toMail = document.getElementById("mail");

let titleAbout = document.getElementById("title-about");
let titleSkills = document.getElementById("title-skills");

let homeBottom = document.getElementById("home-bottom");

let lang = "fr";

function toggleLang() {

  if (lang === "fr") {

    toHome.textContent = "Home";
    toHome.setAttribute("aria-label", "Link to home");
    toAbout.textContent = "About";
    toAbout.setAttribute("aria-label", "Link to about");
    toSkills.textContent = "Skills";
    toSkills.setAttribute("aria-label", "Link to skills");
    toProjects.setAttribute("aria-label", "Link to portfolio");
    toContact.setAttribute("aria-label", "Link to contact");

    aboutbloc1.textContent = "My name is Florian, I'm 24 years old, and I'm a passionate web developer based near Toulouse. My journey into the world of web development began a few years ago, and since then, I have worked hard to acquire strong technical skills and a deep understanding of modern web technologies.";
    aboutbloc2.textContent = "After discovering my passion for web programming, I undertook training in web development which allowed me to master the essential languages ​​and tools such as HTML, CSS, JavaScript, and PHP. I also gained experience creating responsive and user-friendly websites, using frameworks such as React and Angular.";
    aboutbloc3.textContent = "What motivates me most about web development is the ability to create exceptional online experiences that meet user needs. I love solving complex problems, designing intuitive user interfaces and making the web more accessible for everyone.";
    aboutbloc4.textContent = "Over the years, I have had the opportunity to work on various exciting projects, ranging from business websites to interactive web applications. Each of these projects has been an opportunity to learn and grow as a developer. I am proud to share some of these projects in my portfolio.";
    aboutbloc5.textContent = "Currently, I am open to new professional opportunities in the field of web development. I am excited to contribute to innovative projects, to collaborate with other technology enthusiasts, and to continue to develop my skills.";
  
    buttonLang.src = "media/header/england.png";

    homeHelloText.textContent = "Hello & Welcome";

    download1.textContent = "Download CV";
    download1.setAttribute("aria-label", "Download my CV");
    download1.setAttribute("title", "Download my CV");
    download2.textContent = "Download CV";
    download2.setAttribute("aria-label", "Download my CV");
    download2.setAttribute("title", "Download my CV");

    toInstagram.setAttribute("title", "Link to my profile Instagram");
    toFacebook.setAttribute("title", "Link to my profile Facebook");
    toLinkedin.setAttribute("title", "Link to my profile Linkedin");
    toGithub.setAttribute("title", "Link to my profile Github");
    toTelephone.setAttribute("title", "Link to call me");
    toMail.setAttribute("title", "Link to send me an email");

    titleAbout.textContent = "About";
    titleSkills.textContent = "Skills";

    homeBottom.setAttribute("aria-label", "Link to about");
    homeBottom.setAttribute("title", "Link to about");


    lang = "en";

  } else {

    toHome.textContent = "Accueil";
    toHome.setAttribute("aria-label", "Lien vers l'accueil");
    toAbout.textContent = "à propos";
    toAbout.setAttribute("aria-label", "Lien vers à propos");
    toSkills.textContent = "Compétences";
    toSkills.setAttribute("aria-label", "Lien vers compétences");
    toProjects.setAttribute("aria-label", "Lien vers portfolio");
    toContact.setAttribute("aria-label", "Lien vers contact");

    aboutbloc1.textContent = "Je m'appelle Florian, j'ai 24 ans, et je suis un développeur web passionné basé près de Toulouse. Mon voyage dans le monde du développement web a commencé il y a quelques années, et depuis lors, j'ai travaillé dur pour acquérir des compétences techniques solides et une profonde compréhension des technologies web modernes.";
    aboutbloc2.textContent = "Après avoir découvert ma passion pour la programmation web, j'ai suivi une formation en développement web qui m'a permis de maîtriser les langages et outils essentiels tels que HTML, CSS, JavaScript et PHP. J'ai également acquis de l'expérience dans la création de sites web réactifs et conviviaux, en utilisant des frameworks tels que React et Angular.";
    aboutbloc3.textContent = "Ce qui me motive le plus dans le développement web, c'est la possibilité de créer des expériences en ligne exceptionnelles qui répondent aux besoins des utilisateurs. J'aime résoudre des problèmes complexes, concevoir des interfaces utilisateur intuitives et rendre le web plus accessible pour tous.";
    aboutbloc4.textContent = "Au fil des ans, j'ai eu l'opportunité de travailler sur divers projets passionnants, allant de sites web d'entreprises à des applications web interactives. Chacun de ces projets a été l'occasion d'apprendre et de grandir en tant que développeur. Je suis fier de partager certains de ces projets dans mon portfolio.";
    aboutbloc5.textContent = "Actuellement, je suis ouvert à de nouvelles opportunités professionnelles dans le domaine du développement web. Je suis enthousiaste à l'idée de contribuer à des projets innovants, de collaborer avec d'autres passionnés de technologie, et de continuer à développer mes compétences.";
    
    buttonLang.src = "media/header/france.png";

    homeHelloText.textContent = "Bonjour & Bienvenue";

    download1.textContent = "Télécharger CV";
    download1.setAttribute("aria-label", "Télécharger mon CV");
    download1.setAttribute("title", "Télécharger mon CV");
    download2.textContent = "Télécharger CV";
    download2.setAttribute("aria-label", "Télécharger mon CV");
    download2.setAttribute("title", "Télécharger mon CV");

    toInstagram.setAttribute("title", "Lien vers mon profil Instagram");
    toFacebook.setAttribute("title", "Lien vers mon profil Facebook");
    toLinkedin.setAttribute("title", "Lien vers mon profil Linkedin");
    toGithub.setAttribute("title", "Lien vers mon profil Github");
    toTelephone.setAttribute("title", "Link pour me téléphoner");
    toMail.setAttribute("title", "Lien pour m'envoyer un e-mail");

    titleAbout.textContent = "à propos";
    titleSkills.textContent = "Compétences";

    homeBottom.setAttribute("aria-label", "Lien vers à propos");
    homeBottom.setAttribute("title", "Lien vers à propos");
    
    lang = "fr";

  }
}

buttonLang.addEventListener("click", toggleLang);