document.addEventListener("DOMContentLoaded", function() {
    const token = localStorage.getItem('authToken');  // Asegúrate de que 'authToken' contiene el token

    fetch("https://db-projecto.vercel.app/usuarioInfo", {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${token}`,  // Envía el token en el formato correcto
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        
        const nombreElement = document.getElementById("nombreUser");
        const apellidoElement = document.getElementById("apellidoUser");
        const dniElement = document.getElementById("dniUser");
        const mailElement = document.getElementById("emailUser");  // Cambiado a "mail"
        const direccionElement = document.getElementById("direccionUser");

        if (data.length > 0) {
            const { nombre, apellido, cumpleaños, dni, mail, direccion } = data[0];
            
            nombreElement.textContent = nombre;
            apellidoElement.textContent = apellido;
            dniElement.textContent = dni;
            mailElement.textContent = mail;  // Cambiado a "mail"
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
