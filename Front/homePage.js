document.addEventListener("DOMContentLoaded", () => {
    const token = localStorage.getItem('authToken');

    console.log(token);

    if (!token) {
        alert("Por favor, inicia sesión para continuar.");
        window.location.href = "login.html";
    }

    fetch("https://db-projecto.vercel.app/verSaldo", {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${token}`,  // Envía el token en el formato correcto
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log("Datos recibidos:", data);

        const lblSaldo = document.getElementById("lblSaldo");
        
        // Accede al primer elemento del array y muestra el saldo
        if (data.length > 0 && data[0].saldo !== undefined) {
            lblSaldo.textContent = `$${data[0].saldo}`;
        } else {
            lblSaldo.textContent = "Saldo no disponible";
            console.error("Formato de datos inesperado:", data);
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Hubo un problema al obtener el saldo.");
    });
});
