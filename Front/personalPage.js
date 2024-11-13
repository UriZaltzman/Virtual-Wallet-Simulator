const btnContinuar = document.getElementById("btnContinuar");
const inputNro = document.getElementById("inputNro");

btnContinuar.addEventListener("click", function(){
    let telefono = inputNro.value;
    if(!telefono){
        alert("Escribe tu nro de telefono");
        return;
    }
    else{
        alert("Tu nro de telefeno es: " + telefono);
        return window.location.href = "personalPrecios.html";
    }

})

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