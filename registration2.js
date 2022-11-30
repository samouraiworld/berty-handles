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

// trigger
const trig = document.getElementById("profile-popup");
const closetrig = document.getElementById("clickable");
const mobilepopup = document.getElementById("mobile-popup");
const img = document.getElementById("popup-img");

if (trig) {
    trig.addEventListener("click", () => {
        mobilepopup.classList.add("fullscreen");
        closetrig.classList.add("enabled");
        img.classList.add("enabled");
    })
}

if (closetrig) {
    closetrig.addEventListener("click", () => {
        img.classList.remove("enabled");
        closetrig.classList.remove("enabled");
        mobilepopup.classList.remove("fullscreen");
    })
}