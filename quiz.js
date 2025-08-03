// Step 1: Function Declaration
function checkAnswer() {
    // Step 2: Identify the Correct Answer
    const correctAnswer = "4";
    
    // Step 3: Retrieve the User's Answer
    const selectedRadio = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = selectedRadio ? selectedRadio.value : null;
    
    // Step 4: Compare User's Answer with Correct Answer
    const feedbackElement = document.getElementById('feedback');
    
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
    }
}

// Step 5: Add Event Listener to Submit Button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);