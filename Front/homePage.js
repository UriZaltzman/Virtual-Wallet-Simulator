document.addEventListener("DOMContentLoaded", () => {
    const iconMenu = document.getElementById("iconMenu");
    if (iconMenu) {
        iconMenu.addEventListener("click", () => {
            window.location.href = "menuPage.html";
        });
    }

    const bellIcon = document.getElementById("bellIcon");
        bellIcon.addEventListener("click", () => {
            alert("Proximamente...");
            return;
    })


    const helpIcon = document.getElementById("helpIcon");
        helpIcon.addEventListener("click", () => {
            alert("Proximamente...");
            return;
    })

    const token = localStorage.getItem('authToken');

    if (!token) {
        alert("Por favor, inicia sesión para continuar.");
        window.location.href = "login.html";
        return;
    }

    // Solicitar saldo solo si hay un token válido
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

            // Muestra el botón de recarga si el saldo es 0 o menor
            if (saldo <= 0) {
                document.getElementById("divLbl").innerHTML = "<button id='btnRecargar' class='btnRecargar'>Recargar Saldo <i class='bx bx-rotate-right recargar'></i></button>";
                const btnRecargar = document.getElementById("btnRecargar");

                if (btnRecargar) {
                    btnRecargar.addEventListener("click", () => {
                        console.log("Botón de recargar presionado");
                        fetch("https://db-projecto.vercel.app/recargarSaldo", {
                            method: "PUT",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": `Bearer ${token}`
                            }
                        })
                        .then(response => response.json())
                        .then(data => {
                            console.log("Saldo restablecido:", data.saldo);
                            location.reload();
                        })
                        .catch(error => {
                            console.error("Error en la solicitud:", error);
                        });
                    });
                }
            }

            localStorage.setItem("saldoCuenta", saldo);
            console.log("Saldo guardado en localStorage:", localStorage.getItem("saldoCuenta"));
            

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
});
