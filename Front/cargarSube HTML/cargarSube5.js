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
            alert("¡El pago de $5000 ha sido procesado exitosamente!");
            return window.location.href = "/Front/homePage.html";
        } else {
            width++;
            progressBar.style.width = width + '%';
        }
    }, 40) ; 
});

const iconMenu = document.getElementById("iconMenu");
if (iconMenu) {
    iconMenu.addEventListener("click", () => {
        window.location.href = "homePage.html";
    });
}

const bellIcon = document.getElementById("bellIcon");
if (bellIcon) {
    bellIcon.addEventListener("click", () => {
        alert("Proximamente...");
    });
}

const helpIcon = document.getElementById("helpIcon");
if (helpIcon) {
    helpIcon.addEventListener("click", () => {
        alert("Proximamente...");
    });
}
