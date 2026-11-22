const API_URL=http://localhost:8000
//Función Modales
function abrirModal(modalId) {
    document.getElementById(modalId).classList.remove("hidden");
}
function cerrarModal(modalId) {
    document.getElementById(modalId).classList.add("hidden");
}
