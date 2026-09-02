// ======================================================
// 12ஆம் வகுப்பு தமிழ் - இயல் 1 வினாடி வினா
// 40 வினாக்கள் - Next Button Version
// ======================================================

const questions = [

    {
        question: "தமிழ் மொழியின் தொன்மையான இலக்கண நூல் எது?",
        options: ["நன்னூல்", "தொல்காப்பியம்", "யாப்பருங்கலம்", "வீரசோழியம்"],
        answer: 1
    },

    {
        question: "தொல்காப்பியம் எத்தனை அதிகாரங்களைக் கொண்டது?",
        options: ["2", "3", "4", "5"],
        answer: 1
    },

    {
        question: "தொல்காப்பியத்தின் மூன்று அதிகாரங்கள் எவை?",
        options: [
            "எழுத்து, சொல், பொருள்",
            "அறம், பொருள், இன்பம்",
            "இயல், இசை, நாடகம்",
            "உரை, செய்யுள், நாடகம்"
        ],
        answer: 0
    },

    {
        question: "தொல்காப்பியத்தின் முதல் அதிகாரம் எது?",
        options: [
            "சொல்லதிகாரம்",
            "பொருளதிகாரம்",
            "எழுத்ததிகாரம்",
            "அணியதிகாரம்"
        ],
        answer: 2
    },

    {
        question: "தொல்காப்பியத்தின் இரண்டாவது அதிகாரம் எது?",
        options: [
            "எழுத்ததிகாரம்",
            "சொல்லதிகாரம்",
            "பொருளதிகாரம்",
            "யாப்பதிகாரம்"
        ],
        answer: 1
    },

    {
        question: "தொல்காப்பியத்தின் மூன்றாவது அதிகாரம் எது?",
        options: [
            "பொருளதிகாரம்",
            "எழுத்ததிகாரம்",
            "சொல்லதிகாரம்",
            "அணியதிகாரம்"
        ],
        answer: 0
    },

    {
        question: "தமிழில் மொத்தம் எத்தனை எழுத்துகள் உள்ளன?",
        options: ["216", "247", "246", "238"],
        answer: 1
    },

    {
        question: "தமிழ் உயிரெழுத்துகள் எத்தனை?",
        options: ["10", "12", "18", "216"],
        answer: 1
    },

    {
        question: "தமிழ் மெய்யெழுத்துகள் எத்தனை?",
        options: ["12", "18", "216", "247"],
        answer: 1
    },

    {
        question: "தமிழ் உயிர்மெய் எழுத்துகள் எத்தனை?",
        options: ["12", "18", "216", "247"],
        answer: 2
    },

    {
        question: "ஆய்த எழுத்து எது?",
        options: ["அ", "க்", "ஃ", "ம்"],
        answer: 2
    },

    {
        question: "குறில் எழுத்துகள் எத்தனை?",
        options: ["5", "7", "12", "18"],
        answer: 0
    },

    {
        question: "நெடில் எழுத்துகள் எத்தனை?",
        options: ["5", "7", "12", "18"],
        answer: 0
    },

    {
        question: "வல்லின எழுத்துகள் எத்தனை?",
        options: ["5", "6", "7", "8"],
        answer: 1
    },

    {
        question: "மெல்லின எழுத்துகள் எத்தனை?",
        options: ["5", "6", "7", "8"],
        answer: 1
    },

    {
        question: "இடையின எழுத்துகள் எத்தனை?",
        options: ["5", "6", "7", "8"],
        answer: 1
    },

    {
        question: "வல்லின எழுத்துகளில் ஒன்று எது?",
        options: ["ங", "ஞ", "க", "ம"],
        answer: 2
    },

    {
        question: "மெல்லின எழுத்துகளில் ஒன்று எது?",
        options: ["க", "ச", "ங", "ற"],
        answer: 2
    },

    {
        question: "இடையின எழுத்துகளில் ஒன்று எது?",
        options: ["ய", "ங", "ட", "ப"],
        answer: 0
    },

    {
        question: "ஒரு பொருளின் பெயரைக் குறிக்கும் சொல் எது?",
        options: ["வினைச்சொல்", "பெயர்ச்சொல்", "இடைச்சொல்", "உரிச்சொல்"],
        answer: 1
    },

    {
        question: "செயலைக் குறிக்கும் சொல் எது?",
        options: ["பெயர்ச்சொல்", "வினைச்சொல்", "உரிச்சொல்", "இடைச்சொல்"],
        answer: 1
    },

    {
        question: "பெயர்ச்சொல்லின் தன்மையை விளக்கும் சொல் எது?",
        options: ["வினைச்சொல்", "இடைச்சொல்", "உரிச்சொல்", "பெயர்ச்சொல்"],
        answer: 2
    },

    {
        question: "சொற்களை இணைக்க உதவும் சொல் எது?",
        options: ["இடைச்சொல்", "பெயர்ச்சொல்", "வினைச்சொல்", "உரிச்சொல்"],
        answer: 0
    },

    {
        question: "தமிழில் வேற்றுமைகள் எத்தனை?",
        options: ["5", "6", "7", "8"],
        answer: 3
    },

    {
        question: "முதல் வேற்றுமை எது?",
        options: [
            "எழுவாய் வேற்றுமை",
            "செயப்படுபொருள் வேற்றுமை",
            "கருவி வேற்றுமை",
            "கொடை வேற்றுமை"
        ],
        answer: 0
    },

    {
        question: "எழுவாய் வேற்றுமையின் உருபு என்ன?",
        options: ["ஐ", "ஆல்", "கு", "உருபு இல்லை"],
        answer: 3
    },

    {
        question: "இரண்டாம் வேற்றுமையின் உருபு எது?",
        options: ["ஐ", "ஆல்", "கு", "இன்"],
        answer: 0
    },

    {
        question: "மூன்றாம் வேற்றுமையின் உருபுகளில் ஒன்று எது?",
        options: ["ஐ", "ஆல்", "கு", "இன்"],
        answer: 1
    },

    {
        question: "நான்காம் வேற்றுமையின் உருபு எது?",
        options: ["ஐ", "ஆல்", "கு", "இன்"],
        answer: 2
    },

    {
        question: "தமிழ் இலக்கியத்தின் முக்கியமான சிறப்புகளில் ஒன்று எது?",
        options: [
            "தொன்மை",
            "புதியமை மட்டும்",
            "வெளிமொழிச் சார்பு",
            "இலக்கியமின்மை"
        ],
        answer: 0
    },

    {
        question: "சங்க இலக்கியங்கள் பொதுவாக எவ்வாறு பிரிக்கப்படுகின்றன?",
        options: [
            "அகம், புறம்",
            "அறம், பொருள்",
            "உரை, செய்யுள்",
            "இயல், இசை"
        ],
        answer: 0
    },

    {
        question: "அகப்பொருள் எதனைப் பற்றியது?",
        options: [
            "போர்",
            "அரசியல்",
            "காதல் மற்றும் உள்ளுணர்வுகள்",
            "வணிகம்"
        ],
        answer: 2
    },

    {
        question: "புறப்பொருள் எதனைப் பற்றியது?",
        options: [
            "காதல்",
            "வீரம், போர், கொடை போன்றவை",
            "கனவு",
            "குடும்ப வாழ்க்கை மட்டும்"
        ],
        answer: 1
    },

    {
        question: "சங்க இலக்கியத்தின் முக்கிய தொகுப்புகளில் ஒன்று எது?",
        options: [
            "எட்டுத்தொகை",
            "நாலடியார்",
            "கம்பராமாயணம்",
            "பெரியபுராணம்"
        ],
        answer: 0
    },

    {
        question: "மற்றொரு சங்க இலக்கியத் தொகுப்பு எது?",
        options: [
            "பத்துப்பாட்டு",
            "திருக்குறள்",
            "சிலப்பதிகாரம்",
            "மணிமேகலை"
        ],
        answer: 0
    },

    {
        question: "திருக்குறளை இயற்றியவர் யார்?",
        options: [
            "கம்பர்",
            "திருவள்ளுவர்",
            "இளங்கோவடிகள்",
            "சீத்தலைச் சாத்தனார்"
        ],
        answer: 1
    },

    {
        question: "திருக்குறளில் எத்தனை குறள்கள் உள்ளன?",
        options: ["1000", "1200", "1330", "1500"],
        answer: 2
    },

    {
        question: "திருக்குறளின் மூன்று பிரிவுகள் எவை?",
        options: [
            "அகம், புறம், களவு",
            "அறம், பொருள், இன்பம்",
            "எழுத்து, சொல், பொருள்",
            "இயல், இசை, நாடகம்"
        ],
        answer: 1
    },

    {
        question: "தமிழ் மொழியின் சிறப்பை எடுத்துரைக்கும் முக்கிய பண்பு எது?",
        options: [
            "தொன்மையும் தொடர்ச்சியும்",
            "மொழியின்மை",
            "இலக்கியமின்மை",
            "இலக்கணமின்மை"
        ],
        answer: 0
    }

];


