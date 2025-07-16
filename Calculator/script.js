const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let input = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (value) {
      input += value;
      display.textContent = input;
    }

    if (button.id === 'clear') {
      input = '';
      display.textContent = '0';
    }

    if (button.id === 'equals') {
      try {
        input = eval(input).toString();
        display.textContent = input;
      } catch (error) {
        display.textContent = 'Error';
        input = '';
      }
    }
  });
});
