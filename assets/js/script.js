const skills = [
    { src: './assets/img/skills/vs-code.svg', description: 'Visual Studio Code is a lightweight, open-source code editor developed by Microsoft, offering powerful features like IntelliSense, debugging, and Git integration, making it highly customizable and suitable for a wide range of programming tasks. 2 years of experience' },
    { src: './assets/img/skills/github.svg', description: 'GitHub is a web-based platform that provides version control using Git, enabling developers to collaborate on code, track changes, and manage projects with features like pull requests, issues, and repositories. 2 years of experience' },
    { src: './assets/img/skills/icons8-css.svg', description: 'CSS (Cascading Style Sheets) is a style sheet language used to describe the presentation and layout of HTML content, allowing developers to control the visual appearance of web pages, including colors, fonts, spacing, and responsiveness. 2 years of experience' },
    { src: './assets/img/skills/bootstrap.svg', description: 'Bootstrap is a popular open-source front-end framework that provides pre-designed components, responsive grid systems, and JavaScript plugins, making it easier to develop mobile-first and responsive websites quickly. 1 year of experience' },
    { src: './assets/img/skills/icons8-html.svg', description: 'HTML (HyperText Markup Language) is the standard markup language used to create and structure content on the web, defining elements like headings, paragraphs, links, and images in a webpage. 2 years of experience' },
    { src: './assets/img/skills/icons8-javascript.svg', description: 'JavaScript is a versatile programming language primarily used for adding interactivity, dynamic content, and complex functionalities to websites, running both on the client side in browsers and on the server side with environments like Node.js. 1 year of experience' },
    { src: './assets/img/skills/icons8-react-js.svg', description: 'React is a JavaScript library developed by Facebook for building user interfaces, particularly single-page applications, using a component-based architecture that allows for efficient rendering and management of dynamic data. 1 year of experience' },
    { src: './assets/img/skills/icons8-express-js.svg', description: 'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications, including routing, middleware support, and simplified API development. 1 year of experience' },
    { src: './assets/img/skills/icons8-node-js.svg', description: 'Node.js is a JavaScript runtime built on Chrome V8 engine that allows developers to run JavaScript on the server side, enabling the creation of fast and scalable network applications. 1 year of experience' },
    { src: './assets/img/skills/npm.svg', description: 'npm (Node Package Manager) is a package manager for JavaScript that enables developers to install, share, and manage libraries and dependencies in their Node.js projects, streamlining the development process. 1 year of experience' },

];

const projects = [
    {src: './assets/img/projects/fortfolio.avif', description: 'Fortfolio: is a web page for a webDev deploy you own projects, based on HBS, CSS, JavaScript for frontend, in the backend using Nodejs, Express, MongoDB as a database.', gitRepo:'https://github.com/TahaRafaLinoOrg/project2', deployLink:'https://project-portfolio.adaptable.app/'},
    {src: './assets/img/projects/botiga_cafe.avif', description: 'Coffee shop: make a page for a coffee shop with HTML, CSS, and responsive', gitRepo:'https://github.com/Rgerotto/Botiga_de_cafes', deployLink:'https://botigadicoffee.netlify.app'},
    {src: './assets/img/projects/projectEstagiario.avif', description: 'WebPage: project to improve CSS and mobile version.', gitRepo: 'https://github.com/Rgerotto/projeto-Estagiario', deployLink:'https://internishp-project.netlify.app'},
    {src: './assets/img/projects/Nomadnest_Voyages.avif', description: 'Nomadnest: project from a corse from Udemy to be Master in CSS exploring animation, flexbox and transition', gitRepo:'https://github.com/Rgerotto/Natours', deployLink:'https://nomadnest-voyages.netlify.app'},
    {src: './assets/img/projects/trillo.avif', description: 'Trillo: project from Udemy course CSS Master to inprove my CSS skills, improve more my animation, transiction and flexbox', gitRepo: 'https://github.com/Rgerotto/Trillo', deployLink: 'https://trillo-rafael.netlify.app/'},
    /* {src: './assets/img/projects/trillo.jng', description: 'Nexter: project from Udemy CSS Master to improve CSS grid', gitRepo: 'https://github.com/Rgerotto/nexter', deployLink: 'https://github.com/Rgerotto/nexter'}, */
    {src: './assets/img/projects/black-jack.avif', description: 'Game: Project from Udemy JavaScript to improve DOM  monipulation', gitRepo: 'https://github.com/Rgerotto/Black_jack', deployLink: 'https://whimsical-gnome-13d6be.netlify.app/'},
    {src: './assets/img/projects/guess_my_number.avif', description: 'Game: Project from Udemy JavaScript to improve DOM  monipulation', gitRepo: 'https://github.com/Rgerotto/Guess_my_number', deployLink: 'https://moonlit-axolotl-de3c90.netlify.app'},
    {src: './assets/img/projects/moto2go.avif', description: 'Moto2Go Central: Built with React.js and CSS, this platform streamlines bike and motorbike rentals by redirecting users to WhatsApp with pre-filled booking details.', gitRepo: 'https://github.com/Moto2GoCentral/webPage', deployLink: 'https://moto2gocentral.netlify.app/'},
    //{src: './assets/img/projects/work_in_progress.jpg', description: 'HelpFornos: Landing Page for a bussines made with HTML, CSS, JavaScript', gitRepo: 'https://', deployLink: 'https://'}
];

