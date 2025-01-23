document.addEventListener("DOMContentLoaded", function () {
    const quizForm = document.getElementById("quiz-form");
    const submitButton = document.getElementById("submit-btn");
    const resultContainer = document.getElementById("result");
    const scoreElement = document.getElementById("score");

    const correctAnswers = {
        q1: "B",
        q2: "C",
        q3: "C",
        q4: "B",
        q5: "B",
    };

    submitButton.addEventListener("click", function () {
        let score = 0;

        for (const [question, correctAnswer] of Object.entries(correctAnswers)) {
            const userAnswer = quizForm[question].value;
            if (userAnswer === correctAnswer) {
                score++;
            }
        }

        scoreElement.textContent = `${score}`;
        resultContainer.classList.remove("hidden");

        highlightAnswers(correctAnswers);
    });

    function highlightAnswers(correctAnswers) {
        for (const [question, correctAnswer] of Object.entries(correctAnswers)) {
            const options = quizForm[question];
            for (const option of options) {
                if (option.value === correctAnswer) {
                    option.parentElement.style.color = "#28a745";
                } else if (option.checked) {
                    option.parentElement.style.color = "#dc3545";
                }
            }
        }
    }
});
