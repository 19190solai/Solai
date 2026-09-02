const questions = [
    {
        question: "‘அன்னை மொழியே’ கவிதையை இயற்றியவர் யார்?",
        options: ["பெருஞ்சித்திரனார்", "பாரதியார்", "பாரதிதாசன்", "நாமக்கல் கவிஞர்"],
        answer: 0
    },
    {
        question: "தமிழ்மொழியின் சிறப்பைப் பாடல்களின் நோக்கம் என்ன?",
        options: ["தமிழின் பெருமையை உணர்த்துதல்", "வரலாற்றை மறத்தல்", "பிறமொழியைப் புகழ்தல்", "அறிவியலை மறுத்தல்"],
        answer: 0
    },
    {
        question: "மொழி எதற்கான கருவி?",
        options: ["கருத்துப் பரிமாற்றம்", "விளையாட்டு", "பயணம்", "உணவு"],
        answer: 0
    },
    {
        question: "தமிழ்மொழி எவ்வகை மொழி?",
        options: ["செம்மொழி", "வட்டார மொழி", "குறியீட்டு மொழி", "அயல்மொழி"],
        answer: 0
    },
    {
        question: "தமிழின் தொன்மையை விளக்கும் இலக்கண நூல் எது?",
        options: ["தொல்காப்பியம்", "சிலப்பதிகாரம்", "மணிமேகலை", "கம்பராமாயணம்"],
        answer: 0
    },
    {
        question: "தமிழின் பழமையான இலக்கியத் தொகுப்பு எது?",
        options: ["சங்க இலக்கியம்", "நவீன இலக்கியம்", "மேலை இலக்கியம்", "அறிவியல் இலக்கியம்"],
        answer: 0
    },
    {
        question: "தமிழின் உயிரெழுத்துகள் எத்தனை?",
        options: ["12", "18", "216", "247"],
        answer: 0
    },
    {
        question: "தமிழின் மெய்யெழுத்துகள் எத்தனை?",
        options: ["18", "12", "216", "247"],
        answer: 0
    },
    {
        question: "உயிர், மெய் சேர்ந்து உருவாகுபவை எவை?",
        options: ["உயிர்மெய் எழுத்துகள்", "ஆய்த எழுத்து", "உயிரெழுத்துகள்", "மெய்யெழுத்துகள்"],
        answer: 0
    },
    {
        question: "தமிழில் ஆய்த எழுத்து எது?",
        options: ["ஃ", "அ", "க்", "ள"],
        answer: 0
    },
    {
        question: "தமிழில் மொத்த எழுத்துகள் எத்தனை?",
        options: ["247", "216", "30", "31"],
        answer: 0
    },
    {
        question: "உயிர்மெய் எழுத்துகள் எத்தனை?",
        options: ["216", "247", "30", "18"],
        answer: 0
    },
    {
        question: "‘அ’ எவ்வகை எழுத்து?",
        options: ["உயிரெழுத்து", "மெய்யெழுத்து", "ஆய்த எழுத்து", "உயிர்மெய்"],
        answer: 0
    },
    {
        question: "‘க்’ எவ்வகை எழுத்து?",
        options: ["மெய்யெழுத்து", "உயிரெழுத்து", "ஆய்த எழுத்து", "உயிர்மெய்"],
        answer: 0
    },
    {
        question: "வல்லின எழுத்துகள் எத்தனை?",
        options: ["6", "12", "18", "216"],
        answer: 0
    },
    {
        question: "மெல்லின எழுத்துகள் எத்தனை?",
        options: ["6", "12", "18", "216"],
        answer: 0
    },
    {
        question: "இடையின எழுத்துகள் எத்தனை?",
        options: ["6", "12", "18", "216"],
        answer: 0
    },
    {
        question: "‘க, ச, ட, த, ப, ற’ எந்த இன எழுத்துகள்?",
        options: ["வல்லினம்", "மெல்லினம்", "இடையினம்", "உயிரினம்"],
        answer: 0
    },
    {
        question: "‘ங, ஞ, ண, ந, ம, ன’ எந்த இன எழுத்துகள்?",
        options: ["மெல்லினம்", "வல்லினம்", "இடையினம்", "உயிர்"],
        answer: 0
    },
    {
        question: "‘ய, ர, ல, வ, ழ, ள’ எந்த இன எழுத்துகள்?",
        options: ["இடையினம்", "வல்லினம்", "மெல்லினம்", "உயிர்"],
        answer: 0
    },
    {
        question: "தமிழின் முதல் இலக்கண நூல் எது?",
        options: ["தொல்காப்பியம்", "நன்னூல்", "யாப்பருங்கலம்", "புறப்பொருள் வெண்பாமாலை"],
        answer: 0
    },
    {
        question: "தொல்காப்பியம் எத்தனை அதிகாரங்களைக் கொண்டது?",
        options: ["3", "2", "5", "10"],
        answer: 0
    },
    {
        question: "தொல்காப்பியத்தின் அதிகாரங்கள் யாவை?",
        options: ["எழுத்து, சொல், பொருள்", "அகம், புறம், திணை", "இயல், இசை, நாடகம்", "அறம், பொருள், இன்பம்"],
        answer: 0
    },
    {
        question: "தொல்காப்பியத்தின் முதல் அதிகாரம் எது?",
        options: ["எழுத்ததிகாரம்", "சொல்லதிகாரம்", "பொருளதிகாரம்", "யாப்பதிகாரம்"],
        answer: 0
    },
    {
        question: "தொல்காப்பியத்தின் இரண்டாவது அதிகாரம் எது?",
        options: ["சொல்லதிகாரம்", "எழுத்ததிகாரம்", "பொருளதிகாரம்", "அணியதிகாரம்"],
        answer: 0
    },
    {
        question: "தொல்காப்பியத்தின் மூன்றாவது அதிகாரம் எது?",
        options: ["பொருளதிகாரம்", "சொல்லதிகாரம்", "எழுத்ததிகாரம்", "யாப்பதிகாரம்"],
        answer: 0
    },
    {
        question: "குறில் எழுத்துகள் எத்தனை?",
        options: ["5", "7", "12", "18"],
        answer: 0
    },
    {
        question: "நெடில் எழுத்துகள் எத்தனை?",
        options: ["7", "5", "12", "18"],
        answer: 0
    },
    {
        question: "குறிலின் மாத்திரை அளவு என்ன?",
        options: ["1 மாத்திரை", "2 மாத்திரை", "3 மாத்திரை", "அரை மாத்திரை"],
        answer: 0
    },
    {
        question: "நெடிலின் மாத்திரை அளவு என்ன?",
        options: ["2 மாத்திரை", "1 மாத்திரை", "3 மாத்திரை", "அரை மாத்திரை"],
        answer: 0
    },
    {
        question: "ஆய்த எழுத்தின் மாத்திரை அளவு என்ன?",
        options: ["அரை மாத்திரை", "1 மாத்திரை", "2 மாத்திரை", "3 மாத்திரை"],
        answer: 0
    },
    {
        question: "குறில் உயிரெழுத்துகள் எவை?",
        options: ["அ, இ, உ, எ, ஒ", "ஆ, ஈ, ஊ, ஏ, ஓ", "அ, ஆ, இ, ஈ, உ", "எ, ஏ, ஒ, ஓ, ஔ"],
        answer: 0
    },
    {
        question: "நெடில் உயிரெழுத்துகள் எவை?",
        options: ["ஆ, ஈ, ஊ, ஏ, ஐ, ஓ, ஔ", "அ, இ, உ, எ, ஒ", "அ, ஆ, இ, ஈ, உ", "க, ச, ட, த, ப, ற"],
        answer: 0
    },
    {
        question: "‘ஐ’ எவ்வகை உயிரெழுத்து?",
        options: ["நெடில்", "குறில்", "மெய்", "ஆய்தம்"],
        answer: 0
    },
    {
        question: "‘ஒ’ எவ்வகை உயிரெழுத்து?",
        options: ["குறில்", "நெடில்", "மெய்", "ஆய்தம்"],
        answer: 0
    },
    {
        question: "முதல் எழுத்துகள் எனப்படுபவை எவை?",
        options: ["உயிரும் மெய்யும்", "உயிர்மெய் மட்டும்", "ஆய்தம் மட்டும்", "சார்பெழுத்துகள்"],
        answer: 0
    },
    {
        question: "சார்பெழுத்துகளில் ஒன்று எது?",
        options: ["உயிர்மெய்", "உயிர்", "மெய்", "குறில்"],
        answer: 0
    },
    {
        question: "மொழியின் வளர்ச்சிக்கு முக்கியமானது எது?",
        options: ["மக்களின் பயன்பாடு", "மொழியைப் பயன்படுத்தாமை", "மொழியை மறத்தல்", "பிறமொழியை மட்டும் பயன்படுத்துதல்"],
        answer: 0
    },
    {
        question: "மொழியின் அடிப்படைப் பயன்பாடு எது?",
        options: ["கருத்துகளைப் பரிமாறுதல்", "விளையாடுதல்", "தூங்குதல்", "பயணம் செய்தல்"],
        answer: 0
    },
    {
        question: "தமிழ்மொழியைப் பாதுகாக்க வேண்டியது யார்?",
        options: ["அனைவரும்", "ஆசிரியர்கள் மட்டும்", "மாணவர்கள் மட்டும்", "எழுத்தாளர்கள் மட்டும்"],
        answer: 0
    }
];

