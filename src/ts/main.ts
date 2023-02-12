
// HAMBURGER MENU
const menu = document.getElementById("hamburger-menu");
menu?.classList.add("unToggled");

menu?.addEventListener("click", ()=> {
    menu.classList.toggle("toggled");
    menu.classList.toggle("unToggled");
})

