let menuItem = document.getElementById("menu-item");
let menuItem2 = document.getElementById("menu-item2");
let menuItem3 = document.getElementById("menu-item3");


function showItems() {
    document.getElementById("arrow").style.transform = "rotate(-180deg)";
    document.getElementById("sub-menu").style.display = "flex";
}

function showItems2() {
    document.getElementById("arrow2").style.transform = "rotate(-180deg)";
    document.getElementById("sub-menu2").style.display = "flex";
}

function showItems3() {
    document.getElementById("arrow3").style.transform = "rotate(-180deg)";
    document.getElementById("sub-menu3").style.display = "flex";
}

function hideItems() {
    document.getElementById("arrow").style.transform = "rotate(0deg)";
    document.getElementById("sub-menu").style.display = "none";
}

function hideItems2() {
    document.getElementById("arrow2").style.transform = "rotate(0deg)";
    document.getElementById("sub-menu2").style.display = "none";
}

function hideItems3() {
    document.getElementById("arrow3").style.transform = "rotate(0deg)";
    document.getElementById("sub-menu3").style.display = "none";
}

menuItem.addEventListener("mouseover", showItems)
menuItem.addEventListener("mouseleave", hideItems)

menuItem2.addEventListener("mouseover", showItems2)
menuItem2.addEventListener("mouseleave", hideItems2)

menuItem3.addEventListener("mouseover", showItems3)
menuItem3.addEventListener("mouseleave", hideItems3)

// toggle menu

const close_btn = document.querySelector(".btn-close");
const hamburger_btn = document.querySelector(".hambuger");
const menu = document.querySelector(".menu");

function toggleMenu() {
    menu.classList.toggle("hide-menu");
    hamburger_btn.classList.toggle("hide-hamburger");
}

close_btn.addEventListener("click", toggleMenu);
hamburger_btn.addEventListener("click", toggleMenu);

