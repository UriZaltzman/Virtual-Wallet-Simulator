/* document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.querySelector("[data-search]");
  const userCardTemplate = document.querySelector("[data-user-template]");
  const userCardContainer = document.querySelector("[data-user-cards-container]");

  let users = [];

  // Función para renderizar las tarjetas de usuario
  function renderUserCards(usersToRender) {
      userCardContainer.innerHTML = "";  // Limpiar contenedor antes de renderizar
      usersToRender.forEach(user => {
          const card = userCardTemplate.content.cloneNode(true).children[0];
          const header = card.querySelector("[data-header]");
          const body = card.querySelector("[data-body]");

          header.textContent = `${user.nombre} ${user.apellido}`;
          body.textContent = user.email;

          userCardContainer.append(card);  // Agregar tarjeta al contenedor
          user.element = card;  // Guardar referencia de la tarjeta para filtrado
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
 */

document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector("[data-search]");
    const userCardTemplate = document.querySelector("[data-user-template]");
    const userCardContainer = document.querySelector("[data-user-cards-container]");
  
    let users = [];
  
    // Función para renderizar las tarjetas de usuario
    function renderUserCards(usersToRender) {
        userCardContainer.innerHTML = "";  // Limpiar contenedor antes de renderizar
        usersToRender.forEach(user => {
            // Crear el botón que contendrá la tarjeta
            const cardButton = document.createElement("button");
            cardButton.classList.add("card-button");  // Clase para personalizar estilo de botón
            cardButton.type = "button";
  
            const card = userCardTemplate.content.cloneNode(true).children[0];
            const header = card.querySelector("[data-header]");
            const body = card.querySelector("[data-body]");
  
            header.textContent = `${user.nombre} ${user.apellido}`;
            body.textContent = user.email;
  
            // Añadir la tarjeta al botón y el botón al contenedor
            cardButton.append(card);
            userCardContainer.append(cardButton);
            
            // Agregar el evento de clic en cada botón para manejar la acción deseada
            cardButton.addEventListener("click", () => {
                alert(`Tarjeta seleccionada: ${user.nombre} ${user.apellido}`);
                // Aquí puedes agregar cualquier otra acción que necesites realizar al hacer clic
            });
  
            user.element = cardButton;  // Guardar referencia del botón para filtrado
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
  