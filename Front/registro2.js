/*     
function personaRegistro(){
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const edad = document.getElementById("edad");
    const DNI = document.getElementById("DNI");
    const direccion = document.getElementById("direccion");
    const telefono = document.getElementById("telefono");
    const email = document.getElementById("email");
    const constrasenia = document.getElementById("contrasena");
    const constrasena = document.getElementById("contrasena");
    
    const infoPersona = {
        nombre: nombre.value,
        apellido: apellido.value,
        edad: edad.value,
        DNI: DNI.value,
        direccion: direccion.value,
        telefono: telefono.value,
        email: email.value,
        contrasenia: constrasenia.value,
        constrasena: constrasena.value
    }
}

function response() {
    const response = fetch("postgres://default:1U0hcQmxMuTz@ep-white-dust-a4ao0h56.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require", {
        method: 'POST',
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(infoPersona){
        }),
    });
}
 */

function registrarUsuario(event){
    event.preventDefault(); 

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const edad = document.getElementById("edad").value;
    const DNI = document.getElementById("DNI").value;
    const direccion = document.getElementById("direccion").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;
    const contrasenia = document.getElementById("contrasena").value;
    const repetirContrasena = document.getElementById("repetirContraseña").value;

    const infoPersona = {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        DNI: DNI,
        direccion: direccion,
        telefono: telefono,
        email: email,
        contrasenia: contrasenia,
        constrasena: repetirContrasena
    };

    fetch("https://db-projecto.vercel.app/nuevo", { // Asegúrate de que esta URL sea la correcta
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({infoPersona}),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Error en el registro");
        }
        return response.json();
    })
    .then(data => {
        alert("Registro exitoso");
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Hubo un problema con el registro");
    });
}
