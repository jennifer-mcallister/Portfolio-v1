
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
    cardSkill.classList.toggle("cards-container__about--hide");
    cardSkill.classList.toggle("cards-container__about--show");
})

const cardsProject = document.getElementsByClassName(
    'card-project') as HTMLCollectionOf<HTMLDivElement>;
for (let i = 0; i < cardsProject.length; i++) {
    cardsProject[i].addEventListener("click", () => {
        cardsProject[i].classList.toggle("cards-container__about--hide");
        cardsProject[i].classList.toggle("cards-container__about--show");
    })
}
// for (let i = 0; i < cardsProject.length; i++) {
//     cardsProject[i]?.addEventListener("click", ()=> {
//         cardsProject[i].classList.toggle("cards-container__about--hide");
//         cardProject.classList.toggle("cards-container__about--show");
//     })

