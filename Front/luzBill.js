const btnAdd = document.getElementById("btnAdd");
const inputNro = document.getElementById("inputNro");
const btnContinuar = document.getElementById("btnContinuar");
const lblNro = document.getElementById("lblNro");
const inputSection = document.getElementById("inputSection");
const btnPagar = document.getElementById("btnPagar");
const progressBar = document.getElementById("progress-bar");

inputSection.style.display = "none";
lblNro.style.display = "none";
btnPagar.style.display = "none";

btnAdd.addEventListener("click", function() {
    btnAdd.style.display = "none";  
    inputSection.style.display = "block";  
});

btnContinuar.addEventListener("click", function() {
    const nroValue = inputNro.value;
    if (!nroValue) {
        alert("Por favor, ingrese el número de Impuesto");
        return;
    }
    lblNro.textContent = "Nro de Impuesto: " + nroValue;
    lblNro.style.display = "block";
    inputSection.style.display = "none";
    btnPagar.style.display = "block";  
});

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


document.addEventListener("DOMContentLoaded", function () {
    const impuestoCardTemplate = document.querySelector("[data-impuestos-template]");
    const impuestoCardContainer = document.querySelector("[data-impuestos-cards-container]");

    let impuestos = [];

    function renderImpuestosCards(impuestosToRender) {
        impuestoCardContainer.innerHTML = "";
        impuestosToRender.forEach(impuesto => {

            const cardButton = document.createElement("button");
            cardButton.classList.add("card-button");
            cardButton.type = "button";

            const card = impuestoCardTemplate.content.cloneNode(true).children[0];
            const tipo = card.querySelector("[data-tipo]");
            const saldo = card.querySelector("[data-saldo]");

            tipo.textContent = impuesto.tipo;
            saldo.textContent = impuesto.saldo;

            cardButton.append(card);
            impuestoCardContainer.append(cardButton);

            cardButton.addEventListener("click", () => {
                if (confirm(`¿Estás seguro que quieres pagar este impuesto por $${impuesto.saldo}?`)) {
                    /*sessionStorage.setItem("id_impuesto_pagar", impuesto.id_impuesto);
                    window.location.href = "pagarImpuesto.html";*/
                    const token = localStorage.getItem('authToken');  // Asegúrate de que 'authToken' contiene el token
    
                    fetch("http://localhost:3000/pagarImpuesto", {
                        method: 'POST',
                        headers: {
                            "Authorization": `Bearer ${token}`,  // Envía el token en el formato correcto
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ id_impuesto: impuesto.id_impuesto, saldo: impuesto.saldo }),
                    })
                        .then(response => {
                            if (!response.ok) {
                                throw new Error("Error al pagar impuesto");
                            }
                            CargarImpuestosPendientes();
                        })
                }
            });

            //user.element = cardButton;  
        });
    }

    function CargarImpuestosPendientes() {
        const infoTipoImpuesto = {
            tipo: 2
        };
    
        const token = localStorage.getItem('authToken');  // Asegúrate de que 'authToken' contiene el token
    
        fetch("http://localhost:3000/verimpuestos", {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${token}`,  // Envía el token en el formato correcto
                "Content-Type": "application/json"
            },
            body: JSON.stringify(infoTipoImpuesto),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error al obtener la información de los usuarios");
                }
                return response.json();
            })
            .then(data => {
                if (data.success && data.results) {
                    impuestos = data.results.map(impuesto => ({
                        id_impuesto: impuesto.id,
                        saldo: impuesto.saldo,
                        tipo: "LUZ"
                    }));
    
                    renderImpuestosCards(impuestos);
                } else {
                    console.error("Error en la respuesta:", data.message);
                    impuestoCardContainer.innerHTML = "<p>No se encontró un impuesto.</p>";
                }
            })
            .catch(error => console.error("Error en la solicitud:", error));
    }

    CargarImpuestosPendientes();
});
