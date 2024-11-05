document.addEventListener("DOMContentLoaded", () => {
    const token = localStorage.getItem('authToken');

    if (!token) {
        // Si no hay token, redirige al usuario al login
        alert("Por favor, inicia sesión para continuar.");
        window.location.href = "login.html";
    } else {
        // Puedes usar este token para hacer una solicitud a una ruta protegida para obtener la información del usuario actual
        // Ejemplo: `fetch("https://db-projecto.vercel.app/infoPersona", { headers: { "Authorization": "Bearer " + token } })`
    }

    console.log(localStorage.getItem('authToken'));
});
