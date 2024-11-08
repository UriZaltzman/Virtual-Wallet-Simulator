document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector("[data-search]");
    const userCardTemplate = document.querySelector("[data-user-template]");
    const userCardContainer = document.querySelector("[data-user-cards-container]");
  
    let users = [];
  
    function renderUserCards(usersToRender) {
        userCardContainer.innerHTML = "";  
        usersToRender.forEach(user => {
            
            const cardButton = document.createElement("button");
            cardButton.classList.add("card-button");  
            cardButton.type = "button";
  
            const card = userCardTemplate.content.cloneNode(true).children[0];
            const header = card.querySelector("[data-header]");
            const body = card.querySelector("[data-body]");
  
            header.textContent = `${user.nombre} ${user.apellido}`;
            body.textContent = user.email;
  
            cardButton.append(card);
            userCardContainer.append(cardButton);
            
            cardButton.addEventListener("click", () => {
                if (confirm("¿Estás seguro que quieres transferirle dinero a esta persona?")) {
                    sessionStorage.setItem("nombreCompleto", `${user.nombre} ${user.apellido}`);
                    sessionStorage.setItem("destinatarioId", user.id);
                    window.location.href = "pagarTransaccionpage.html";
                }
            });
            
            user.element = cardButton;  
        });
    }
  
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
                id: user.id, 
                nombre: user.nombre,
                apellido: user.apellido,
                email: user.mail,
                element: null
            }));
  
            renderUserCards(users);
        } else {
            console.error("Error en la respuesta:", data.message);
            userCardContainer.innerHTML = "<p>No se encontró una cuenta.</p>";
        }
    })
    .catch(error => console.error("Error en la solicitud:", error));
  
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
