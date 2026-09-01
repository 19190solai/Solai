// ======================================================
// 12ஆம் வகுப்பு தமிழ் - முதல் இயல்
// 40 வினாக்கள் கொண்ட வினாடி வினா
// ======================================================

const questions = [

    {
        question: "தமிழின் தொன்மையான இலக்கண நூல் எது?",
        options: ["தொல்காப்பியம்", "நன்னூல்", "யாப்பருங்கலம்", "வீரசோழியம்"],
        answer: 0
    },

    {
        question: "தொல்காப்பியத்தின் ஆசிரியர் யார்?",
        options: ["தொல்காப்பியர்", "பவணந்தி முனிவர்", "இளங்கோவடிகள்", "சீத்தலைச் சாத்தனார்"],
        answer: 0
    },

    {
        question: "தொல்காப்பியம் எத்தனை அதிகாரங்களைக் கொண்டது?",
        options: ["2", "3", "4", "5"],
        answer: 1
    },

    {
        question: "தொல்காப்பியத்தின் மூன்று அதிகாரங்கள் யாவை?",
        options: [
            "எழுத்து, சொல், பொருள்",
            "அகம், புறம், யாப்பு",
            "எழுத்து, யாப்பு, அணி",
            "சொல், அணி, பொருள்"
        ],
        answer: 0
    },

    {
        question: "தொல்காப்பியத்தின் முதல் அதிகாரம் எது?",
        options: ["சொல்லதிகாரம்", "பொருளதிகாரம்", "எழுத்ததிகாரம்", "அணியதிகாரம்"],
        answer: 2
    },

    {
        question: "தொல்காப்பியத்தின் இரண்டாவது அதிகாரம் எது?",
        options: ["எழுத்ததிகாரம்", "சொல்லதிகாரம்", "பொருளதிகாரம்", "யாப்பதிகாரம்"],
        answer: 1
    },

    {
        question: "தொல்காப்பியத்தின் மூன்றாவது அதிகாரம் எது?",
        options: ["எழுத்ததிகாரம்", "சொல்லதிகாரம்", "பொருளதிகாரம்", "அணியதிகாரம்"],
        answer: 2
    },

    {
        question: "தமிழில் உயிரெழுத்துகளின் எண்ணிக்கை எத்தனை?",
        options: ["10", "12", "18", "216"],
        answer: 1
    },

    {
        question: "தமிழில் மெய்யெழுத்துகளின் எண்ணிக்கை எத்தனை?",
        options: ["12", "18", "216", "247"],
        answer: 1
    },

    {
        question: "தமிழில் உயிர்மெய்யெழுத்துகளின் எண்ணிக்கை எத்தனை?",
        options: ["18", "216", "247", "12"],
        answer: 1
    },

    {
        question: "தமிழ் எழுத்துகளின் மொத்த எண்ணிக்கை எத்தனை?",
        options: ["216", "247", "246", "238"],
        answer: 1
    },

    {
        question: "குறில் எழுத்துகளின் எண்ணிக்கை எத்தனை?",
        options: ["5", "7", "12", "18"],
        answer: 0
    },

    {
        question: "நெடில் எழுத்துகளின் எண்ணிக்கை எத்தனை?",
        options: ["5", "7", "12", "18"],
        answer: 0
    },

    {
        question: "வல்லின எழுத்துகள் எவை?",
        options: [
            "க ச ட த ப ற",
            "ங ஞ ண ந ம ன",
            "ய ர ல வ ழ ள",
            "அ ஆ இ ஈ உ ஊ"
        ],
        answer: 0
    },

    {
        question: "மெல்லின எழுத்துகள் எவை?",
        options: [
            "க ச ட த ப ற",
            "ங ஞ ண ந ம ன",
            "ய ர ல வ ழ ள",
            "அ ஆ இ ஈ உ ஊ"
        ],
        answer: 1
    },

    {
        question: "இடையின எழுத்துகள் எவை?",
        options: [
            "க ச ட த ப ற",
            "ங ஞ ண ந ம ன",
            "ய ர ல வ ழ ள",
            "அ ஆ இ ஈ உ ஊ"
        ],
        answer: 2
    },

    {
        question: "ஆய்த எழுத்து எது?",
        options: ["அ", "ஃ", "க்", "ஔ"],
        answer: 1
    },

    {
        question: "ஆய்த எழுத்தின் வேறு பெயர் என்ன?",
        options: ["முப்புள்ளி", "ஒற்றெழுத்து", "உயிரெழுத்து", "மெய்யெழுத்து"],
        answer: 0
    },

    {
        question: "தமிழில் முதன்மையான எழுத்து வகைகள் எவை?",
        options: [
            "உயிர், மெய்",
            "குறில், நெடில்",
            "வல்லினம், மெல்லினம்",
            "அகம், புறம்"
        ],
        answer: 0
    },

    {
        question: "சுட்டெழுத்துகள் எத்தனை வகைப்படும்?",
        options: ["2", "3", "4", "5"],
        answer: 1
    },

    {
        question: "அகச்சுட்டு என்பதற்கு எடுத்துக்காட்டு எது?",
        options: ["அவன்", "இவன்", "அந்த", "எந்த"],
        answer: 1
    },

    {
        question: "புறச்சுட்டு என்பதற்கு எடுத்துக்காட்டு எது?",
        options: ["இவன்", "இது", "அவன்", "இங்கு"],
        answer: 2
    },

    {
        question: "வினா எழுத்துகள் எத்தனை?",
        options: ["5", "6", "7", "8"],
        answer: 2
    },

    {
        question: "வினா எழுத்துகளுள் ஒன்று எது?",
        options: ["அ", "எ", "க", "த"],
        answer: 1
    },

    {
        question: "ஒரு பொருளின் பெயரை உணர்த்தும் சொல் எது?",
        options: ["பெயர்ச்சொல்", "வினைச்சொல்", "இடைச்சொல்", "உரிச்சொல்"],
        answer: 0
    },

    {
        question: "செயலைக் குறிக்கும் சொல் எது?",
        options: ["பெயர்ச்சொல்", "வினைச்சொல்", "உரிச்சொல்", "இடைச்சொல்"],
        answer: 1
    },

    {
        question: "பெயர்ச்சொல்லின் பண்பை விளக்கும் சொல் எது?",
        options: ["வினைச்சொல்", "உரிச்சொல்", "இடைச்சொல்", "பெயர்ச்சொல்"],
        answer: 1
    },

    {
        question: "பெயர்ச்சொல்லுக்கும் வினைச்சொல்லுக்கும் இடையில் நின்று பொருள் தருவது எது?",
        options: ["உரிச்சொல்", "இடைச்சொல்", "பெயர்ச்சொல்", "வினைச்சொல்"],
        answer: 1
    },

    {
        question: "ஒரு சொல்லின் அடிப்படை வடிவம் எவ்வாறு அழைக்கப்படுகிறது?",
        options: ["பகுதி", "விகுதி", "இடைநிலை", "சந்தி"],
        answer: 0
    },

    {
        question: "வினைச்சொல்லின் காலத்தை உணர்த்துவது எது?",
        options: ["பகுதி", "விகுதி", "இடைநிலை", "உருபு"],
        answer: 2
    },

    {
        question: "தமிழில் காலங்கள் எத்தனை?",
        options: ["2", "3", "4", "5"],
        answer: 1
    },

    {
        question: "இறந்த காலத்தை உணர்த்தும் வினைச்சொல் எது?",
        options: ["படிக்கிறான்", "படித்தான்", "படிப்பான்", "படிப்பவன்"],
        answer: 1
    },

    {
        question: "நிகழ்காலத்தை உணர்த்தும் வினைச்சொல் எது?",
        options: ["சென்றான்", "செல்கிறான்", "செல்வான்", "சென்றவன்"],
        answer: 1
    },

    {
        question: "எதிர்காலத்தை உணர்த்தும் வினைச்சொல் எது?",
        options: ["வருகிறான்", "வந்தான்", "வருவான்", "வந்தவன்"],
        answer: 2
    },

    {
        question: "ஒரு சொல் பல பொருள்களைத் தருவது எவ்வாறு அழைக்கப்படுகிறது?",
        options: ["ஒருபொருள் பன்மொழி", "பலபொருள் ஒரு சொல்", "உரிச்சொல்", "இடைச்சொல்"],
        answer: 1
    },

    {
        question: "பல சொற்கள் ஒரே பொருளைத் தருவது எவ்வாறு அழைக்கப்படுகிறது?",
        options: ["பலபொருள் ஒரு சொல்", "ஒருபொருள் பன்மொழி", "வினைமுற்று", "பெயரெச்சம்"],
        answer: 1
    },

    {
        question: "‘மரம்’ என்பது எந்த வகைச் சொல்?",
        options: ["வினைச்சொல்", "பெயர்ச்சொல்", "இடைச்சொல்", "உரிச்சொல்"],
        answer: 1
    },

    {
        question: "‘ஓடினான்’ என்பது எந்த வகைச் சொல்?",
        options: ["பெயர்ச்சொல்", "உரிச்சொல்", "வினைச்சொல்", "இடைச்சொல்"],
        answer: 2
    },

    {
        question: "‘அழகான மலர்’ என்பதில் ‘அழகான’ என்பது எது?",
        options: ["பெயர்ச்சொல்", "வினைச்சொல்", "உரிச்சொல்", "இடைச்சொல்"],
        answer: 2
    },

    {
        question: "‘மாணவன் பாடம் படித்தான்’ என்பதில் வினைச்சொல் எது?",
        options: ["மாணவன்", "பாடம்", "படித்தான்", "என்பதில்"],
        answer: 2
    },

    {
        question: "தமிழ் இலக்கணத்தின் முக்கியப் பிரிவுகளில் ஒன்று எது?",
        options: ["எழுத்து", "கணிதம்", "அறிவியல்", "வரலாறு"],
        answer: 0
    }

];

