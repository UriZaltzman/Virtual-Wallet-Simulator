document.getElementById('button').addEventListener('click',async ()=> {
    const username = document.getElementById('login-username').value;
    const lastname = document.getElementById('login-lastname').value;
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const response = await fetch('https://db-projecto.vercel.app/login', {
        method: 'POST',
        
        body: JSON.stringify({ username, lastname, email, password })
    });

    const data = await response.json();
    alert(data.message);
    
    if (data.success) {
        window.location.href = '/validate';
    }
});

// Mostrar/ocultar contraseña
document.getElementById('show-password').addEventListener('change', function() {
    const passwordInput = document.getElementById('login-password');
    if (this.checked) {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
});

