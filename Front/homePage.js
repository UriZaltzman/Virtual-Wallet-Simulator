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
        .then(response => {
            if (response.status === 401) { 
                alert("Tu sesión ha expirado. Por favor, inicia sesión de nuevo.");
                localStorage.removeItem('authToken');
                window.location.href = "login.html";
                throw new Error("Sesión expirada");
            }
            return response.json();
        })
        .then(data => {
            console.log("Datos recibidos:", data);

            const lblSaldo = document.getElementById("lblSaldo");

            if (data.length > 0 && data[0].saldo !== undefined) {
                const saldo = data[0].saldo;
                lblSaldo.textContent = `$${saldo}`;
                
                if (saldo < 100000) {
                    lblSaldo.classList.add("low-balance");
                    lblSaldo.classList.remove("high-balance");
                    console.log("low-balance");
                } else {
                    lblSaldo.classList.add("high-balance");
                    lblSaldo.classList.remove("low-balance");
                    console.log("high-balance");
                }

                localStorage.setItem("saldoCuenta", saldo);
                
            } else {
                lblSaldo.textContent = "Saldo no disponible";
                lblSaldo.classList.add("noSaldo");
                console.error("Formato de datos inesperado:", data);
            }
        })
        .catch(error => {
            if (error.message !== "Sesión expirada") {
                console.error("Error:", error);
                alert("Hubo un problema al obtener el saldo.");
            }
        });
    }
});
