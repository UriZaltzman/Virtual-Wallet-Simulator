const tarjetasList = document.getElementById("tarjetasList");
const continuarBtn = document.getElementById("continuar");

const tarjetasSube = JSON.parse(localStorage.getItem("tarjetasSube")) || [];


tarjetasSube.forEach((tarjeta, index) => {
    const tarjetaBtn = document.createElement("button");
    tarjetaBtn.textContent = "Tarjeta SUBE: " + tarjeta;
    tarjetaBtn.addEventListener("click", function() {
        seleccionarTarjeta(tarjeta);
    });
    tarjetasList.appendChild(tarjetaBtn);
});

function seleccionarTarjeta(tarjeta) {

    localStorage.setItem("tarjetaSeleccionada", tarjeta);
    alert("Has seleccionado la tarjeta: " + tarjeta);
    continuarBtn.disabled = false;
}

continuarBtn.addEventListener("click", function() {
    window.location.href = "cargarSube.html"; 
});
