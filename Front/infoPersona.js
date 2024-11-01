document.addEventListener("DOMContentLoaded", function() {
    // Llamada al endpoint para obtener información del usuario
    fetch("https://db-projecto.vercel.app/infoPersona", {  // Cambia la URL si tu endpoint es diferente
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Error al obtener la información del usuario");
        }
        return response.json();
    })
    .then(data => {
        // Seleccionamos el elemento donde mostraremos los datos
        const idUsuarioLabel = document.getElementById("idUsuario");

        if (data.length > 0) {
            const { nombre, apellido } = data[0];
            idUsuarioLabel.textContent = `${nombre} ${apellido}`;
        } else {
            idUsuarioLabel.textContent = "No se encontró información del usuario.";
        }
    })
    .catch(error => {
        console.error("Error:", error);
        document.getElementById("idUsuario").textContent = "Error al cargar la información.";
    });
});
