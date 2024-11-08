const telefonoList = document.getElementById("telefonoList");
const continuarBtn = document.getElementById("continuar");

continuarBtn.disabled = true; 

const token = localStorage.getItem("authToken");

fetch("https://db-projecto.vercel.app/obtenerTelefonos", {
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
    const telefonos = data.telefonos || [];

    telefonos.forEach((telefono, index) => {
        const telefonoBtn = document.createElement("button");
        telefonoBtn.textContent = "Teléfono: " + telefono;
        
        telefonoBtn.addEventListener("click", function() {
            seleccionarTelefono(telefono);
        });
        
       
        telefonoList.appendChild(telefonoBtn);
    });
})
.catch(error => {
    console.error("Hubo un problema al cargar los teléfonos:", error);
    alert("Hubo un problema al cargar los números de teléfono.");
});

function seleccionarTelefono(telefono) {
    localStorage.setItem("telefonoSeleccionado", telefono);
    alert("Has seleccionado el teléfono: " + telefono);
    continuarBtn.disabled = false; 
}

continuarBtn.addEventListener("click", function() {
    window.location.href = "personalPrecios.html";
});
