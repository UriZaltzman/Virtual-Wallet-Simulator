const btnPlan1 = document.getElementById("btnPlan1");
const btnPlan2 = document.getElementById("btnPlan2");
const btnPlan3 = document.getElementById("btnPlan3");
const btnPlan4 = document.getElementById("btnPlan4");

btnPlan1.addEventListener("click", function(){

    if(confirm("¿Estás seguro de este plan?")){
        window.location.href = "personalProgress.html";
    }
    else{
        alert("Elige otro plan");
        return;
    }
}) 

btnPlan2.addEventListener("click", function(){

    if(confirm("¿Estás seguro de este plan?")){
        window.location.href = "personalProgress.html";
    }
    else{
        alert("Elige otro plan");
        return;
    }
}) 

btnPlan3.addEventListener("click", function(){

    if(confirm("¿Estás seguro de este plan?")){
        window.location.href = "personalProgress.html";
    }
    else{
        alert("Elige otro plan");
        return;
    }
}) 

btnPlan4.addEventListener("click", function(){

    if(confirm("¿Estás seguro de este plan?")){
        window.location.href = "personalProgress.html";
    }
    else{
        alert("Elige otro plan");
        return;
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

