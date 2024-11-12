
document.addEventListener("DOMContentLoaded", () => {
    const addSube = document.getElementById("addSube");
    const inputSube = document.getElementById("inputSube");
    const btnGuardar = document.getElementById("btnGuardar");
    const lblSube = document.getElementById("lblSube");

    lblSube.style.display = "none";
    inputSube.style.display = "none";
    btnGuardar.style.display = "none";

    addSube.addEventListener("click", function() {
        addSube.style.display = "none";
        inputSube.style.display = "inline";
        btnGuardar.style.display = "inline";
        inputSube.value = lblSube.textContent;
    });

    btnGuardar.addEventListener("click", function() {
        const subeValue = parseInt(inputSube.value, 10);
        if (!subeValue) {
            alert("Por favor, ingrese el número de Sube");
            return;
        }

    const token = localStorage.getItem('authToken');
    if (!token) {
        alert("No se encontró el token de autenticación. Inicie sesión nuevamente.");
        return;
    }

    const subeInfo = {
        nroSube: subeValue,
        tipo: sessionStorage.getItem("TipoTarjeta")
    };

    //fetch("https://db-projecto.vercel.app/ingresarSube", {
    fetch ("http://localhost:3000/ingresarSube", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(subeInfo)
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(errorData => {
                throw new Error(errorData.error || "Error al ingresar la Sube");
            });
        }
        return response.json();
    })
    .then(data => {
        alert("Has ingresado el número de tu Sube con éxito");
        return window.location.href = "elegirTarjeta.html";
    })
    .catch(error => {
        console.error("Hubo un problema con el registro:", error.message);
        alert(`Hubo un problema con el registro: ${error.message}`);
    });
    });

    const iconMenu = document.getElementById("iconMenu");
    if (iconMenu) {
        iconMenu.addEventListener("click", () => {
            window.location.href = "homePage.html";
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
})