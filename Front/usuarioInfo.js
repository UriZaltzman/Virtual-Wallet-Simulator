document.addEventListener("DOMContentLoaded", function() {
    const token = localStorage.getItem('authToken'); 

    fetch("https://db-projecto.vercel.app/usuarioInfo", {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${token}`,  
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        
        const nombreElement = document.getElementById("nombreUser");
        const apellidoElement = document.getElementById("apellidoUser");
        const dniElement = document.getElementById("dniUser");
        const mailElement = document.getElementById("emailUser");  
        const direccionElement = document.getElementById("direccionUser");

        if (data.length > 0) {
            const { nombre, apellido, cumpleaños, dni, mail, direccion } = data[0];
            
            nombreElement.textContent = nombre;
            apellidoElement.textContent = apellido;
            dniElement.textContent = dni;
            mailElement.textContent = mail;  
            direccionElement.textContent = direccion;
        } else {
            alert("No se encontró información del usuario.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Hubo un problema al obtener la información del usuario.");
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