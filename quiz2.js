//Message popup
window.onload = function(){
    document.getElementById("welcomePopup").style.display = "flex";
    document.getElementById("mainContent").style.display = "none";
};

//Show Quiz Popup
window.onload = () => {
    document.getElementById("welcomePopup").style.display = "flex"; 
}


const closeWelcome = () => {
    document.getElementById("welcomePopup").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
}

const checkAnswers = {
    q1: "d", q2: "c", q3: "b",
};

const checkAnswer = () => {
    document.querySelectorAll('.question-box').forEach(box => {
        box.classList.remove('correct-answer', 'wrong-answer');
    })
}

let score = 0;
let allAnswered = true;

//check each question
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