// ======================================================
// Quiz Variables
// ======================================================

let currentQuestion = 0;
let score = 0;
let userAnswers = [];
let timeLeft = 30 * 60; // 30 நிமிடங்கள்
let timer;

// ======================================================
// HTML Elements
// ======================================================

const quizBox = document.getElementById("quiz");
const nextButton = document.getElementById("next-btn");
const resultBox = document.getElementById("result");
const timerBox = document.getElementById("timer");

// ======================================================
// Timer
// ======================================================

function startTimer() {

    timer = setInterval(() => {

        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        if (timerBox) {
            timerBox.innerHTML =
                "⏱️ மீதமுள்ள நேரம்: " +
                minutes + ":" +
                (seconds < 10 ? "0" : "") +
                seconds;
        }

        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timer);
            finishQuiz();
        }

    }, 1000);
}

// ======================================================
// Show Question
// ======================================================

function showQuestion() {

    if (!quizBox) return;

    const q = questions[currentQuestion];

    let html = "";

    html += `
        <div class="question-box">
            <h3>
                வினா ${currentQuestion + 1} / ${questions.length}
            </h3>

            <p><strong>${q.question}</strong></p>

            <div class="options">
    `;

    q.options.forEach((option, index) => {

        html += `
            <label class="option">
                <input type="radio"
                       name="answer"
                       value="${index}">
                ${option}
            </label>
        `;

    });

    html += `
            </div>
        </div>
    `;

    quizBox.innerHTML = html;

    if (nextButton) {
        nextButton.innerHTML =
            currentQuestion === questions.length - 1
            ? "🏁 தேர்வை முடிக்கவும்"
            : "➡️ அடுத்த வினா";
    }
}

