/*--------------- MENSAJE DE BIENVENIDA ---------------*/

console.log("¡Bienvenidxs a mi primera página web!");

/*--------------- CONTADOR INTERACTIVO ---------------*/

// Obtenemos los elementos del HTML
const numero = document.getElementById("numero");
const btnContador = document.getElementById("btn-contador");

// Inicializamos el contador en cero
let contador = 0;

// Detectamos cuando el usuario hace clic
if (numero && btnContador) {
    btnContador.addEventListener("click", () => {

        // Incrementamos el contador
        contador++;

        // Actualizamos el número en la página
        numero.textContent = contador;

    });
}
