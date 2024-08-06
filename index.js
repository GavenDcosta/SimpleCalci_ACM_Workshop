var displayExpression = document.getElementById('displayexpression');

function handleNumberClick(number) {
  displayExpression.innerHTML += number;
}

// Add event listeners to number buttons
var numberButtons = document.querySelectorAll('.numbers');
for (var i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener('click', function() {
    handleNumberClick(this.textContent);
  });
}


function handleOperatorClick(operator) {
  // Only add the operator if the last character is a number or if the expression is empty
  if (!['+', '-', '*', '/'].includes(displayExpression.innerHTML.slice(-1))) {
    displayExpression.innerHTML += operator;
  } else if (displayExpression.innerHTML === '') {
    // If the expression is empty and an operator is clicked, handle it
    displayExpression.innerHTML += operator;
  }
}

// Add event listeners to operator buttons
var operatorButtons = document.querySelectorAll('.operator');
for (var i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener('click', function() {
    handleOperatorClick(this.textContent);
  });
}


function handleDelete() {
  displayExpression.innerHTML = displayExpression.innerHTML.trim().slice(0, -1);
}

function handleReset() {
  displayExpression.innerHTML = '';
}

function handleResult() {
  displayExpression.innerHTML = eval(displayExpression.innerHTML)
}


document.getElementById('del').addEventListener('click', handleDelete);
document.getElementById('reset').addEventListener('click', handleReset);
document.getElementById('result').addEventListener('click', handleResult);

