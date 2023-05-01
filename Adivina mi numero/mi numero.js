console.log(miNumero)

// Obtenemos los elementos del DOM
const messageEl = document.getElementById("message");
const numberEl = document.getElementById("number");
const buttonEl = document.getElementById("button");

// Función para mostrar el mensaje
function showMessage(message) {
  messageEl.innerHTML = message;
}

// Función para actualizar el número
function updateNumber() {
  numberEl.innerHTML = guess;
}

// Función para reiniciar el juego
function restart() {
  min = 1;
  max = 100;
  guess = Math.floor((min + max) / 2);
  showMessage("");
  updateNumber();
}

// Mostramos el primer número
updateNumber();

// Agregamos el evento click al botón
buttonEl.addEventListener("click", function () {
  // Preguntamos si el número es el adivinado
  const response = confirm(`¿Es tu número el ${guess}?`);

  if (response) {
    // Si es el número, mostramos el mensaje de victoria
    showMessage(`Tu número es el ${guess}. ¡Excelente decisión!`);
  } else {
    // Si no es el número, ajustamos los límites y seguimos jugando
    const direction = confirm(
      "¿Tu número es mayor que el mostrado en pantalla?"
    );

    if (direction) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }

    guess = Math.floor((min + max) / 2);
    updateNumber();
  }
});