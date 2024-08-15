document.getElementById('button').addEventListener('click',async ()=> {
    const username = document.getElementById('register-username').value;
    const lastname = document.getElementById('register-lastname').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    console.log(username,lastname,email,password)
    const response = await fetch('https://db-projecto.vercel.app/register', {
        method: 'POST',
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            username:username,
            lastname:lastname,
            email:email,
            password:password
        }),
    });

    const data = await response.json();
    alert(data.message);
    
    if (data.success) {
        window.location.href = '/validate';
    }
});