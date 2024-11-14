const btnPagar = document.getElementById("btnPagar");

btnPagar.addEventListener("click", function() {
    const montoTelefono = 3500;  // Ajusta el monto según sea necesario
    const telefonoDestino = 21;  // Ajusta el ID del teléfono destino según el que se deba pagar
    const token = localStorage.getItem("authToken"); 

    fetch("http://localhost:3000/pagarTelefono", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ montoTelefono, telefonoDestino }) // Enviamos tanto el monto como el teléfono destino
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Error al realizar el pago del teléfono");
        }
        return response.json();
    })
    .then(data => {
        console.log("Respuesta del servidor:", data);
        if (data.success) {
            alert("Pago de teléfono realizado con éxito");
            window.location.href = "./homePage.html";  // Redirigir a la página principal
        } else {
            alert("Error: " + data.message);  // Mostrar el error si no fue exitoso
        }
    })
    .catch(error => {
        console.error("Hubo un problema al realizar el pago del teléfono:", error.message);
        alert(`Error al realizar el pago del teléfono: ${error.message}`);
    });
});

const iconMenu = document.getElementById("iconMenu");
if (iconMenu) {
    iconMenu.addEventListener("click", () => {
        window.location.href = "homePage.html";  // Redirigir al menú principal
    });
}

const bellIcon = document.getElementById("bellIcon");
bellIcon.addEventListener("click", () => {
    alert("Proximamente...");
    return;
});

const helpIcon = document.getElementById("helpIcon");
helpIcon.addEventListener("click", () => {
    alert("Proximamente...");
    return;
});
