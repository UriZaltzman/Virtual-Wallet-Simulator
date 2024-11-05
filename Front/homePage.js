document.addEventListener("DOMContentLoaded", () => {
    const token = localStorage.getItem('authToken');

    if (!token) {
        // Si no hay token, redirige al usuario al login
        alert("Por favor, inicia sesión para continuar.");
        window.location.href = "login.html";
    }
    console.log(localStorage.getItem('authToken'));
});
