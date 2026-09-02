--;
        showQuestion();
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
});

submitBtn.addEventListener("click", function () {
    const unanswered = userAnswers.filter(answer => answer === null).length;

    if (unanswered && !confirm(`இன்னும் ${unanswered} வினாக்களுக்கு விடை அளிக்கவில்லை.\n\nதேர்வைச் சமர்ப்பிக்க வேண்டுமா?`)) {
        return;
    }

    finishQuiz();
});

function startTimer() {
    updateTimer();

    timerInterval = setInterval(function () {
        timeLeft--;
        updateTimer();

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("⏰ நேரம் முடிந்துவிட்டது!\nதேர்வு தானாகச் சமர்ப்பிக்கப்படுகிறது.");
            finishQuiz();
        }
    }, 1000);
}

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timerDisplay.textContent =
        `⏱️ ${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function finishQuiz() {
    clearInterval(timerInterval);

    const score = questions.reduce(
        (total, q, index) => total + (userAnswers[index] === q.answer ? 1 : 0),
        0
    );

    const percentage = Math.round((score / questions.length) * 100);

    quizSection.classList.add("hidden");
    resultSection.classList.remove("hidden");

    document.getElementById("resultInfo").innerHTML = `
        <p><strong>👨‍🎓 மாணவர் பெயர்:</strong> ${studentName}</p>
        <p><strong>📝 தேர்வு எண்:</strong> ${examNo}</p>
        <p><strong>🏫 வகுப்பு:</strong> ${studentClass}</p>
    `;

    document.getElementById("score").innerHTML = `
        <div class="score-box">
            <h2>🏆 உங்கள் மதிப்பெண்</h2>
            <h1>${score} / ${questions.length}</h1>
            <h3>${percentage}%</h3>
        </div>
    `;

    showWrongAnswers();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function showWrongAnswers() {
    const wrongContainer = document.getElementById("wrongAnswers");
    const wrongQuestions = questions
        .map((q, index) => userAnswers[index] !== q.answer ? index : -1)
        .filter(index => index !== -1);

    if (!wrongQuestions.length) {
        wrongContainer.innerHTML = `
            <div class="correct-message">
                🎉 அருமை! அனைத்து வினாக்களுக்கும் சரியான விடை அளித்துள்ளீர்கள்!
            </div>
        `;
        return;
    }

    wrongContainer.innerHTML = `
        <h3>❌ தவறான விடைகளின் சரியான பதில்கள்</h3>
        ${wrongQuestions.map(index => {
            const q = questions[index];
            const selected = userAnswers[index] === null
                ? "விடை அளிக்கவில்லை"
                : q.options[userAnswers[index]];

            return `
                <div class="wrong-card">
                    <p><strong>வினா ${index + 1}:</strong> ${q.question}</p>
                    <p>❌ <strong>உங்கள் விடை:</strong> ${selected}</p>
                    <p>✅ <strong>சரியான விடை:</strong> ${q.options[q.answer]}</p>
                </div>
            `;
        }).join("")}
    `;
}

document.getElementById("printBtn").addEventListener("click", () => window.print());
document.getElementById("restartBtn").addEventListener("click", () => location.reload());