let currentQuestion = 0;
let userAnswers = new Array(questions.length).fill(null);
let studentName = "", examNo = "", studentClass = "";
let timeLeft = 20 * 60;
let timerInterval;

const studentSection = document.getElementById("student-section");
const quizSection = document.getElementById("quiz-section");
const resultSection = document.getElementById("result-section");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const nextQuestionBtn = document.getElementById("nextQuestionBtn");
const submitBtn = document.getElementById("submitBtn");
const quiz = document.getElementById("quiz");
const questionNumber = document.getElementById("question-number");
const timerDisplay = document.getElementById("timer");
const studentInfo = document.getElementById("studentInfo");

nextBtn.addEventListener("click", function () {
    studentName = document.getElementById("studentName").value.trim();
    examNo = document.getElementById("examNo").value.trim();
    studentClass = document.getElementById("studentClass").value.trim();

    if (!studentName || !examNo || !studentClass) {
        alert("அனைத்து விவரங்களையும் உள்ளிடுக.");
        return;
    }

    studentInfo.innerHTML = `👨‍🎓 ${studentName} | தேர்வு எண்: ${examNo} | வகுப்பு: ${studentClass}`;
    studentSection.classList.add("hidden");
    quizSection.classList.remove("hidden");
    startTimer();
    showQuestion();
});

