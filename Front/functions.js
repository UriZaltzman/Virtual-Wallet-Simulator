function showPass() {
    var passwordField = document.getElementById("passwordId");
    var icon = document.getElementById("passIconId");

    // Alternar entre mostrar y ocultar la contraseña
    if (passwordField.type === "password") {
        passwordField.type = "text"; // Mostrar la contraseña
        icon.classList.remove('bx-low-vision');
        icon.classList.add('bx-show-alt'); // Cambia el ícono a uno de ojo
    } else {
        passwordField.type = "password"; // Ocultar la contraseña
        icon.classList.remove('bx-show-alt');
        icon.classList.add('bx-low-vision'); // Cambia el ícono de vuelta a "low-vision"
    }
}
