
console.log("Hola, este es un saludo desde el script");

const btnTema = document.getElementById("btn-tema");
const body = document.body;

if (btnTema) {
    btnTema.addEventListener("change", () => {
        body.classList.toggle("oscuro", btnTema.checked);
    });
}

const numero = document.getElementById("numero");
const btnContador = document.getElementById("btn-contador");
let contador = 0;

btnContador.addEventListener("click", () => {
    contador++;
    numero.textContent = contador;
});
