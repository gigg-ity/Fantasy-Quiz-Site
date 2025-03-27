// Show welcome popup when page loads
window.onload = function() {
    document.getElementById("welcomePopup").style.display = "flex";
    document.getElementById("mainContent").style.display = "none";
};

// Initialize Quiz
document.addEventListener('DOMContentLoaded', () => {
    // Add option labels (a, b, c, d)
    document.querySelectorAll('.question-box label').forEach((label, index) => {
        const option = String.fromCharCode(97 + index % 4);
        label.setAttribute('data-option', option + ')');
    });
});

// Show welcome popup
window.onload = () => {
    document.getElementById("welcomePopup").style.display = "flex";
};

// Close welcome popup
const closeWelcome = () => {
    document.getElementById("welcomePopup").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
};

// Answer validation
const correctAnswers = {
    q1: "a", // Example answer
    q2: "b", // Example answer
    q3: "c"  // Example answer
};

const checkAnswers = () => {
    // Reset previous feedback
    document.querySelectorAll('.question-box').forEach(box => {
        box.classList.remove('correct-answer', 'wrong-answer');
    });

    let score = 0;
    let allAnswered = true;

    // Check each question
    Object.entries(correctAnswers).forEach(([question, correct]) => {
        const selected = document.querySelector(`input[name="${question}"]:checked`);
        const questionBox = document.querySelector(`input[name="${question}"]`).closest('.question-box');

        if (!selected) {
            allAnswered = false;
            return;
        }

        if (selected.value === correct) {
            questionBox.classList.add('correct-answer');
            score++;
        } else {
            questionBox.classList.add('wrong-answer');
        }
    });

    if (!allAnswered) {
        alert('Please answer all questions before submitting!');
        return;
    }

    // Show results
    const resultMessage = `You scored ${score}/${Object.keys(correctAnswers).length}! 
    ${score === Object.keys(correctAnswers).length ? 'Perfect Score! 🎉' : 'Keep trying!'}`;
    
    alert(resultMessage);
};