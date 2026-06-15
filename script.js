"use strict";

//Variables
const navOpenBtn = document.querySelector('.menu-open');
const navCloseBtn = document.querySelector('.menu-close');
const sideBarMenu = document.querySelector('.sidebar');
const bodyEle = document.querySelector('body');
const showBtns = document.querySelectorAll('.show-btn');
const heroBtn = document.querySelector('.hero-btn');
const showEpisodes = document.querySelector('.show-episodes');
const sidebarMenuItems = document.querySelectorAll('.side-nav-menu-item');

function lockBody() {
    bodyEle.style.overflow = 'hidden';
}

function unlockBody() {
    bodyEle.style.overflow = '';
}

//Button functions
//Handles clicks for sidebar menu items
sidebarMenuItems.forEach(sideBarMenuItem => {
    sideBarMenuItem.addEventListener("click", () => {
        sideBarMenu.classList.add('sidebar-hidden');
        navOpenBtn.classList.remove('remove-item');
        navCloseBtn.classList.add('remove-item');
        unlockBody();
    });
});

//Handles click when open button is clicked on phone and ipad (portrait)
navOpenBtn.addEventListener("click", (event) => {
    event.preventDefault();
    sideBarMenu.classList.remove('sidebar-hidden');
    navOpenBtn.classList.add('remove-item');
    navCloseBtn.classList.remove('remove-item');
    lockBody();
});

//Handles clicks when close button is clicked on phone and ipad (portrait)
navCloseBtn.addEventListener("click", (event) => {
    event.preventDefault();
    sideBarMenu.classList.add('sidebar-hidden');
    navOpenBtn.classList.remove('remove-item');
    navCloseBtn.classList.add('remove-item');
    unlockBody();
});

//Handles clicks when buttons on show buttons are clicked
showBtns.forEach(showBtn => {
    showBtn.addEventListener("click", () => {
        showEpisodes.style.display = "flex";
        bodyEle.style.overflow = "hidden";
    });
});

//Handles click when 'watch now' button is clicked on hero section
heroBtn.addEventListener("click", () => {
    showEpisodes.style.display = 'flex';
    bodyEle.style.overflow = "hidden";
});
