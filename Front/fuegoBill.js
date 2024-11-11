const btnAdd = document.getElementById("btnAdd");
const inputNro = document.getElementById("inputNro");
const btnContinuar = document.getElementById("btnContinuar");
const lblNro = document.getElementById("lblNro");
const inputSection = document.getElementById("inputSection");
const btnPagar = document.getElementById("btnPagar");
const progressBar = document.getElementById("progress-bar");

sessionStorage.setItem("tipo", 3);

inputSection.style.display = "none";
lblNro.style.display = "none";
btnPagar.style.display = "none";

btnAdd.addEventListener("click", function() {
    btnAdd.style.display = "none";  
    inputSection.style.display = "block";  
});

btnContinuar.addEventListener("click", function() {
    const nroValue = inputNro.value;
    if (!nroValue) {
        alert("Por favor, ingrese el número de Impuesto");
        return;
    }
    lblNro.textContent = "Nro de Impuesto: " + nroValue;
    lblNro.style.display = "block";
    inputSection.style.display = "none";
    btnPagar.style.display = "block";  
});

btnPagar.addEventListener("click", function() {
    let width = 0;
    const spanText = btnPagar.querySelector("span");


    spanText.style.display = "none";
    btnPagar.disabled = true ; 
    progressBar.style.display = "block"; 

    const interval = setInterval(function() {
        if (width >= 100) {
            clearInterval(interval);
            alert("¡El pago ha sido procesado exitosamente!");
            window.location.href = "homePage.html";
        } else {
            width++;
            progressBar.style.width = width + '%'; 
        }
    }, 40);
});

document.addEventListener("DOMContentLoaded", function() {alert("3")});
