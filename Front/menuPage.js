document.addEventListener("DOMContentLoaded", function() {
    const btnLogOut = document.getElementById("btnLogOut")
    const token = localStorage.getItem('authToken');

    console.log(token);

    if (!token) {
            alert("Por favor, inicia sesión para continuar.");
            window.location.href = "login.html";
        };

    if(btnLogOut){
        btnLogOut.addEventListener("click", () => {
            
            if (confirm("¿Estás seguro que quieres cerrar sesión?")) {
                localStorage.removeItem("authToken");
                localStorage.clear();  
                window.location.href = "login.html";
            }
        })
    }
});
