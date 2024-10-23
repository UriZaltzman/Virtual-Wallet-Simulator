const btnPagar = document.getElementById("btnPagar");
const progressBar = document.getElementById("progress-bar");

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
