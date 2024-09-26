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

    try {
        if(!passwordField.value || !passwordField2.value){
            alert("Complete los campos");
            return;
        }
        const equalPassword = passwordField.value === passwordField2.value;
        if (!equalPassword) {
        alert("Las contraseñas no son iguales, reescribalas.");
        return;
        } else {
            alert("La contraseña se ha reestablecido con éxito.");
        }
        window.location.href = "homePage.html";
    } catch (error) {
        console.log(error);
        res.status(500).json("Error al reestablecer la contraseña");
    }
});
