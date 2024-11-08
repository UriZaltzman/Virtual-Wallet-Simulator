document.addEventListener("DOMContentLoaded", () => {
    const token = localStorage.getItem('authToken');

    console.log(token);

    if (!token) {
        alert("Por favor, inicia sesión para continuar.");
        window.location.href = "login.html";
    } else {
        fetch("https://db-projecto.vercel.app/verSaldo", {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log("Datos recibidos:", data);

            const lblSaldo = document.getElementById("lblSaldo");

            if (data.length > 0 && data[0].saldo !== undefined) {
                const saldo = data[0].saldo;
                lblSaldo.textContent = `$${saldo}`;
                
                if (saldo < 1000) {
                    lblSaldo.classList.add("low-balance");
                    lblSaldo.classList.remove("high-balance");
                    console.log("low-balance");
                } else {
                    lblSaldo.classList.add("high-balance");
                    lblSaldo.classList.remove("low-balance");
                    console.log("high-balance");
                }
            } else {
                lblSaldo.textContent = "Saldo no disponible";
                console.error("Formato de datos inesperado:", data);
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Hubo un problema al obtener el saldo.");
        });
    }
});