// ======================================================
// VARIABLES
// ======================================================

let currentQuestion = 0;
let userAnswers = [];
let timeLeft = 20 * 60;
let timerInterval = null;
let quizStarted = false;


// ======================================================
// தேர்வை தொடங்கு
// ======================================================

function startQuiz() {

    const studentName =
        document.getElementById("studentName").value.trim();

    const studentClass =
        document.getElementById("studentClass").value.trim();

    const examNo =
        document.getElementById("examNo").value.trim();

    if (studentName === "") {
        alert("தயவுசெய்து மாணவர் பெயரை உள்ளிடவும்.");
        return;
    }

    if (studentClass === "") {
        alert("தயவுசெய்து வகுப்பை உள்ளிடவும்.");
        return;
    }

    if (examNo === "") {
        alert("தயவுசெய்து தேர்வு எண்ணை உள்ளிடவும்.");
        return;
    }

    currentQuestion = 0;

    userAnswers =
        new Array(questions.length).fill(null);

    timeLeft = 20 * 60;

    quizStarted = true;

    document.getElementById("student-info").style.display = "none";

    document.getElementById("quiz-section").style.display = "block";

    document.getElementById("result-section").style.display = "none";

    showQuestion();

    startTimer();
}


// ======================================================
// ஒரு வினாவை மட்டும் காட்டுதல்
// ======================================================

