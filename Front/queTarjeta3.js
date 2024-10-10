const addSube = document.getElementById("addSube");
const inputSube = document.getElementById("inputSube");
const btnGuardar = document.getElementById("btnGuardar");
const lblSube = document.getElementById("lblSube");

lblSube.style.display = "none";
inputSube.style.display = "none";
btnGuardar.style.display = "none";

addSube.addEventListener("click", function() {
    addSube.style.display = "none";
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

    // Guardar la tarjeta SUBE en localStorage (array de tarjetas)
    let tarjetasSube = JSON.parse(localStorage.getItem("tarjetasSube")) || [];
    tarjetasSube.push(subeValue);
    localStorage.setItem("tarjetasSube", JSON.stringify(tarjetasSube));

    alert("Has ingresado el número de tu Sube con éxito");

    // Resetear input y botones
    inputSube.value = "";
    inputSube.style.display = "none";
    btnGuardar.style.display = "none";
    addSube.style.display = "inline";
});