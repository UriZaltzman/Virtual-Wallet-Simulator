document.getElementById('button').addEventListener('click', async () => {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const infoPersona = {
        mail: email,
        contrasena: password
    };

    try {
        const response = await fetch('https://db-projecto.vercel.app/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(infoPersona),
        });

        if (!response.ok) {
            throw new Error("Error en el login");
        }

        const data = await response.json();

        if (data.token) {
            // Guardar el token en localStorage
            localStorage.setItem('authToken', data.token);
            alert(data.token);
            alert("Login exitoso");
            window.location.href = "homePage.html";
        } else {
            alert("Error: No se recibió un token de autenticación.");
        }
    } catch (error) {
        console.log(error);
        alert("Hubo un problema con el login");
    }
});
