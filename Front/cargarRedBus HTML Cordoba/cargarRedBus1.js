const btnPagar = document.getElementById("btnPagar");
const progressBar = document.getElementById("progressBar");

btnPagar.addEventListener("click", function() {
    let width = 0;
    const spanText = btnPagar.querySelector("span");

    btnPagar.disabled = true;
    spanText.style.display = "none";

    const interval = setInterval(function() {
        if (width >= 100) {
            clearInterval(interval);
            alert("¡El pago de $1000 ha sido procesado exitosamente!");
            return window.location.href = "/Front/homePage.html";
        } else {
            width++;
            progressBar.style.width = width + '%';
        }
    }, 40) ; 
});
