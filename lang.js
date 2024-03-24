let btnToggleLang = document.getElementById("toggle-lang");
let langHome = document.getElementById("to-home");
let langHello = document.getElementById("home-hello-text");
let langDownload = document.getElementById("download");

let aboutPresentation = document.getElementById("about-presentation");
let aboutDiplome = document.getElementById("about-diplome");
let aboutPassion = document.getElementById("about-passion");
let aboutRecherche = document.getElementById("about-recherche");
let aboutIdee = document.getElementById("about-idee");

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

    aboutPresentation.textContent = "My name is Florian, I'm 23 years old, and I'm a passionate web developer based near Toulouse. My journey into the world of web development began a few years ago, and since then, I have worked hard to acquire strong technical skills and a deep understanding of modern web technologies.";
    aboutDiplome.textContent = "After discovering my passion for web programming, I undertook training in web development which allowed me to master the essential languages ​​and tools such as HTML, CSS, JavaScript, and PHP. I also gained experience creating responsive and user-friendly websites, using frameworks such as React and Angular.";
    aboutPassion.textContent = "What motivates me most about web development is the ability to create exceptional online experiences that meet user needs. I love solving complex problems, designing intuitive user interfaces and making the web more accessible for everyone.";
    aboutRecherche.textContent = "Over the years, I have had the opportunity to work on various exciting projects, ranging from business websites to interactive web applications. Each of these projects has been an opportunity to learn and grow as a developer. I am proud to share some of these projects in my portfolio.";
    aboutIdee.textContent = "Currently, I am open to new professional opportunities in the field of web development. I am excited to contribute to innovative projects, to collaborate with other technology enthusiasts, and to continue to develop my skills.";
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

    aboutPresentation.textContent = "Je m'appelle Florian, j'ai 23 ans, et je suis un développeur web passionné basé près de Toulouse. Mon voyage dans le monde du développement web a commencé il y a quelques années, et depuis lors, j'ai travaillé dur pour acquérir des compétences techniques solides et une profonde compréhension des technologies web modernes.";
    aboutDiplome.textContent = "Après avoir découvert ma passion pour la programmation web, j'ai suivi une formation en développement web qui m'a permis de maîtriser les langages et outils essentiels tels que HTML, CSS, JavaScript et PHP. J'ai également acquis de l'expérience dans la création de sites web réactifs et conviviaux, en utilisant des frameworks tels que React et Angular.";
    aboutPassion.textContent = "Ce qui me motive le plus dans le développement web, c'est la possibilité de créer des expériences en ligne exceptionnelles qui répondent aux besoins des utilisateurs. J'aime résoudre des problèmes complexes, concevoir des interfaces utilisateur intuitives et rendre le web plus accessible pour tous.";
    aboutRecherche.textContent = "Au fil des ans, j'ai eu l'opportunité de travailler sur divers projets passionnants, allant de sites web d'entreprises à des applications web interactives. Chacun de ces projets a été l'occasion d'apprendre et de grandir en tant que développeur. Je suis fier de partager certains de ces projets dans mon portfolio.";
    aboutIdee.textContent = "Actuellement, je suis ouvert à de nouvelles opportunités professionnelles dans le domaine du développement web. Je suis enthousiaste à l'idée de contribuer à des projets innovants, de collaborer avec d'autres passionnés de technologie, et de continuer à développer mes compétences.";

    lang = "fr";

  }
}

btnToggleLang.addEventListener("click", toggleLang);
