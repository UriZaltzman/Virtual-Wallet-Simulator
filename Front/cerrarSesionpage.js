document.addEventListener("DOMContentLoaded", () => {
    const btnCerrar = document.getElementById("btnCerrar");

    btnCerrar.addEventListener("click", () => {
        if (confirm("¿Estás seguro que quieres cerrar sesión?")) {
            localStorage.removeItem("authToken");
            localStorage.clear();  
            window.location.href = "login.html";
        }
    });
});
