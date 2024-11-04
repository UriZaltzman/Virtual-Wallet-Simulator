document.getElementById('button').addEventListener('click',async ()=> {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    infoPersona={
        mail:email,
        contrasena:password
    }

    const response = fetch('https://db-projecto.vercel.app/login', { //https://db-projecto.vercel.app //https://vercel.live/link/db-projecto.vercel.app?via=project-dashboard-alias-list&p=1
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(infoPersona),
    })  
    .then(response => {
        if (!response.ok) {
            throw new Error("Error en el login");
        }
        return response.json();
    })
    .then(data => {
        alert("Login exitoso");
        return window.location.href = "homePage.html";
    })
    .catch(error => {
        console.log(error);
        alert("Hubo un problema con el login");
    });

    


/* 
    const data = await response.json();
    alert(data);
    
    if (data.success) {
        window.location.href = '/validate';
    } */
});

