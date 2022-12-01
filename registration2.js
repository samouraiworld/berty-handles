// Navbar
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active");
    })
}

if (close) {
    close.addEventListener("click", () => {
        nav.classList.remove("active");
    })
}

// Mobile-Availability-popup
const trig = document.getElementById("profile-popup");
const closetrig = document.getElementById("clickable");
const mobilepopup = document.getElementById("mobile-popup");
const popimg = document.getElementById("popupimg");

if (trig) {
    trig.addEventListener("click", () => {
        popimg.classList.add("enabled");
        mobilepopup.classList.add("fullscreen");
        closetrig.classList.add("enabled");

        console.log(popimg.classList);
    })
}

if (closetrig) {
    closetrig.addEventListener("click", () => {
        popimg.classList.remove("enabled");
        closetrig.classList.remove("enabled");
        mobilepopup.classList.remove("fullscreen");
    })
}

// card pop-up
const opencard = document.getElementById("open-card");
const closecard = document.getElementById("close-card");
const cardpopup = document.getElementById("card-popup");

if (opencard) {
    opencard.addEventListener("click", () => {
        cardpopup.classList.add("enabled-flex");
    })
}

if (closecard) {
    closecard.addEventListener("click", () => {
        cardpopup.classList.remove("enabled-flex");
    })
}
