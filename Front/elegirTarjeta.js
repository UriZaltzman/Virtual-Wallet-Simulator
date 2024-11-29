document.addEventListener("DOMContentLoaded", () => {
    const tarjetasList = document.getElementById("tarjetasList");
    const continuarBtn = document.getElementById("continuar");
    const token = localStorage.getItem("authToken"); 

    fetch("https://db-projecto.vercel.app/servicios/traerSube", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Error al cargar tu Sube");
        }
        return response.json();
    })
    .then(data => {
        console.log("Respuesta del servidor:", data);

        if (Array.isArray(data)) {
            data.forEach(tarjeta => {
                const tarjetaBtn = document.createElement("button");
                tarjetaBtn.textContent = `Nro de Sube: ${tarjeta.numeroSube}`;
                tarjetaBtn.classList.add("tarjeta-btn");
                tarjetaBtn.addEventListener("click", () => {
                    selectedTarjeta = tarjeta.numeroSube;
                
                    document.querySelectorAll(".tarjeta-btn").forEach(btn => btn.classList.remove("selected"));
                    tarjetaBtn.classList.add("selected");
                
                    continuarBtn.disabled = false;
                
                    sessionStorage.setItem("nroSube", selectedTarjeta);
                });
                
                
                tarjetasList.appendChild(tarjetaBtn);
            });

            sessionStorage.setItem("nroSube", data);
        } else {
            console.error("Formato de datos inesperado:", data);
            alert("Error: formato de datos inesperado.");
        }
    })
    .catch(error => {
        console.error("Hubo un problema con el registro:", error.message);
        alert(`Hubo un problema con el registro: ${error.message}`);
    });

    continuarBtn.addEventListener("click", function() {
        window.location.href = "cargarSube.html";
    });

    const iconMenu = document.getElementById("iconMenu");
    if (iconMenu) {
        iconMenu.addEventListener("click", () => {
            window.location.href = "homePage.html";
        });
    }

    const bellIcon = document.getElementById("bellIcon");
    if (bellIcon) {
        bellIcon.addEventListener("click", () => {
            alert("Proximamente...");
        });
    }

    const helpIcon = document.getElementById("helpIcon");
    if (helpIcon) {
        helpIcon.addEventListener("click", () => {
            alert("Proximamente...");
        });
    }
});
