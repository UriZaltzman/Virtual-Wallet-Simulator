document.addEventListener("DOMContentLoaded", () => {

    const iconMenu = document.getElementById("iconMenu");
    iconMenu.addEventListener("click", () => {
        window.location.href = "homePage.html"
    })

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
    
    const btnPersonal = document.getElementById("btnPersonal");
    btnPersonal.addEventListener("click", () => {
            sessionStorage.setItem("tipo1", 1)
            return;
    })
    const btnClaro = document.getElementById("btnClaro");
    btnClaro.addEventListener("click", () => {
            sessionStorage.setItem("tipo2", 2)
            return;
    })
    const btnMovistar = document.getElementById("btnMovistar");
    btnMovistar.addEventListener("click", () => {
            sessionStorage.setItem("tipo3", 3)
            return;
    })

<<<<<<< Updated upstream
    const btnPersonal = document.getElementById("btnPersonal");
    btnPersonal.addEventListener("click", () => {
            sessionStorage.setItem("TipoEmpresa", 1)
            return;
    })

    const btnClaro = document.getElementById("btnClaro");
    btnClaro.addEventListener("click", () => {
            sessionStorage.setItem("TipoEmpresa", 2)
            return;
    })

    const btnMovistar = document.getElementById("btnMovistar");
    btnMovistar.addEventListener("click", () => {
            sessionStorage.setItem("TipoEmpresa", 3)
            return;
    })
})
=======
})
>>>>>>> Stashed changes
