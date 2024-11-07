document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector("[data-search]");
    const userCardTemplate = document.querySelector("[data-user-template]");
    const userCardContainer = document.querySelector("[data-user-cards-container]");
  
    let users = [];
  
    // Función para renderizar las tarjetas de usuario
    function renderUserCards(usersToRender) {
        userCardContainer.innerHTML = "";  // Limpiar contenedor antes de renderizar
        usersToRender.forEach(user => {
            
            const cardButton = document.createElement("button");
            cardButton.classList.add("card-button");  
            cardButton.type = "button";
  
            const card = userCardTemplate.content.cloneNode(true).children[0];
            const header = card.querySelector("[data-header]");
            const body = card.querySelector("[data-body]");
  
            header.textContent = `${user.nombre} ${user.apellido}`;
            body.textContent = user.email;
  
            // Añadir la tarjeta al botón y el botón al contenedor
            cardButton.append(card);
            userCardContainer.append(cardButton);
            
            cardButton.addEventListener("click", () => {
                if (confirm("¿Estás seguro que quieres transferirle dinero a esta persona?")) {
                    sessionStorage.setItem("nombreCompleto", `${user.nombre} ${user.apellido}`);
                    window.location.href = "pagarTransaccionpage.html";
                }
            });
            
  
            user.element = cardButton;  
        });
    }
  
    // Solicitud inicial para obtener todas las cuentas
    fetch("https://db-projecto.vercel.app/filtro", {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Error al obtener la información de los usuarios");
        }
        return response.json();
    })
    .then(data => {
        if (data.success && data.results) {
            users = data.results.map(user => ({
                nombre: user.nombre,
                apellido: user.apellido,
                email: user.mail,
                element: null
            }));
  
            // Renderizar todas las tarjetas inicialmente
            renderUserCards(users);
        } else {
            console.error("Error en la respuesta:", data.message);
            userCardContainer.innerHTML = "<p>No se encontró una cuenta.</p>";
        }
    })
    .catch(error => console.error("Error en la solicitud:", error));
  
    // Filtrar en el cliente cuando el usuario escribe
    searchInput.addEventListener("input", e => {
        const value = e.target.value.toLowerCase();
        const filteredUsers = users.filter(user => 
            user.nombre.toLowerCase().includes(value) ||
            user.apellido.toLowerCase().includes(value) ||
            user.email.toLowerCase().includes(value)
        );
  
        renderUserCards(filteredUsers);
    });
  });
  