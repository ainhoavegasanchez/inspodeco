const subscribeBtn = document.getElementById('subscribeBtn');
const subscriptionForm = document.querySelector('.subscription-form');
const categorias = document.getElementById("categorias");
const lista = document.getElementById("lista");
const lista1024 = document.getElementsByClassName("lista1024")[0];
const cerrar = document.getElementById("cerrar");
const corazones = document.querySelectorAll(".corazon img:first-child");
const llenos = document.querySelectorAll(".corazon img:nth-child(2)");
const buscador = document.getElementById("buscador");
const menyAvPaaCheckbox = document.getElementById("menyAvPaa");

document.addEventListener("DOMContentLoaded", function () {
    lista1024.style.display = "none"
});

subscribeBtn.addEventListener('click', () => {
    subscriptionForm.style.display = "flex";
    subscriptionForm.style.left = "0";
    buscador.style.display = "none";
});


cerrar.addEventListener('click', () => {
    if (cerrar.checked) {
        subscribeBtn.style.display = "flex";
        cerrar.checked = "false";
        subscriptionForm.style.left = '-800px';
        buscador.style.display = "flex";
    }
});


categorias.addEventListener("click", () => {
    if (window.innerWidth < 600) {
        if (lista.style.display === "grid") {
            lista1024.style.display = "none";
            lista.style.display = "none";
            categorias.style.backgroundColor = "";
        } else {
            lista1024.style.display = "none";
            lista.style.display = "grid";
            categorias.style.backgroundColor = "transparent";
        }
    } else {
    
        if (lista1024.style.display === "flex") {
            lista.style.display = "none";
            lista1024.style.display = "none";
            categorias.style.backgroundColor = "";
        } else {
            lista.style.display = "none";
            lista1024.style.display = "flex";
            categorias.style.backgroundColor = "transparent";
        }
    }
});


window.addEventListener("resize", () => {
    if (window.innerWidth < 600) {
        lista1024.style.display = "none";
        if (menyAvPaaCheckbox.checked) {
            menyAvPaaCheckbox.checked = false;
        }
    } else {
        lista.style.display = "none";

    }
});

// Selecciona todos los elementos con la clase "corazon"

// Agrega eventos a cada corazón
corazones.forEach((corazon, index) => {
    const lleno = llenos[index];

    corazon.addEventListener("click", () => {
        lleno.style.display = "flex";
        lleno.style.cursor = "pointer";
        corazon.style.display = "none";
    });

    // Agrega evento para ocultar el corazón
    lleno.addEventListener("click", () => {
        lleno.style.display = "none";
        corazon.style.display = "flex";
    });
});



menyAvPaaCheckbox.addEventListener("click", function () {
    if (menyAvPaaCheckbox.checked) {
        buscador.style.display = "none";
    } else {
        buscador.style.display = "flex";
    }
});