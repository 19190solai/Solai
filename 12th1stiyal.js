// ==========================================
// 12ஆம் வகுப்பு தமிழ் - இயல் 1 வினாடி வினா
// ==========================================

const questions = [

    {
        question: "1. தொல்காப்பியம் எத்தனை அதிகாரங்களைக் கொண்டது?",
        options: ["2", "3", "4", "5"],
        answer: 1
    },

    {
        question: "2. தொல்காப்பியத்தின் முதல் அதிகாரம் எது?",
        options: ["சொல்லதிகாரம்", "பொருளதிகாரம்", "எழுத்ததிகாரம்", "யாப்பதிகாரம்"],
        answer: 2
    },

    {
        question: "3. தொல்காப்பியத்தின் இரண்டாவது அதிகாரம் எது?",
        options: ["எழுத்ததிகாரம்", "சொல்லதிகாரம்", "பொருளதிகாரம்", "அணியதிகாரம்"],
        answer: 1
    },

    {
        question: "4. தொல்காப்பியத்தின் மூன்றாவது அதிகாரம் எது?",
        options: ["சொல்லதிகாரம்", "பொருளதிகாரம்", "எழுத்ததிகாரம்", "யாப்பதிகாரம்"],
        answer: 1
    },

    {
        question: "5. தமிழ் மொழியின் முதல் எழுத்து எது?",
        options: ["அ", "ஆ", "இ", "ஈ"],
        answer: 0
    },

    {
        question: "6. தமிழ் எழுத்துக்கள் மொத்தம் எத்தனை?",
        options: ["216", "247", "18", "12"],
        answer: 1
    },

    {
        question: "7. தமிழ் உயிரெழுத்துக்கள் எத்தனை?",
        options: ["10", "12", "18", "216"],
        answer: 1
    },

    {
        question: "8. தமிழ் மெய்யெழுத்துக்கள் எத்தனை?",
        options: ["12", "18", "216", "247"],
        answer: 1
    },

    {
        question: "9. உயிர்மெய் எழுத்துக்கள் எத்தனை?",
        options: ["18", "12", "216", "247"],
        answer: 2
    },

    {
        question: "10. ஆய்த எழுத்து எது?",
        options: ["க்", "ஃ", "ங்", "ச்"],
        answer: 1
    },

    {
        question: "11. குறில் எழுத்துக்கள் எத்தனை?",
        options: ["5", "7", "12", "18"],
        answer: 0
    },

    {
        question: "12. நெடில் எழுத்துக்கள் எத்தனை?",
        options: ["5", "7", "10", "12"],
        answer: 0
    },

    {
        question: "13. வல்லின எழுத்துக்கள் எத்தனை?",
        options: ["6", "5", "7", "8"],
        answer: 0
    },

    {
        question: "14. மெல்லின எழுத்துக்கள் எத்தனை?",
        options: ["5", "6", "7", "8"],
        answer: 1
    },

    {
        question: "15. இடையின எழுத்துக்கள் எத்தனை?",
        options: ["5", "6", "7", "8"],
        answer: 1
    },

    {
        question: "16. தமிழ் மொழியின் சிறப்பை எடுத்துரைக்கும் பழமையான இலக்கண நூல் எது?",
        options: ["தொல்காப்பியம்", "சிலப்பதிகாரம்", "மணிமேகலை", "திருக்குறள்"],
        answer: 0
    },

    {
        question: "17. திருக்குறளை இயற்றியவர் யார்?",
        options: ["இளங்கோவடிகள்", "திருவள்ளுவர்", "கம்பர்", "சீத்தலைச் சாத்தனார்"],
        answer: 1
    },

    {
        question: "18. சிலப்பதிகாரத்தை இயற்றியவர் யார்?",
        options: ["திருவள்ளுவர்", "கம்பர்", "இளங்கோவடிகள்", "சேக்கிழார்"],
        answer: 2
    },

    {
        question: "19. தமிழ் மொழி எந்த மொழிக் குடும்பத்தைச் சேர்ந்தது?",
        options: ["இந்தோ-ஐரோப்பிய", "திராவிட", "சீன-திபெத்திய", "செமிட்டிக்"],
        answer: 1
    },

    {
        question: "20. தமிழின் பழமையான இலக்கண நூலாகக் கருதப்படுவது எது?",
        options: ["நன்னூல்", "தொல்காப்பியம்", "யாப்பருங்கலக்காரிகை", "வீரசோழியம்"],
        answer: 1
    }

];


// ==========================================
// மாறிகள்
// ==========================================

let currentQuestion = 0;
let score = 0;
let selectedAnswers = [];

let timeLeft = 20 * 60;
let timerInterval;


// ==========================================
// தேர்வை தொடங்கு
// ==========================================