function showQuestion() {
    const q = questions[currentQuestion];

    questionNumber.innerHTML = `<h3>வினா ${currentQuestion + 1} / ${questions.length}</h3>`;

    quiz.innerHTML = `
        <div class="question-card">
            <h2>${q.question}</h2>
            <div class="options">
                ${q.options.map((option, index) => `
                    <label class="option">
                        <input type="radio" name="answer" value="${index}"
                            ${userAnswers[currentQuestion] === index ? "checked" : ""}>
                        <span>${String.fromCharCode(65 + index)}. ${option}</span>
                    </label>
                `).join("")}
            </div>
        </div>
    `;

    updateButtons();

    document.querySelectorAll('input[name="answer"]').forEach(radio => {
        radio.addEventListener("change", function () {
            userAnswers[currentQuestion] = parseInt(this.value);
        });
    });
}

function updateButtons() {
    prevBtn.style.display = currentQuestion === 0 ? "none" : "inline-block";
    nextQuestionBtn.classList.toggle("hidden", currentQuestion === questions.length - 1);
    submitBtn.classList.toggle("hidden", currentQuestion !== questions.length - 1);
}

nextQuestionBtn.addEventListener("click", function () {
    if (userAnswers[currentQuestion] === null) {
        alert("முதலில் ஒரு விடையைத் தேர்ந்தெடுக்கவும்.");
        return;
    }

    currentQuestion++;
    showQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
});

prevBtn.addEventListener("click", function () {
    if (currentQuestion > 0) {
        currentQuestion--;
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
