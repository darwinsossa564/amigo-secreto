// Lista de nombres ingresados
let nombres = [];

// Función para añadir un nombre
document.getElementById("adicionarBtn").addEventListener("click", () => {
const nombreInput = document.getElementById("nombreInput");
const nombre = nombreInput.value.trim(); // Obtener el valor y eliminar espacios

// Validación para evitar ingresar nombres vacíos
if (nombre === "") {
    alert("Por favor, ingrese un nombre válido.");
    return;
}

// Añadir el nombre a la lista
nombres.push(nombre);
nombreInput.value = ""; // Limpiar el campo de texto después de añadir

  // Actualizar la lista visible en la página
actualizarLista();
});

// Función para actualizar la lista de nombres en la interfaz
function actualizarLista() {
const listaNombres = document.getElementById("listaNombres");
listaNombres.innerHTML = "";  // Limpiar la lista antes de mostrarla

  // Mostrar todos los nombres en la lista
nombres.forEach((nombre) => {
    const li = document.createElement("li");
    li.textContent = nombre;
    listaNombres.appendChild(li);
});
}

// Función para realizar el sorteo del amigo secreto
document.getElementById("sortearBtn").addEventListener("click", () => {
  // Comprobar si hay suficientes nombres para hacer el sorteo
    if (nombres.length < 2) {
        alert("Necesitas al menos dos personas para hacer el sorteo.");
        return;
    }

  // Seleccionar un nombre aleatorio
const amigoSecreto = nombres[Math.floor(Math.random() * nombres.length)];

  // Mostrar el resultado en la página
const resultado = document.getElementById("resultado");
resultado.textContent = "El amigo secreto es: " + amigoSecreto;
});