function startQuiz() {

    const studentName =
        document.getElementById("studentName").value.trim();

    const examNo =
        document.getElementById("examNo").value.trim();

    if (studentName === "") {
        alert("தயவுசெய்து மாணவர் பெயரை உள்ளிடவும்.");
        return;
    }

    if (examNo === "") {
        alert("தயவுசெய்து தேர்வு எண்ணை உள்ளிடவும்.");
        return;
    }

    document.getElementById("student-info").style.display = "none";

    document.getElementById("quiz-section").style.display = "block";

    currentQuestion = 0;
    score = 0;
    selectedAnswers = [];

    timeLeft = 20 * 60;

    startTimer();

    showQuestion();
}


// ==========================================
// Timer
// ==========================================

function startTimer() {

    clearInterval(timerInterval);

    updateTimer();

    timerInterval = setInterval(function () {

        timeLeft--;

        updateTimer();

        if (timeLeft <= 0) {

            clearInterval(timerInterval);

            alert("⏰ நேரம் முடிந்துவிட்டது!");

            finishQuiz();
        }

    }, 1000);
}


function updateTimer() {

    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    document.getElementById("time").textContent =
        minutes + ":" + seconds;
}


// ==========================================
// கேள்வியை காண்பித்தல்
// ==========================================

function showQuestion() {

    const quizContainer =
        document.getElementById("quiz-container");

    const q = questions[currentQuestion];

    let html = "";

    html += `
        <div class="question-box">

            <h3>
                ${q.question}
            </h3>

            <div class="options">
    `;

    q.options.forEach(function(option, index) {

        html += `
            <label class="option">
                <input
                    type="radio"
                    name="answer"
                    value="${index}"
                >
                <span>${option}</span>
            </label>
        `;

    });

    html += `
            </div>

            <button
                type="button"
                onclick="nextQuestion()"
            >
                ${
                    currentQuestion === questions.length - 1
                    ? "🏁 தேர்வை முடிக்க"
                    : "➡️ அடுத்த வினா"
                }
            </button>

        </div>
    `;

    quizContainer.innerHTML = html;
}


// ==========================================
// அடுத்த வினா
// ==========================================

function nextQuestion() {

    const selected =
        document.querySelector(
            'input[name="answer"]:checked'
        );

    if (!selected) {

        alert("⚠️ முதலில் ஒரு விடையைத் தேர்ந்தெடுக்கவும்.");

        return;
    }

    const selectedAnswer =
        Number(selected.value);

    selectedAnswers[currentQuestion] =
        selectedAnswer;

    if (
        selectedAnswer ===
        questions[currentQuestion].answer
    ) {

        score++;

    }

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        finishQuiz();
    }
}


// ==========================================
// தேர்வை முடித்தல்
// ==========================================

function finishQuiz() {

    clearInterval(timerInterval);

    document.getElementById("quiz-section").style.display =
        "none";

    document.getElementById("result-section").style.display =
        "block";

    showResult();
}


// ==========================================
// முடிவு / Score
// ==========================================

function showResult() {

    const total = questions.length;

    const percentage =
        Math.round((score / total) * 100);

    const studentName =
        document.getElementById("studentName").value;

    const examNo =
        document.getElementById("examNo").value;

    document.getElementById("score").innerHTML = `

        <div class="result-box">

            <h3>🎓 மாணவர் விவரம்</h3>

            <p>
                <strong>மாணவர் பெயர்:</strong>
                ${studentName}
            </p>

            <p>
                <strong>தேர்வு எண்:</strong>
                ${examNo}
            </p>

            <hr>

            <h2>
                🏆 உங்கள் மதிப்பெண்
            </h2>

            <p>
                <strong>${score}</strong>
                / ${total}
            </p>

            <p>
                📊 சதவீதம்:
                <strong>${percentage}%</strong>
            </p>

        </div>

    `;

    showWrongAnswers();
}


// ==========================================
// தவறான விடைகளைக் காண்பித்தல்
// ==========================================

function showWrongAnswers() {

    const wrongList =
        document.getElementById("wrong-list");

    let html = "";

    let wrongCount = 0;

    questions.forEach(function(q, index) {

        const userAnswer =
            selectedAnswers[index];

        if (userAnswer !== q.answer) {

            wrongCount++;

            const userText =
                userAnswer === undefined
                ? "விடை தேர்வு செய்யவில்லை"
                : q.options[userAnswer];

            const correctText =
                q.options[q.answer];

            html += `

                <div class="wrong-item">

                    <p>
                        <strong>
                            ${q.question}
                        </strong>
                    </p>

                    <p>
                        ❌ நீங்கள் தேர்வு செய்தது:
                        <strong>${userText}</strong>
                    </p>

                    <p>
                        ✅ சரியான விடை:
                        <strong>${correctText}</strong>
                    </p>

                </div>

            `;

        }

    });


    if (wrongCount === 0) {

        html = `
            <div class="perfect">
                🎉 அருமை! அனைத்து வினாக்களுக்கும்
                சரியான விடையைத் தேர்வு செய்துள்ளீர்கள்!
            </div>
        `;

    }

    wrongList.innerHTML = html;
}
