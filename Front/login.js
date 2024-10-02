document.getElementById('button').addEventListener('click',async ()=> {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    infoPersona={
        mail:email,
        contasena:password
    }

    const response = await fetch('http://localhost:3000/login', { //https://db-projecto.vercel.app
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