// ======================================================
// Next Question
// ======================================================

function nextQuestion() {

    const selected = document.querySelector(
        'input[name="answer"]:checked'
    );

    if (!selected) {
        alert("⚠️ ஒரு விடையைத் தேர்ந்தெடுக்கவும்!");
        return;
    }

    userAnswers[currentQuestion] =
        Number(selected.value);

    if (
        userAnswers[currentQuestion] ===
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

// ======================================================
// Finish Quiz
// ======================================================

function finishQuiz() {

    clearInterval(timer);

    if (quizBox) {
        quizBox.style.display = "none";
    }

    if (nextButton) {
        nextButton.style.display = "none";
    }

    let percentage =
        Math.round((score / questions.length) * 100);

    let html = "";

    html += `
        <div class="final-result">

            <h2>🎉 தேர்வு முடிந்தது!</h2>

            <h3>
                உங்கள் மதிப்பெண்:
                ${score} / ${questions.length}
            </h3>

            <h3>
                📊 சதவீதம்: ${percentage}%
            </h3>

            <hr>

            <h3>❌ தவறான விடைகளின் சரியான பதில்கள்</h3>

            <div class="wrong-list">
    `;

    let wrongCount = 0;

    questions.forEach((q, index) => {

        if (userAnswers[index] !== q.answer) {

            wrongCount++;

            html += `
                <div class="wrong-answer">

                    <p>
                        <strong>
                            ${index + 1}. ${q.question}
                        </strong>
                    </p>

                    <p>
                        நீங்கள் தேர்ந்தெடுத்தது:
                        <span>
                            ${
                                userAnswers[index] !== undefined
                                ? q.options[userAnswers[index]]
                                : "விடை தேர்ந்தெடுக்கவில்லை"
                            }
                        </span>
                    </p>

                    <p>
                        ✅ சரியான விடை:
                        <strong>
                            ${q.options[q.answer]}
                        </strong>
                    </p>

                </div>
            `;
        }

    });

    if (wrongCount === 0) {

        html += `
            <h3>
                🏆 அருமை! அனைத்து வினாக்களுக்கும்
                சரியான விடை அளித்துள்ளீர்கள்!
            </h3>
        `;

    }

    html += `
            </div>

            <br>

            <button onclick="location.reload()">
                🔄 மீண்டும் தேர்வு எழுதுக
            </button>

        </div>
    `;

    if (resultBox) {
        resultBox.innerHTML = html;
        resultBox.style.display = "block";
    }
}

// ======================================================
// Start Quiz
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    showQuestion();
    startTimer();

    if (nextButton) {
        nextButton.addEventListener(
            "click",
            nextQuestion
        );
    }

});
