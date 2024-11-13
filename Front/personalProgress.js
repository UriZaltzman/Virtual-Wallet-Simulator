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

const iconMenu = document.getElementById("iconMenu");
if (iconMenu) {
    iconMenu.addEventListener("click", () => {
        window.location.href = "homePage.html";
    });
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