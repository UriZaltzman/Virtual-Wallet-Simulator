document.addEventListener("DOMContentLoaded", function() {
    const token = localStorage.getItem('authToken'); 
    
    const mailElement = document.getElementById("mail");
    const nomCompletoElement = document.getElementById("nomCompleto");
    const copyIcon = document.getElementById("copyIcon");
    const btnCompartir = document.getElementById("btnCompartir");


    btnCompartir.addEventListener("click", function() {
        if (nomCompletoElement.textContent && mailElement.textContent) {
            const textoACopiar = `¡Te comparto mis datos!\nNombre Completo: ${nomCompletoElement.textContent}\nEmail: ${mailElement.textContent}`;
    
            navigator.clipboard.writeText(textoACopiar)
                .then(() => alert("Datos copiados, puede compatirlos tranquilo!"))
                .catch(error => console.error("Error al copiar al portapapeles:", error));
        } else {
            alert("No hay datos completos para copiar.");
        }
    });
    

    fetch("https://db-projecto.vercel.app/compartir", {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Error al obtener la información del usuario");
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        
       
        if (data && data.length > 0) {
            const { nombre, apellido, mail } = data[0];
            

            nomCompletoElement.textContent = `${nombre} ${apellido}`;
            mailElement.textContent = mail;
        } else {
            alert("No se encontró información del usuario.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Hubo un problema al obtener la información del usuario.");
    });
});