function showQuestion() {

    const container =
        document.getElementById("quiz-container");

    const q = questions[currentQuestion];

    container.innerHTML = `

        <div class="question-box">

            <div class="question-number">
                வினா ${currentQuestion + 1} / ${questions.length}
            </div>

            <h3 class="question-text">
                ${q.question}
            </h3>

            <div class="options">

                ${q.options.map((option, index) => `

                    <label class="option">

                        <input
                            type="radio"
                            name="answer"
                            value="${index}"
                            onchange="selectAnswer(${index})"
                        >

                        <span>${option}</span>

                    </label>

                `).join("")}

            </div>

            <div class="navigation">

                ${
                    currentQuestion < questions.length - 1

                    ?

                    `<button
                        type="button"
                        onclick="nextQuestion()"
                        class="next-button"
                    >
                        ➡️ அடுத்த வினா
                    </button>`

                    :

                    `<button
                        type="button"
                        onclick="submitQuiz()"
                        class="submit-button"
                    >
                        ✅ தேர்வை முடிக்கவும்
                    </button>`
                }

            </div>

        </div>
    `;


    // ஏற்கனவே விடை தேர்ந்தெடுத்திருந்தால்
    if (userAnswers[currentQuestion] !== null) {

        const selected =
            document.querySelector(
                `input[name="answer"][value="${userAnswers[currentQuestion]}"]`
            );

        if (selected) {
            selected.checked = true;
        }
    }
}


// ======================================================
// விடையைத் தேர்ந்தெடுத்தல்
// ======================================================

function selectAnswer(answerIndex) {

    userAnswers[currentQuestion] =
        answerIndex;
}


// ======================================================
// அடுத்த வினா
// ======================================================