/* this is off */
const chk = document.getElementById('chk');
chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
})

const navLinks = document.querySelectorAll('.nav-list a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(navLinks => {
            navLinks.classList.remove('active')
        })
        link.classList.add('active')
    })
})

function createCard() {

    /* <div class="btn">
            <button class="btn-repo"><a href="${project.gitRepo}" target="_blank"><i class="fa-brands fa-github"></i></a></button>
            <button class="btn-repo"><a href="${project.deployLink}" target="_blank"><i class="fa-solid fa-rocket"></i></a></button>
            </div>
             */
    projects.forEach(project => {
        const container = document.getElementsByClassName('container-card')[0];
        const create = document.createElement('div');
        create.className = 'card';
        create.innerHTML = 
            `<img class="proj" src="${project.src}" alt="${project.description}">
            `;
        container.appendChild(create);

        create.addEventListener('click', () => {
            showPopup(project.src, project.description, project.gitRepo, project.deployLink)
        })
    });
}

function createSkill() {
    skills.forEach(skill => {
        const container = document.getElementsByClassName("container-skill")[0];
        const create = document.createElement("div");
        create.className = "skill";
        create.innerHTML = `<img class="logo-skill" src="${skill.src}" alt="Skill Image">`;
        container.appendChild(create);

        // Add click event to show popup
        create.addEventListener('click', () => {
            showPopupSkill(skill.src, skill.description);
        });
    });
}

function showPopupSkill(imagePathSkill, descriptionSkillText) {
    // Get the popup-skill element and its contents
    const popupSkill = document.getElementsByClassName('popup-skill')[0]; // Access the first element
    const popupImgSkill = document.getElementById('img-popup');
    const descriptionElement = document.getElementById('description-popup');


    if (popupSkill && popupImgSkill && descriptionElement) {
        // Set the image source and description
        popupImgSkill.src = imagePathSkill;
        descriptionElement.textContent = descriptionSkillText;

        // Show the popup
        popupSkill.classList.remove('hidden');
        popupSkill.setAttribute('aria-hidden', 'false');

        // Add event listener to close the popup
        const btnClose = document.getElementsByClassName('close-popup')[0];
        btnClose.addEventListener('click', () => {
            popupSkill.classList.add('hidden');
            popupSkill.setAttribute('aria-hidden', 'true');
        });
    }
}


function showPopup(imagePath, description, gitRepo, deployLink) {
    // Get the popup element and its contents
    const popup = document.querySelector('.popup');
    const popupContent = document.querySelector('.popup-content')
    const popupImage = document.querySelector('#popup-image');
    const popupDescription = document.querySelector('#popup-description');
    const divBtn = document.querySelector('.div-btn');

    
    // Set the image source and description
    popupImage.src = imagePath;
    popupDescription.textContent = description;

    divBtn.innerHTML = '';

    const btnGit = document.createElement('button');
    btnGit.classList.add('btn-repo')
    btnGit.innerHTML = '<i class="fa-brands fa-github"></i>';
    btnGit.addEventListener('click', () => {
        window.open(gitRepo, '_blank')
    })
    divBtn.appendChild(btnGit)

    const btnDeploy = document.createElement('button');
    btnDeploy.classList.add('btn-repo')
    btnDeploy.innerHTML = '<i class="fa-solid fa-rocket"></i>';
    btnDeploy.addEventListener('click', () => {
        window.open(deployLink, '_blank')
    })
    divBtn.appendChild(btnDeploy)

    // Show the popup
    popup.classList.remove('hidden');
    popup.setAttribute('aria-hidden', 'false');

    // Add event listener to close the popup
    const closeButton = document.querySelector('.popup-close');
    closeButton.addEventListener('click', () => {
        popup.classList.add('hidden');
        popup.setAttribute('aria-hidden', 'true');
    });
}

createCard();
createSkill();

/* NAV HAMBUGER */

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));