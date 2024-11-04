const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let users = []

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  users.forEach(user => {
    const isVisible =
      user.name.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value)
    user.element.classList.toggle("hide", !isVisible)
  })
})
/* 
fetch("http://localhost:3000/filtro", { //https://db-projecto.vercel.app
    method: 'GET',
    headers: {
        "Content-Type": "application/json"
    }
})
  .then(res => res.json())
  .then(data => {
    users = data.map(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0]
      const header = card.querySelector("[data-header]")
      const body = card.querySelector("[data-body]")
      header.textContent = user.name
      body.textContent = user.email
      userCardContainer.append(card)
      return { name: user.name, email: user.email, element: card }
    })
  })
 */

fetch("http://localhost:3000/filtro", {
  method: 'GET',
  headers: {
      "Content-Type": "application/json"
   }
})
  .then(res => res.json())
  .then(data => {
    console.log(data);
    if (Array.isArray(data)) {
      users = data.map(user => {
        const card = userCardTemplate.content.cloneNode(true).children[0];
        const header = card.querySelector("[data-header]");
        const body = card.querySelector("[data-body]");
        header.textContent = user.name;
        body.textContent = user.email;
        userCardContainer.append(card);
        return { name: user.name, email: user.email, element: card };
      });
    } else {
      console.error("La respuesta no es un array:", data);
    }
  })
  .catch(error => console.error("Error en la solicitud:", error));