function nextQuestion() {

    if (userAnswers[currentQuestion] === null) {

        alert("தயவுசெய்து ஒரு விடையைத் தேர்ந்தெடுக்கவும்.");

        return;
    }

    if (currentQuestion < questions.length - 1) {

        currentQuestion++;

        showQuestion();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}


// ======================================================
// TIMER
// ======================================================

function startTimer() {

    clearInterval(timerInterval);

    updateTimer();

    timerInterval = setInterval(function () {

        if (timeLeft <= 0) {

            clearInterval(timerInterval);

            alert("⏰ நேரம் முடிந்துவிட்டது!");

            submitQuiz();

            return;
        }

        timeLeft--;

        updateTimer();

    }, 1000);
}


// ======================================================
// TIMER UPDATE
// ======================================================

function updateTimer() {

    const minutes =
        Math.floor(timeLeft / 60);

    const seconds =
        timeLeft % 60;

    const timeElement =
        document.getElementById("time");

    if (timeElement) {

        timeElement.textContent =
            String(minutes).padStart(2, "0") +
            ":" +
            String(seconds).padStart(2, "0");
    }
}


// ======================================================
// தேர்வை முடித்தல்
// ======================================================

function submitQuiz() {

    if (!quizStarted) {
        return;
    }

    clearInterval(timerInterval);

    let score = 0;

    let wrongAnswers = [];


    questions.forEach(function (question, index) {

        const userAnswer =
            userAnswers[index];

        if (userAnswer === question.answer) {

            score++;

        } else {

            wrongAnswers.push({

                number: index + 1,

                question: question.question,

                userAnswer:
                    userAnswer === null
                        ? "விடை தேர்ந்தெடுக்கவில்லை"
                        : question.options[userAnswer],

                correctAnswer:
                    question.options[question.answer]

            });
        }
    });


    const percentage =
        Math.round(
            (score / questions.length) * 100
        );


    const studentName =
        document.getElementById("studentName").value.trim();

    const studentClass =
        document.getElementById("studentClass").value.trim();

    const examNo =
        document.getElementById("examNo").value.trim();


    // Quiz மறை
    document.getElementById("quiz-section")
        .style.display = "none";


    // Result காட்டு
    document.getElementById("result-section")
        .style.display = "block";


    // Score
    document.getElementById("score").innerHTML = `

        <div class="result-card">

            <h3>👤 மாணவர்: ${studentName}</h3>

            <p>🏫 வகுப்பு: ${studentClass}</p>

            <p>🔢 தேர்வு எண்: ${examNo}</p>

            <h2>🏆 உங்கள் மதிப்பெண்</h2>

            <div class="final-score">
                ${score} / ${questions.length}
            </div>

            <h3>
                📊 சதவீதம்: ${percentage}%
            </h3>

        </div>
    `;


    // தவறான விடைகள்
    const wrongList =
        document.getElementById("wrong-list");


    if (wrongAnswers.length === 0) {

        wrongList.innerHTML = `

            <div class="correct-message">

                🎉 அருமை!

                <br>

                அனைத்து வினாக்களுக்கும்
                சரியான விடை அளித்துள்ளீர்கள்!

            </div>
        `;

    } else {

        wrongList.innerHTML =

            wrongAnswers.map(function (item) {

                return `

                    <div class="wrong-item">

                        <h4>
                            ❌ வினா ${item.number}
                        </h4>

                        <p>
                            <strong>
                                ${item.question}
                            </strong>
                        </p>

                        <p>
                            உங்கள் விடை:
                            <span class="user-answer">
                                ${item.userAnswer}
                            </span>
                        </p>

                        <p>
                            ✅ சரியான விடை:
                            <span class="correct-answer">
                                ${item.correctAnswer}
                            </span>
                        </p>

                    </div>

                `;

            }).join("");
    }


    quizStarted = false;


    document.getElementById("result-section")
        .scrollIntoView({
            behavior: "smooth"
        });
}


// ======================================================
// PAGE CLOSE
// ======================================================

window.addEventListener("beforeunload", function () {

    if (timerInterval) {

        clearInterval(timerInterval);
    }

});
