document.addEventListener("DOMContentLoaded", function() {
    const buttonRegistrar = document.getElementById("buttonRegistrar");

    buttonRegistrar.addEventListener("click", function(event) {
        event.preventDefault(); 

        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const email = document.getElementById("email").value;
        const contrasena = document.getElementById("contrasena").value;
        const direccion = document.getElementById("direccion").value;
        const DNI = document.getElementById("DNI").value;
        
        if (!nombre || !apellido || !email || !contrasena || !DNI || !direccion) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        const infoPersona = {
            nombre: nombre,
            apellido: apellido,
            mail: email,
            contrasena: contrasena,
            direccion: direccion, 
            dni: DNI,
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
            return window.location.href = "./login.html";
        })
        .catch(error => {
            console.log(error);
            alert("Hubo un problema con el registro");
        });
    });
});

