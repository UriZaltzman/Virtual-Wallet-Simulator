/* const addSube = document.getElementById("addSube");
const inputSube = document.getElementById("inputSube");
const btnGuardar = document.getElementById("btnGuardar");
const lblSube = document.getElementById("lblSube");

lblSube.style.display = "none";
inputSube.style.display = "none";
btnGuardar.style.display = "none";

addSube.addEventListener("click", function(){

    addSube.style.display = "none";
    lblSube.style.display = "none";
    inputSube.style.display = "inline";
    btnGuardar.style.display = "inline";

    inputSube.value = lblSube.textContent;
})
btnGuardar.addEventListener("click", function() {
    lblSube.textContent = inputSube.value;

    try {
        const subeValue = inputSube.value;
        if (!subeValue) {
            alert("Por favor, ingrese el numero de Sube");
            return;
        } else {
            alert("Ha ingresado con éxito el numero de tu Sube");
            localStorage.setItem("numeroSube", subeValue);
            return;
             return window.location.href = "./cargarSube.html"; 
            addSube.style.display = "none";
            lblSube.style.display = "none";
            inputSube.style.display = "none";
            btnGuardar.style.display = "none";
        }
    } catch (error) {
        console.log(error);
        alert("Hubo un error con el número de la SUBE.");
    }
});
 */

const addSube = document.getElementById("addSube");
const inputSube = document.getElementById("inputSube");
const btnGuardar = document.getElementById("btnGuardar");
const lblSube = document.getElementById("lblSube");
const btnElegir = document.getElementById("btnElegir");

lblSube.style.display = "none";
inputSube.style.display = "none";
btnGuardar.style.display = "none";

addSube.addEventListener("click", function() {
    addSube.style.display = "none";
    lblSube.style.display = "none";
    inputSube.style.display = "inline";
    btnGuardar.style.display = "inline";
    inputSube.value = lblSube.textContent;
});

btnGuardar.addEventListener("click", function() {
    const subeValue = inputSube.value;
    if (!subeValue) {
        alert("Por favor, ingrese el número de Sube");
        return;
    }

    // Guardar la tarjeta SUBE en localStorage
    let tarjetasSube = JSON.parse(localStorage.getItem("tarjetasSube")) || [];
    tarjetasSube.push(subeValue);
    localStorage.setItem("tarjetasSube", JSON.stringify(tarjetasSube));

    
    alert("Has ingresado el número de tu Sube con éxito");

    window.location.href = "elegirTarjeta.html";
    
    lblSube.textContent = subeValue;
    lblSube.style.display = "inline";
    inputSube.style.display = "none";
    btnGuardar.style.display = "none";
    addSube.style.display = "inline";
});

