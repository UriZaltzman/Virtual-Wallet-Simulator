document.addEventListener("DOMContentLoaded", function() {
    const buttonRegistrar = document.getElementById("buttonRegistrar");

    buttonRegistrar.addEventListener("click", function(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const DNI = document.getElementById("DNI").value;
        const direccion = document.getElementById("direccion").value;
        const email = document.getElementById("email").value;
        const contrasena = document.getElementById("contrasena").value;

        if (!nombre || !apellido || !email || !contrasena || !DNI || !direccion) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        const infoPersona = {
            nombre: nombre,
            apellido: apellido,
            email: email,
            contrasena: contrasena,
            DNI: DNI,
            direccion: direccion, 
        };

        fetch("https://db-projecto.vercel.app/nuevo", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(infoPersona),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Error en el registro");
            }
            return response.json();
        })
        .then(data => {
            alert("Registro exitoso");
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Hubo un problema con el registro");
        });
    });
});

//npm i cors
//import cors from "cors"
//app.use(express.json())
//app.use(cors)
