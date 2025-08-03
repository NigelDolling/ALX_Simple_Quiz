// STEP 1: Create our math functions
// Each function takes two numbers and returns the result

function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    // Handle division by zero
    if (number2 === 0) {
        return "Cannot divide by zero";
    }
    return number1 / number2;
}

// STEP 2: Create a helper function to get input values
// This avoids repeating the same code 4 times
function getInputValues() {
    // Get the values from input fields
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    
    return { number1, number2 };
}

// STEP 3: Create a helper function to display results
function displayResult(result) {
    document.getElementById('calculation-result').textContent = result;
}

// STEP 4: Add event listeners to each button
// Wait for the page to load before attaching listeners
document.addEventListener('DOMContentLoaded', function() {
    
    // Addition button
    document.getElementById('add').addEventListener('click', function() {
        const { number1, number2 } = getInputValues();
        const result = add(number1, number2);
        displayResult(result);
    });
    
    // Subtraction button
    document.getElementById('subtract').addEventListener('click', function() {
        const { number1, number2 } = getInputValues();
        const result = subtract(number1, number2);
        displayResult(result);
    });
    
    // Multiplication button
    document.getElementById('multiply').addEventListener('click', function() {
        const { number1, number2 } = getInputValues();
        const result = multiply(number1, number2);
        displayResult(result);
    });
    
    // Division button
    document.getElementById('divide').addEventListener('click', function() {
        const { number1, number2 } = getInputValues();
        const result = divide(number1, number2);
        displayResult(result);
    });
});

// OPTIONAL: Add Enter key support for better user experience
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input[type="number"]');
    
    inputs.forEach(input => {
        input.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                // Trigger the addition by default when Enter is pressed
                document.getElementById('add').click();
            }
        });
    });
});