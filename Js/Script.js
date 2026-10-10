/* ========================================
   GURPREET WEBSITE
   ======================================== */


/* ---------- MOBILE MENU ---------- */

function toggleMenu() {

    const menu = document.querySelector(".nav-links");

    menu.classList.toggle("active");

}


/* ---------- PAGE LOAD ANIMATION ---------- */

document.addEventListener("DOMContentLoaded", function () {

    document.body.classList.add("page-loaded");

});