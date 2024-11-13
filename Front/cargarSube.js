document.addEventListener("DOMContentLoaded", () => {
    const iconMenu = document.getElementById("iconMenu");
    if (iconMenu) {
        iconMenu.addEventListener("click", () => {
            window.location.href = "homePage.html";
        });
    }

    const bellIcon = document.getElementById("bellIcon");
    bellIcon.addEventListener("click", () => {
        alert("Próximamente...");
        return;
    });

    const helpIcon = document.getElementById("helpIcon");
    helpIcon.addEventListener("click", () => {
        alert("Próximamente...");
        return;
    });

    // Obtener y mostrar el valor de SUBE
    const nroSube = sessionStorage.getItem("nroSube");
    const numeroSubeElement = document.getElementById("numeroSube");

    if (numeroSubeElement && nroSube) {
        numeroSubeElement.textContent = `Número de SUBE: ${nroSube}`;
    }
});

/*function cargarSube(monto){
    fetch("")
}*/