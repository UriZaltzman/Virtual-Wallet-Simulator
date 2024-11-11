document.addEventListener("DOMContentLoaded", () => {
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
})