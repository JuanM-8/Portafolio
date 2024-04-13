const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const aboutA = document.querySelectorAll("#aboutA");
const separador = document.getElementById("separador");
const sssvg = document.getElementById("ssvg");

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

window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
        // El usuario ha vuelto al principio de la página, muestra el separador
        
        sssvg.style.stroke = "#ffffff";
    } else {
        // El usuario no está en la parte superior de la página, oculta el separador
        sssvg.style.stroke = "transparent";
    }
});

AOS.init();
