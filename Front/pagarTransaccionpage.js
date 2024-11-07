document.addEventListener("DOMContentLoaded", function() {
    const lblNomCompleto = document.getElementById("lblNomCompleto");
    const btnTransferir = document.getElementById("btnTransferir");
    const inputNumber = document.getElementById("inputNumber");
    const progressBar = document.getElementById("progressBar");

    const token = localStorage.getItem('authToken'); 

    const nombreCompleto = sessionStorage.getItem("nombreCompleto");
    if (nombreCompleto) {
        lblNomCompleto.textContent = nombreCompleto;
    }
    
    btnTransferir.addEventListener("click", () => {
        const inputValue = inputNumber.value;

        if (!inputValue) {
            alert("Debes ingresar el monto que quieres transferir");
            return;
        } else {
            let width = 0;
            let fetchCalled = false; 
            const spanText = btnTransferir.querySelector("span");

            btnTransferir.disabled = true;
            if (spanText) {
                spanText.style.display = "none";
            }

            const interval = setInterval(function() {
                if (width >= 100) {
                    clearInterval(interval);
                    alert("¡La transferencia ha sido exitosa!");
                    window.location.href = "/Front/homePage.html";
                } else {
                    width++;
                    progressBar.style.width = width + '%';

                    // Llama al fetch cuando el progreso llegue al 90%
                    if (width === 90 && !fetchCalled) {
                        fetchCalled = true;
                        fetch("https://db-projecto.vercel.app/transferir", {
                            method: 'POST',
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": `Bearer ${token}`
                            },
                            body: JSON.stringify({
                                saldo: inputValue
                            })
                        })
                        .then(response => {
                            if (!response.ok) throw new Error("Error en la transferencia");
                            return response.json();
                        })
                        .then(data => {
                            console.log("Transferencia realizada:", data);
                        })
                        .catch(error => {
                            console.error("Error en la transferencia:", error);
                            alert("Hubo un problema al realizar la transferencia.");
                            clearInterval(interval); 
                            btnTransferir.disabled = false;
                            if (spanText) spanText.style.display = "inline";
                        });
                    }
                }
            }, 40); 
        }
    });
});
