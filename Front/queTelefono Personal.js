document.addEventListener("DOMContentLoaded", function() {
    const addTelefono = document.getElementById("addTelefono");
    const inputTelefono = document.getElementById("inputTelefono");
    const btnGuardar = document.getElementById("btnGuardar");  
    const lblTelefono = document.getElementById("lblTelefono");

    const tipo = sessionStorage.getItem("tipo")
    console.log(tipo)

    if (lblTelefono && inputTelefono && btnGuardar) {
        lblTelefono.style.display = "none";
        inputTelefono.style.display = "none";
        btnGuardar.style.display = "none";

        addTelefono.addEventListener("click", function() {
            addTelefono.style.display = "none";
            inputTelefono.style.display = "inline";
            btnGuardar.style.display = "inline";
            inputTelefono.value = lblTelefono.textContent;
        });

        btnGuardar.addEventListener("click", function() {
            const telefonoValue = inputTelefono.value;
            if (!telefonoValue) {
                alert("Por favor, ingrese el número de Teléfono");
                return;
            }

            const token = localStorage.getItem('authToken');

            fetch("http://localhost:3000/RegistrarTelefono", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ nroTelefono: telefonoValue, tipoEmpresa: sessionStorage.getItem("tipo1") })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error al ingresar el Nro de Teléfono");
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                alert("Has ingresado el Número de tu Teléfono con éxito");
                return window.location.href = "elegirTelefono Personal.html";
            })
            .catch(error => {
                console.error("Hubo un problema con el registro:", error);
                alert("Hubo un problema con el registro");
            });
        });
    } else {
        console.error("Uno o más elementos no se encontraron en el DOM.");
    }

    const iconMenu = document.getElementById("iconMenu");
    iconMenu.addEventListener("click", () => {
        window.location.href = "homePage.html";
    })

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

});
