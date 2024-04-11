const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const aboutA = document.querySelectorAll("#aboutA");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})
aboutA.forEach(element => {
    element.addEventListener("click", () => {
        nav.classList.remove("visible");
    })
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})