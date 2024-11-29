function showPass() {
    const passwordField = document.getElementById("passwordId");
    const icon = document.getElementById("passIconId");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        icon.classList.remove('bx-low-vision');
        icon.classList.add('bx-show-alt'); 
    } else {
        passwordField.type = "password"; 
        icon.classList.remove('bx-show-alt');
        icon.classList.add('bx-low-vision');
    }
}

function showPass2() {
    const passwordField2 = document.getElementById("passwordId2");
    const icon2 = document.getElementById("passIconId2");

    if (passwordField2.type === "password") {
        passwordField2.type = "text"; 
        icon2.classList.remove('bx-low-vision');
        icon2.classList.add('bx-show-alt');
    } else {
        passwordField2.type = "password"; 
        icon2.classList.remove('bx-show-alt');
        icon2.classList.add('bx-low-vision'); 
    }
}

const btnReestablecer = document.getElementById("btnReestablecer");

btnReestablecer.addEventListener("click", function() {
    const passwordField = document.getElementById("passwordId");
    const passwordField2 = document.getElementById("passwordId2");

    if(!passwordField.value || !passwordField2.value){
        alert("Complete los campos");
        return;
    }
    const equalPassword = passwordField.value === passwordField2.value;
    if (!equalPassword) {
        alert("Las contraseñas no son iguales, reescribalas.");
        return;
    }
    else{
            const emailValue = document.getElementById("inputEmail");
            const passwordField = document.getElementById("passwordId");
            const passwordField2 = document.getElementById("passwordId2");
            const btnReestablecer = document.getElementById("btnReestablecer");
        
            const token = localStorage.getItem('authToken');
            console.log(token);
        
            if (btnReestablecer) {
                btnReestablecer.addEventListener("click", () => {
                    const passwordInfo = {
                        nuevaContrasena: passwordField.value,
                        confirmarContrasena: passwordField2.value,
                        mail: emailValue.value
                    };
        
                    fetch("https://db-projecto.vercel.app/auth/forgotPassword", {
                        method: "POST",
                        headers: {
                            // "Authorization": `Bearer ${token}`,
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(passwordInfo)
                    })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error("Error al cambiar la contraseña");
                        }
                        return response.json();
                    })
                    .then(data => {
                        console.log(data);
                        alert("Se ha cambiado la contraseña exitosamente");
                        window.location.href = "login.html";
                    })
                    .catch(error => {
                        console.error(error);
                        alert("Error al cambiar la contraseña");
                    });
                });
            }
    }
});
