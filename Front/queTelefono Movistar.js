document.addEventListener("DOMContentLoaded", function() {
    const addTelefono = document.getElementById("addTelefono");
    const inputTelefono = document.getElementById("inputTelefono");
    const btnGuardar = document.getElementById("btnGuardar");  
    const lblTelefono = document.getElementById("lblTelefono");

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

            fetch("https://db-projecto.vercel.app/ingresarTelefono", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ nroTelefono: telefonoValue })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error al ingresar el Nro de Teléfono");
                }
                return response.json();
            })
            .then(data => {
                alert("Has ingresado el Número de tu Teléfono con éxito");
                inputTelefono.value = "";
                inputTelefono.style.display = "none";
                btnGuardar.style.display = "none";
                addTelefono.style.display = "inline";
            })
            .catch(error => {
                console.error("Hubo un problema con el registro:", error);
                alert("Hubo un problema con el registro");
            });
        });
    } else {
        console.error("Uno o más elementos no se encontraron en el DOM.");
    }
});
