// Arreglo con ocho estudiantes.
let estudiantes = [
    "Ana Gómez",
    "Carlos Pérez",
    "Laura Martínez",
    "Juan Rodríguez",
    "Sofía Torres",
    "Andrés López",
    "Valentina Ruiz",
    "Camilo Herrera"
];

// Referencias a los elementos de la página.
let lista = document.getElementById("lista");
let formulario = document.getElementById("formulario");
let inputBuscar = document.getElementById("buscar");
let resultado = document.getElementById("resultado");

// Mostrar todos los estudiantes con un ciclo for.
for (let i = 0; i < estudiantes.length; i++) {
    lista.innerHTML += `<li>${estudiantes[i]}</li>`;
}

// Evento al enviar el formulario de búsqueda.
formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    // Pasar a minúsculas para no distinguir mayúsculas de minúsculas.
    let texto = inputBuscar.value.trim().toLowerCase();

    if (texto === "") {
        alert("Escriba un nombre para buscar");
    } else {
        // find() devuelve el primer estudiante que cumpla la condición.
        let encontrado = estudiantes.find(function(estudiante) {
            return estudiante.toLowerCase().includes(texto);
        });

        if (encontrado) {
            resultado.textContent = `El estudiante "${encontrado}" SÍ está registrado.`;
        } else {
            resultado.textContent = `El estudiante "${inputBuscar.value.trim()}" NO se encuentra registrado.`;
        }
    }
});
