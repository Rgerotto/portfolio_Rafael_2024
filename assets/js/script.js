const skills = [
    { src: './assets/img/skills/icons8-css.svg', description: 'CSS: Styling web pages with CSS for responsive design and user interfaces.' },
    { src: './assets/img/skills/icons8-html.svg', description: 'HTML: Markup language for creating web pages and web applications.' },
    { src: './assets/img/skills/icons8-javascript.svg', description: 'JavaScript: Programming language for creating interactive web applications.' },
    { src: './assets/img/skills/icons8-react-js.svg', description: 'React: Library for building user interfaces with reusable components.' }
];

const projects = [
    {src: './assets/img/projects/botiga_cafe.png', description: 'Coffee shop: make a page for a coffee shop with HTML, CSS'},
    {src: './assets/img/projects/fortfolio.png', description: 'Fortfolio: is a web page for a webDev deploy you own projects, based on HBS, CSS, JavaScript for frontend, in the backend using Nodejs, Express, MongoDB as a database.'},
    {src: './assets/img/projects/projectEstagiario.png', description: 'WebPage: project to improve CSS and mobile version.', gitRepo: 'https://github.com/Rgerotto/projeto-Estagiario', deployLink:''},
    {src: './assets/img/projects/nomadnest_voyages.png', description: 'Nomadnest: project from a corse from Udemy to be Master in CSS exploring animation, flexbox and transition'},
    {src: './assets/img/projects/trillo.png', description: 'Nomadnest: project from a corse from Udemy to be Master in CSS exploring animation, flexbox and transition', gitRepo: 'https://github.com/Rgerotto/Trillo', deployLink: 'https://inquisitive-cocada-3fd14d.netlify.app/'}
];

function createCard() {
    projects.forEach(project => {
        const container = document.getElementsByClassName('container-card')[0];
        const create = document.createElement('div');
        create.className = 'card';
        create.innerHTML = 
            `<img class="proj" src="${project.src}" alt="Project Image">
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
            showPopup(skill.src, skill.description);
        });
    });
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