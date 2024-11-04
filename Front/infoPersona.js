document.addEventListener("DOMContentLoaded", function() {
    // Simula la obtención de un token al iniciar sesión
    const token = "tu_token_temporal_de_prueba"; // Esto debería generarse en tu backend al iniciar sesión
    const expirationTime = 30 * 60 * 1000; // Tiempo de expiración: 30 minutos (en milisegundos)

    // Guarda el token y la hora de expiración en localStorage
    localStorage.setItem('token', token);
    localStorage.setItem('tokenExpiration', Date.now() + expirationTime);

    // Función para verificar si el token ha expirado
    function isTokenValid() {
        const storedToken = localStorage.getItem('token');
        const tokenExpiration = localStorage.getItem('tokenExpiration');
        
        if (storedToken && Date.now() < tokenExpiration) {
            return true;
        } else {
            // Si el token ha expirado, limpia el localStorage y pide iniciar sesión de nuevo
            localStorage.removeItem('token');
            localStorage.removeItem('tokenExpiration');
            alert("Tu sesión ha expirado. Por favor, inicia sesión de nuevo.");
            return false;
        }
    }

    // Verifica la validez del token antes de hacer el fetch
    if (isTokenValid()) {
        fetch("https://db-projecto.vercel.app/infoPersona", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}` // Agrega el token al header de la solicitud
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al obtener la información del usuario");
            }
            return response.json();
        })
        .then(data => {
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
    } else {
        document.getElementById("idUsuario").textContent = "Usuario no autenticado.";
    }
});
