// trigger
const btn = document.getElementById("continue-btn");

//  Register 1.1
const reg1a = document.getElementById("reg1a");
const reg1b = document.getElementById("reg1b");
const reg1c = document.getElementById("reg1c");

// Register 1.2
const reg2a = document.getElementById("reg2a");
const reg2b = document.getElementById("reg2b");
const reg2c = document.getElementById("reg2c");

// Registration steps
const li1 = document.getElementById("li1");
const li2 = document.getElementById("li2");

if (btn) {
    btn.addEventListener("click", () => {
        reg2a.classList.remove("disabled");
        reg2b.classList.remove("disabled");
        reg2c.classList.remove("disabled");
        reg1a.classList.add("disabled");
        reg1b.classList.add("disabled");
        reg1c.classList.add("disabled");
        li1.classList.remove("current");
        li1.classList.add("valid");
        li2.classList.add("current");
    })
}

// if (close) {
//     close.addEventListener("click", () => {
//         nav.classList.remove("active");
//     })
// }