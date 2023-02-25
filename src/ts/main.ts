import axios from "axios";
import { IRepositories } from "./models/Repositories";

// HAMBURGER MENU
const menu = document.getElementById("hamburger-menu");
menu?.classList.add("unToggled");

const menuContainer = document.getElementById("menu-options");
menuContainer?.classList.add("hide");

menu?.addEventListener("click", ()=> {
    menu.classList.toggle("toggled");
    menu.classList.toggle("unToggled");
    menuContainer?.classList.toggle("show");
    menuContainer?.classList.toggle("hide");
})

// CARD ANIMATION

const cardAbout = document.getElementById("card-about");
cardAbout?.addEventListener("click", ()=> {
    cardAbout.classList.toggle("cards-container__about--hide");
    cardAbout.classList.toggle("cards-container__about--show");
})

const cardSkill = document.getElementById("card-skills");
cardSkill?.addEventListener("click", ()=> {
    cardSkill.classList.toggle("cards-container__skills--hide");
    cardSkill.classList.toggle("cards-container__skills--show");
})



// GITHUB REPO 

let repos: IRepositories[] = [];
const getData = async () => {
    return axios
      .get(`https://api.github.com/users/jennifer-mcallister/repos`)
      .then((data) => {
        return data.data;
      })
  }



async function renderRepositories () {
    const container = (document.getElementById("cards-projects") as HTMLDivElement);
    repos = await getData();
    console.log(repos);

   
    for(let i = 0; i < repos.length; i++) {

        // card
        let card = document.createElement("div");
        card.classList.add("card-project");
        card.classList.add("cards-container__project--hide");
        card.setAttribute("id", repos[i].name);
        container?.appendChild(card);

        // front card
        let cardFront = document.createElement("div");
        cardFront.classList.add("card-front");
        card.appendChild(cardFront)

        // front frame
        let cardFrontFrame = document.createElement("div");
        cardFrontFrame.classList.add("card-front__frame");
        cardFront.appendChild(cardFrontFrame);

        // front text container 
        let frontTextContainer = document.createElement("div");
        frontTextContainer.classList.add("card-front__text-container");
        cardFrontFrame.appendChild(frontTextContainer);

        // front description
        let frontDescription = document.createElement("p");
        let frontDescriptionText =  repos[i].description;
        frontDescription.innerText = frontDescriptionText;
        frontTextContainer.appendChild(frontDescription);

        // front github link
        let repo = document.createElement("a");
        let repoText = `https://github.com/jennifer-mcallister/${repos[i].name}`;
        repo.innerText = repoText;
        frontTextContainer.appendChild(repo);

        // front title container
        let frontTitleContainer = document.createElement("div");
        frontTitleContainer.classList.add("card-front__title-container");
        cardFrontFrame.appendChild(frontTitleContainer);

        // front title
        let frontTitle = document.createElement("h4");
        let cardFrontTitle = repos[i].name;
        cardFrontTitle = cardFrontTitle.replace(/-/g, " ");
        cardFrontTitle = cardFrontTitle.replace(/_/g, " ");
        frontTitle.innerText = `.  ${cardFrontTitle}  .`;
        frontTitle.classList.add("project-title");
        frontTitleContainer.appendChild(frontTitle);

        // back card
        let cardBack = document.createElement("div");
        cardBack.classList.add("card-back");
        card.appendChild(cardBack);

        // back frame 
        let cardFrame = document.createElement("div");
        cardFrame.classList.add("card-back__frame");
        cardBack.appendChild(cardFrame);

        // img container back card
        let cardImageContainer = document.createElement("div");
        cardImageContainer.classList.add("card-back__img-container");
        cardFrame.appendChild(cardImageContainer);

        // img back  card
        let cardImage = document.createElement("img");
        cardImage.src = "/bumblebee.ff162559.png";
        cardImage.alt = "moth";
        if (i % 2 === 1) {
            cardImage.classList.add("image-flipped");
        }
        cardImageContainer.appendChild(cardImage);

        // back title container 
        let cardTitleContainer = document.createElement("div");
        cardTitleContainer.classList.add("card-back__text-container");
        cardFrame.appendChild(cardTitleContainer);

        // title card
        let cardTitle = document.createElement("h4");
        let title = repos[i].name;
        title = title.replace(/-/g, " ");
        title = title.replace(/_/g, " ");
        cardTitle.innerText = `.  ${title}  .`;
        cardTitle.classList.add("project-title");
        cardTitleContainer.appendChild(cardTitle);

        const quantity = 15;
        for(let i = 0; i < quantity; i++) {
            const star = document.createElement("div");
            star.classList.add(`star`);
            star.classList.add(`star__${i}`);
            cardBack.appendChild(star);
         }

        // card flipp event
        let cardEvent = document.getElementById(repos[i].name) as HTMLDivElement;
        cardEvent?.addEventListener("click", () => {
            card.classList.toggle("cards-container__project--hide");
            card.classList.toggle("cards-container__project--show");   
        });
    }
}

// stars animation 


const starContainer = document.getElementById("stars");
const cardBackAddStars = (document.querySelector(".card-back") as HTMLElement)


window.addEventListener('scroll', () => {
    document.body.classList.add("--scroll");
    
    console.log(window.scrollY)
    console.log("scrolling")
});

renderRepositories();

