document.getElementById('validate-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const validationCode = document.getElementById('validation-code').value;

    const response = await fetch('/validate-code', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ validationCode })
    });

    const data = await response.json();
    alert(data.message);

    if (data.success) {
        window.location.href = '/dashboard'; // Redirige al usuario a su página principal tras la validación
    }
});