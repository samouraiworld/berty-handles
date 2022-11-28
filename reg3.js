const bar = document.getElementById("opn");
const close = document.getElementById("closepop");
const pop = document.getElementById("popup");

if (bar) {
    bar.addEventListener("click", () => {
        console.log("ck");
        pop.classList.add("active");
    })
}

if (close) {
    close.addEventListener("click", () => {
        pop.classList.remove("active");
    })
}