const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clear = document.getElementById('clear');
const equal = document.getElementById('equal');

let currentInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');
    if (value) {
      currentInput += value;
      display.value = currentInput;
    }
  });
});

clear.addEventListener('click', () => {
  currentInput = '';
  display.value = '';
});

equal.addEventListener('click', () => {
  try {
    const result = eval(currentInput);
    display.value = result;
    currentInput = result.toString();
  } catch {
    display.value = 'Error';
    currentInput = '';
  }
});
