document.addEventListener("DOMContentLoaded", () => {
    const telefonoList = document.getElementById("telefonoList");
    const continuarBtn = document.getElementById("continuar");
    const token = localStorage.getItem("authToken");

    continuarBtn.disabled = true;

    // Fetch para obtener la lista de teléfonos
    fetch("https://db-projecto.vercel.app/verTelefonos", {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Error al obtener los números de teléfono");
        }
        return response.json();
    })
    .then(data => {
        console.log("Respuesta del servidor:", data);

        // Verificar que data es un array y crear botones para cada teléfono
        if (Array.isArray(data)) {
            data.forEach(({ nroCelular, tipo }) => {
                const telefonoBtn = document.createElement("button");
                telefonoBtn.textContent = `Teléfono: ${nroCelular}`;
                telefonoBtn.classList.add("telefono-btn");

                telefonoBtn.addEventListener("click", () => {
                    // Guardar el teléfono seleccionado en localStorage
                    localStorage.setItem("telefonoSeleccionado", nroCelular);

                    // Marcar el botón seleccionado y habilitar el botón de continuar
                    document.querySelectorAll(".telefono-btn").forEach(btn => btn.classList.remove("selected"));
                    telefonoBtn.classList.add("selected");

                    continuarBtn.disabled = false;
                    alert(`Has seleccionado el teléfono: ${nroCelular}`);
                });

                telefonoList.appendChild(telefonoBtn);
            });
        } else {
            console.error("Formato de datos inesperado:", data);
            alert("Error: formato de datos inesperado.");
        }
    })
    .catch(error => {
        console.error("Hubo un problema al cargar los teléfonos:", error.message);
        alert(`Hubo un problema al cargar los números de teléfono: ${error.message}`);
    });

    continuarBtn.addEventListener("click", () => {
        window.location.href = "personalPrecios.html";
    });

    // Navegación en íconos adicionales
    const iconMenu = document.getElementById("iconMenu");
    if (iconMenu) {
        iconMenu.addEventListener("click", () => {
            window.location.href = "homePage.html";
        });
    }

    const bellIcon = document.getElementById("bellIcon");
    if (bellIcon) {
        bellIcon.addEventListener("click", () => {
            alert("Próximamente...");
        });
    }

    const helpIcon = document.getElementById("helpIcon");
    if (helpIcon) {
        helpIcon.addEventListener("click", () => {
            alert("Próximamente...");
        });
    }
});
