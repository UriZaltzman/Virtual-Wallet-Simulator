const inputs = document.querySelectorAll('.code-input input');

inputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    if (input.value.length === 1) {
      inputs[index + 1].disabled = false;
      inputs[index + 1].focus();
    } else if (input.value.length === 0) {
      if (index > 0) {
        inputs[index - 1].focus();
      }
    }
  });
});