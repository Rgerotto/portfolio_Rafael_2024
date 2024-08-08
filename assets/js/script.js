const skills = [
    { src: './assets/img/skills/vs-code.svg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem!' },
    { src: './assets/img/skills/github.svg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem!' },
    { src: './assets/img/skills/icons8-css.svg', description: 'CSS: Styling web pages with CSS for responsive design and user interfaces.' },
    { src: './assets/img/skills/bootstrap.svg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem!' },
    { src: './assets/img/skills/icons8-html.svg', description: 'HTML: Markup language for creating web pages and web applications.' },
    { src: './assets/img/skills/icons8-javascript.svg', description: 'JavaScript: Programming language for creating interactive web applications.' },
    { src: './assets/img/skills/icons8-react-js.svg', description: 'React: Library for building user interfaces with reusable components.' },
    { src: './assets/img/skills/icons8-express-js.svg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem!' },
    { src: './assets/img/skills/icons8-node-js.svg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem!' },
    { src: './assets/img/skills/npm.svg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem!' },

];

const projects = [
    {src: './assets/img/projects/fortfolio.png', description: 'Fortfolio: is a web page for a webDev deploy you own projects, based on HBS, CSS, JavaScript for frontend, in the backend using Nodejs, Express, MongoDB as a database.', gitRepo:'', deployLink:''},
    {src: './assets/img/projects/botiga_cafe.png', description: 'Coffee shop: make a page for a coffee shop with HTML, CSS', gitRepo:'https://github.com/Rgerotto/Botiga_de_cafes', deployLink:'https://botigadicoffee.netlify.app'},
    {src: './assets/img/projects/projectEstagiario.png', description: 'WebPage: project to improve CSS and mobile version.', gitRepo: 'https://github.com/Rgerotto/projeto-Estagiario', deployLink:'https://internishp-project.netlify.app'},
    {src: './assets/img/projects/Nomadnest_Voyages.png', description: 'Nomadnest: project from a corse from Udemy to be Master in CSS exploring animation, flexbox and transition', gitRepo:'https://github.com/Rgerotto/Natours', deployLink:'https://nomadnest-voyages.netlify.app'},
    {src: './assets/img/projects/trillo.png', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem!', gitRepo: 'https://github.com/Rgerotto/Trillo', deployLink: 'https://trillo-rafael.netlify.app/'},
    {src: './assets/img/projects/trillo.png', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem!', gitRepo: 'https://github.com/Rgerotto/nexter', deployLink: 'https://github.com/Rgerotto/nexter'},
    {src: './assets/img/projects/black-jack.png', description: 'Game', gitRepo: 'https://github.com/Rgerotto/Black_jack', deployLink: 'https://whimsical-gnome-13d6be.netlify.app/'},
    {src: './assets/img/projects/guess_my_number.png', description: 'Game', gitRepo: 'https://github.com/Rgerotto/Guess_my_number', deployLink: 'https://moonlit-axolotl-de3c90.netlify.app'}
];

function createCard() {
    projects.forEach(project => {
        const container = document.getElementsByClassName('container-card')[0];
        const create = document.createElement('div');
        create.className = 'card';
        create.innerHTML = 
            `<img class="proj" src="${project.src}" alt="Project Image">
            <div class="btn">
            <button class="btn-repo"><a href="${project.gitRepo}" target="_blank"><i class="fa-brands fa-github"></i></a></button>
            <button class="btn-repo"><a href="${project.deployLink}" target="_blank"><i class="fa-solid fa-rocket"></i></a></button>
            </div>
            
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
    const popupImage = document.getElementById('popup-image');
    const popupDescription = document.getElementById('popup-description');

    // Set the image source and description
    popupImage.src = imagePath;
    popupDescription.textContent = description;

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