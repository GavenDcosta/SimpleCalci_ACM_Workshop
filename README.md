# SimpleCalci_ACM_Workshop.

https://gaven-calci-acm-workshop.vercel.app/

# Step 1

Download the below zip file

[calculator.zip](https://github.com/user-attachments/files/16486925/calculator.zip)

![image](https://github.com/user-attachments/assets/a045aeaf-e416-4be2-ae75-3e40bd1cf346)


# Step 2

Now Extract this file
You will have a calculator folder in this 
Open that in vs code

![image](https://github.com/user-attachments/assets/4a0bc99b-3805-489e-b5a3-5a5ed2341dbc)

You will have index.html, index.css and an empty index.js file.
There will also be a image file for the background.
Now we will begin to write our code in the index.js file.


# Step 3

Start with the code

Getting the display screen from the html

```
var displayExpression = document.getElementById('displayexpression');
```

Getting all the number buttons and adding event listener to them

``` 
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
```

Getting all the operator buttons and adding event listener to them

```
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

```


Implementing the Delete, Reset and Result functions

```
function handleDelete() {
  displayExpression.innerHTML = displayExpression.innerHTML.trim().slice(0, -1);
  if (displayExpression.innerHTML === '') {
  }
}

function handleReset() {
  displayExpression.innerHTML = '';
}

function handleResult() {
  displayExpression.innerHTML = eval(displayExpression.innerHTML)
}

```


Assigning these functions to the buttons

```
document.getElementById('del').addEventListener('click', handleDelete);
document.getElementById('reset').addEventListener('click', handleReset);
document.getElementById('result').addEventListener('click', handleResult);
```









