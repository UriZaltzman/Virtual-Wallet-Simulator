document.addEventListener("DOMContentLoaded", function() {
    const token = localStorage.getItem('authToken');  // Asegúrate de que 'authToken' contiene el token
    
    fetch("https://db-projecto.vercel.app/info/infoPersona", {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${token}`,  // Envía el token en el formato correcto
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
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
        alert("Hubo un problema al obtener la información del usuario.");
    });    
});

const iconMenu = document.getElementById("iconMenu");
if(iconMenu){
    iconMenu.addEventListener("click", () => {
        window.location.href = "homePage.html";
    })
}

const bellIcon = document.getElementById("bellIcon");
bellIcon.addEventListener("click", () => {
    alert("Proximamente...");
    return;
})

const helpIcon = document.getElementById("helpIcon");
helpIcon.addEventListener("click", () => {
    alert("Proximamente...");
    return;
})