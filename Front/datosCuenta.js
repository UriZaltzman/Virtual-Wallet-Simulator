const aliasLabel = document.getElementById("alias");
const aliasInput = document.getElementById("aliasInput");
const pencilIcon = document.getElementById("pencilIcon");
const guardarBtn = document.getElementById("guardarAlias");
const btnVolver = document.getElementById("btnVolver");

pencilIcon.addEventListener("click", function() {
    
    aliasInput.style.display = "inline";
    guardarBtn.style.display = "inline";
    aliasLabel.style.display = "none";
    pencilIcon.style.display = "none";
    btnVolver.style.display = "none";
    
    aliasInput.value = aliasLabel.textContent;
});

guardarBtn.addEventListener("click", function() {
    aliasLabel.textContent = aliasInput.value;
    
    try {
        const aliasValue = aliasInput;
        if (!aliasInput.value) {
            alert("Por favor, ingrese un alias"); 
            return;
        }else{
            alert("Ha ingresado con éxito el Alias");
        }
    }
    catch(error){
        console.log(error);
        res.status(500).json("El alias esta mal")
    }

    aliasInput.style.display = "none";
    guardarBtn.style.display = "none";
    aliasLabel.style.display = "inline";
    pencilIcon.style.display = "inline";
    btnVolver.style.display = "inline";
});

const copyIcon = document.getElementById("copyIcon");
const CVUvalue = document.getElementById("CVU");
  
copyIcon.addEventListener("click", function(){
    navigator.clipboard.writeText(CVUvalue.textContent);

    try {
        alert("Se ha copiado el CVU");   
    } catch (error) {
        console.log(error);
        res.status(500).json("Ha habido un error, intentalo más tarde");
    }
})
