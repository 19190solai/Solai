// ======================================================
// 12ஆம் வகுப்பு தமிழ் - இயல் 1 வினாடி வினா
// JavaScript File
// ======================================================

const questions = [

    {
        question: "1. தமிழ் மொழியின் தொன்மையான இலக்கண நூல் எது?",
        options: [
            "நன்னூல்",
            "தொல்காப்பியம்",
            "யாப்பருங்கலம்",
            "வீரசோழியம்"
        ],
        answer: 1
    },

    {
        question: "2. தொல்காப்பியம் எத்தனை அதிகாரங்களைக் கொண்டது?",
        options: [
            "2",
            "3",
            "4",
            "5"
        ],
        answer: 1
    },

    {
        question: "3. தொல்காப்பியத்தின் மூன்று அதிகாரங்கள் எவை?",
        options: [
            "எழுத்து, சொல், பொருள்",
            "அறம், பொருள், இன்பம்",
            "இயல், இசை, நாடகம்",
            "உரை, செய்யுள், நாடகம்"
        ],
        answer: 0
    },

    {
        question: "4. தொல்காப்பியத்தின் முதல் அதிகாரம் எது?",
        options: [
            "சொல்லதிகாரம்",
            "பொருளதிகாரம்",
            "எழுத்ததிகாரம்",
            "அணியதிகாரம்"
        ],
        answer: 2
    },

    {
        question: "5. தொல்காப்பியத்தின் இரண்டாவது அதிகாரம் எது?",
        options: [
            "எழுத்ததிகாரம்",
            "சொல்லதிகாரம்",
            "பொருளதிகாரம்",
            "யாப்பதிகாரம்"
        ],
        answer: 1
    },

    {
        question: "6. தொல்காப்பியத்தின் மூன்றாவது அதிகாரம் எது?",
        options: [
            "பொருளதிகாரம்",
            "எழுத்ததிகாரம்",
            "சொல்லதிகாரம்",
            "அணியதிகாரம்"
        ],
        answer: 0
    },

    {
        question: "7. தமிழ் எழுத்துகள் எத்தனை?",
        options: [
            "216",
            "247",
            "246",
            "12"
        ],
        answer: 1
    },

    {
        question: "8. தமிழ் உயிரெழுத்துகள் எத்தனை?",
        options: [
            "10",
            "12",
            "18",
            "216"
        ],
        answer: 1
    },

    {
        question: "9. தமிழ் மெய்யெழுத்துகள் எத்தனை?",
        options: [
            "12",
            "18",
            "216",
            "247"
        ],
        answer: 1
    },

    {
        question: "10. உயிர்மெய் எழுத்துகள் எத்தனை?",
        options: [
            "12",
            "18",
            "216",
            "247"
        ],
        answer: 2
    },

    {
        question: "11. ஆய்த எழுத்து எது?",
        options: [
            "அ",
            "க்",
            "ஃ",
            "ம்"
        ],
        answer: 2
    },

    {
        question: "12. குறில் எழுத்துகள் எத்தனை?",
        options: [
            "5",
            "7",
            "12",
            "18"
        ],
        answer: 0
    },

    {
        question: "13. நெடில் எழுத்துகள் எத்தனை?",
        options: [
            "5",
            "7",
            "12",
            "18"
        ],
        answer: 0
    },

    {
        question: "14. வல்லின எழுத்துகள் எத்தனை?",
        options: [
            "5",
            "6",
            "7",
            "8"
        ],
        answer: 1
    },

    {
        question: "15. மெல்லின எழுத்துகள் எத்தனை?",
        options: [
            "6",
            "7",
            "8",
            "10"
        ],
        answer: 0
    },

    {
        question: "16. இடையின எழுத்துகள் எத்தனை?",
        options: [
            "5",
            "6",
            "7",
            "8"
        ],
        answer: 1
    },

    {
        question: "17. வல்லின எழுத்துகளில் ஒன்று எது?",
        options: [
            "ங",
            "ஞ",
            "க",
            "ம"
        ],
        answer: 2
    },

    {
        question: "18. மெல்லின எழுத்துகளில் ஒன்று எது?",
        options: [
            "க",
            "ச",
            "ங",
            "ற"
        ],
        answer: 2
    },

    {
        question: "19. இடையின எழுத்துகளில் ஒன்று எது?",
        options: [
            "ய",
            "ங",
            "ட",
            "ப"
        ],
        answer: 0
    },

    {
        question: "20. தமிழ் இலக்கணத்தில் சொல்லின் வகைகளில் ஒன்று எது?",
        options: [
            "பெயர்ச்சொல்",
            "எழுத்து",
            "உயிர்",
            "மெய்"
        ],
        answer: 0
    },

    {
        question: "21. ஒரு பொருளின் பெயரைக் குறிக்கும் சொல் எது?",
        options: [
            "வினைச்சொல்",
            "பெயர்ச்சொல்",
            "இடைச்சொல்",
            "உரிச்சொல்"
        ],
        answer: 1
    },

    {
        question: "22. செயலைக் குறிக்கும் சொல் எது?",
        options: [
            "பெயர்ச்சொல்",
            "வினைச்சொல்",
            "உரிச்சொல்",
            "இடைச்சொல்"
        ],
        answer: 1
    },

    {
        question: "23. பெயர்ச்சொல்லின் தன்மையை விளக்கும் சொல் எது?",
        options: [
            "வினைச்சொல்",
            "இடைச்சொல்",
            "உரிச்சொல்",
            "பெயர்ச்சொல்"
        ],
        answer: 2
    },

    {
        question: "24. இரண்டு சொற்களை இணைக்க உதவும் சொல் எது?",
        options: [
            "இடைச்சொல்",
            "பெயர்ச்சொல்",
            "வினைச்சொல்",
            "உரிச்சொல்"
        ],
        answer: 0
    },

    {
        question: "25. தமிழில் வேற்றுமைகள் எத்தனை?",
        options: [
            "5",
            "6",
            "7",
            "8"
        ],
        answer: 3
    },

    {
        question: "26. முதல் வேற்றுமை எது?",
        options: [
            "எழுவாய் வேற்றுமை",
            "செயப்படுபொருள் வேற்றுமை",
            "கருவி வேற்றுமை",
            "கொடை வேற்றுமை"
        ],
        answer: 0
    },

    {
        question: "27. எழுவாய் வேற்றுமையின் உருபு என்ன?",
        options: [
            "ஐ",
            "ஆல்",
            "கு",
            "உருபு இல்லை"
        ],
        answer: 3
    },

    {
        question: "28. இரண்டாம் வேற்றுமையின் உருபு எது?",
        options: [
            "ஐ",
            "ஆல்",
            "கு",
            "இன்"
        ],
        answer: 0
    },

    {
        question: "29. மூன்றாம் வேற்றுமையின் உருபுகளில் ஒன்று எது?",
        options: [
            "ஐ",
            "ஆல்",
            "கு",
            "இன்"
        ],
        answer: 1
    },

    {
        question: "30. நான்காம் வேற்றுமையின் உருபு எது?",
        options: [
            "ஐ",
            "ஆல்",
            "கு",
            "இன்"
        ],
        answer: 2
    },

    {
        question: "31. தமிழ் இலக்கியத்தின் முக்கியமான சிறப்புகளில் ஒன்று எது?",
        options: [
            "தொன்மை",
            "புதியமை மட்டும்",
            "வெளிமொழிச் சார்பு",
            "இலக்கணமின்மை"
        ],
        answer: 0
    },

    {
        question: "32. சங்க இலக்கியங்கள் பொதுவாக எவ்வாறு பிரிக்கப்படுகின்றன?",
        options: [
            "அகம், புறம்",
            "அறம், பொருள்",
            "உரை, செய்யுள்",
            "இயல், இசை"
        ],
        answer: 0
    },

    {
        question: "33. அகப்பொருள் எதனைப் பற்றியது?",
        options: [
            "போர்",
            "அரசியல்",
            "காதல் மற்றும் உள்ளுணர்வுகள்",
            "வணிகம்"
        ],
        answer: 2
    },

    {
        question: "34. புறப்பொருள் எதனைப் பற்றியது?",
        options: [
            "காதல்",
            "வீரம், போர், கொடை போன்றவை",
            "கனவு",
            "குடும்ப வாழ்க்கை மட்டும்"
        ],
        answer: 1
    },

    {
        question: "35. சங்க இலக்கியத்தின் முக்கிய தொகுப்புகளில் ஒன்று எது?",
        options: [
            "எட்டுத்தொகை",
            "நாலடியார்",
            "கம்பராமாயணம்",
            "பெரியபுராணம்"
        ],
        answer: 0
    },

    {
        question: "36. மற்றொரு சங்க இலக்கியத் தொகுப்பு எது?",
        options: [
            "பத்துப்பாட்டு",
            "திருக்குறள்",
            "சிலப்பதிகாரம்",
            "மணிமேகலை"
        ],
        answer: 0
    },

    {
        question: "37. திருக்குறளை இயற்றியவர் யார்?",
        options: [
            "கம்பர்",
            "திருவள்ளுவர்",
            "இளங்கோவடிகள்",
            "சீத்தலைச் சாத்தனார்"
        ],
        answer: 1
    },

    {
        question: "38. திருக்குறளில் எத்தனை குறள்கள் உள்ளன?",
        options: [
            "1000",
            "1200",
            "1330",
            "1500"
        ],
        answer: 2
    },

    {
        question: "39. திருக்குறளின் மூன்று பிரிவுகள் எவை?",
        options: [
            "அகம், புறம், களவு",
            "அறம், பொருள், இன்பம்",
            "எழுத்து, சொல், பொருள்",
            "இயல், இசை, நாடகம்"
        ],
        answer: 1
    },

    {
        question: "40. தமிழ் மொழியின் சிறப்பை எடுத்துரைக்கும் முக்கிய பண்பு எது?",
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
// மாறிகள்
// ======================================================

let currentQuestion = 0;
let userAnswers = [];
let timeLeft = 20 * 60;
let timerInterval = null;
let quizStarted = false;


// ======================================================
// தேர்வை தொடங்குதல்
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

    userAnswers = new Array(questions.length).fill(null);
    currentQuestion = 0;
    timeLeft = 20 * 60;
    quizStarted = true;

    document.getElementById("student-info").style.display = "none";
    document.getElementById("quiz-section").style.display = "block";
    document.getElementById("result-section").style.display = "none";

    displayQuestions();
    startTimer();
}


// ======================================================
// கேள்விகளை காட்டுதல்
// ======================================================

function displayQuestions() {

    const quizContainer =
        document.getElementById("quiz-container");

    quizContainer.innerHTML = "";

    questions.forEach((q, index) => {

        const questionBox = document.createElement("div");

        questionBox.className = "question-box";

        questionBox.innerHTML = `
            <h3>
                ${q.question}
            </h3>

            <div class="options">
                ${q.options.map((option, optionIndex) => `
                    <label class="option">
                        <input
                            type="radio"
                            name="question${index}"
                            value="${optionIndex}"
                            onchange="saveAnswer(${index}, ${optionIndex})"
                        >
                        <span>${option}</span>
                    </label>
                `).join("")}
            </div>
        `;

        quizContainer.appendChild(questionBox);
    });
}


// ======================================================
// மாணவர் விடையை சேமித்தல்
// ======================================================

function saveAnswer(questionIndex, answerIndex) {

    userAnswers[questionIndex] = answerIndex;
}


// ======================================================
// Timer
// ======================================================

function startTimer() {

    clearInterval(timerInterval);

    updateTimer();

    timerInterval = setInterval(() => {

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
// Timer காட்டுதல்
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
// தேர்வை சமர்ப்பித்தல்
// ======================================================

function submitQuiz() {

    if (!quizStarted) {
        return;
    }

    clearInterval(timerInterval);

    let score = 0;

    let wrongAnswers = [];

    questions.forEach((question, index) => {

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
        Math.round((score / questions.length) * 100);


    // மாணவர் விவரம்
    const studentName =
        document.getElementById("studentName").value.trim();

    const studentClass =
        document.getElementById("studentClass").value.trim();

    const examNo =
        document.getElementById("examNo").value.trim();


    // Quiz பகுதியை மறைத்தல்
    document.getElementById("quiz-section").style.display = "none";

    // Result பகுதியை காட்டுதல்
    document.getElementById("result-section").style.display = "block";


    // Score
    document.getElementById("score").innerHTML = `
        <div class="result-card">

            <h3>👤 மாணவர்: ${studentName}</h3>

            <p>🏫 வகுப்பு: ${studentClass}</p>

            <p>🔢 தேர்வு எண்: ${examNo}</p>

            <h2>🏆 மதிப்பெண்</h2>

            <div class="final-score">
                ${score} / ${questions.length}
            </div>

            <h3>📊 சதவீதம்: ${percentage}%</h3>

        </div>
    `;


    // தவறான விடைகள்
    const wrongList =
        document.getElementById("wrong-list");

    if (wrongAnswers.length === 0) {

        wrongList.innerHTML = `
            <div class="correct-message">
                🎉 அருமை! அனைத்து வினாக்களுக்கும்
                சரியான விடை அளித்துள்ளீர்கள்!
            </div>
        `;

    } else {

        wrongList.innerHTML = wrongAnswers.map(item => `
            <div class="wrong-item">

                <h4>
                    ❌ வினா ${item.number}
                </h4>

                <p>
                    <strong>${item.question}</strong>
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
        `).join("");
    }


    quizStarted = false;

    // முடிவுப் பகுதிக்கு கொண்டு செல்லுதல்
    document.getElementById("result-section")
        .scrollIntoView({
            behavior: "smooth"
        });
}


// ======================================================
// பக்கம் refresh / close செய்யும்போது timer நிறுத்துதல்
// ======================================================

window.addEventListener("beforeunload", function () {

    if (timerInterval) {
        clearInterval(timerInterval);
    }

});
