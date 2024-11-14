
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

document.addEventListener("DOMContentLoaded", () => {
    const montoSube = 1000; // Ajusta este valor según el monto de la SUBE
    const token = localStorage.getItem("authToken"); // Obtenemos el token del localStorage
    const btnPagar = document.getElementById("btnPagar");
    btnPagar.addEventListener("click", () => {
        fetch("https://db-projecto.vercel.app/pagarSube", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({ montoSube }) // Enviamos el monto de la SUBE en el cuerpo de la solicitud
            })
        .then(response => {
            if (!response.ok) {
            throw new Error("Error al realizar el pago de la SUBE");
            }
            return response.json();
        })
        .then(data => {
            console.log("Respuesta del servidor:", data);
            if (data.success) {
                alert("Pago de SUBE realizado con éxito");
                return window.location.href = "../homePage.html";

            } else {
                alert("Error: " + data.message);
            }
        })
        .catch(error => {
            console.error("Hubo un problema al realizar el pago de la SUBE:", error.message);
            alert(`Error al realizar el pago de la SUBE: ${error.message}`);
        });
    })
    
})