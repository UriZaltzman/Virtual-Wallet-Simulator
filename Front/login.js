document.getElementById('button').addEventListener('click',async ()=> {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const response = await fetch('https://db-projecto.vercel.app/login', {
        method: 'POST',
        
        body: JSON.stringify({email, password })
    });

    const data = await response.json();
    alert(data);
    
    if (data.success) {
        window.location.href = '/validate';
    }
});

