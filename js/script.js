/* =====================================================
   OPERATSION TIZIMLAR RIVOJI
   TEST TIZIMI
   ===================================================== */


/* ================= DARS ================= */

function startLesson() {

    const periods =
        document.getElementById("periods");

    if (periods) {

        periods.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* ================= TESTGA O'TISH ================= */

function goToQuiz() {

    window.location.href = "quiz.html";

}


/* ================= TEST SAVOLLARI ================= */

const questions = [

    {
        question:
            "Operatsion tizim nima?",

        answers: [
            "Kompyuterning asosiy boshqaruv dasturi",
            "Faqatgina antivirus dasturi",
            "Internet brauzeri",
            "Kompyuter o‘yini"
        ],

        correct: 0
    },


    {
        question:
            "Dastlabki elektron kompyuterlar qaysi davrda paydo bo‘lgan?",

        answers: [
            "1940-yillarda",
            "1980-yillarda",
            "2000-yillarda",
            "2020-yillarda"
        ],

        correct: 0
    },


    {
        question:
            "Batch Processing nima?",

        answers: [
            "Vazifalarni guruhlab, navbat bilan bajarish usuli",
            "Kompyuter o‘yini",
            "Internet tarmog‘i",
            "Antivirus dasturi"
        ],

        correct: 0
    },


    {
        question:
            "MS-DOS bilan ishlashning asosiy usuli qanday edi?",

        answers: [
            "Buyruqlarni klaviatura orqali kiritish",
            "Faqat sensor ekran orqali",
            "Faqat ovoz orqali",
            "Faqat kamera orqali"
        ],

        correct: 0
    },


    {
        question:
            "Windows 1.0 qachon taqdim etilgan?",

        answers: [
            "1985-yilda",
            "1995-yilda",
            "2001-yilda",
            "2015-yilda"
        ],

        correct: 0
    },


    {
        question:
            "Windows 95 qaysi yilda chiqarilgan?",

        answers: [
            "1985-yil",
            "1990-yil",
            "1995-yil",
            "2005-yil"
        ],

        correct: 2
    },


    {
        question:
            "Windows XP qaysi yilda taqdim etilgan?",

        answers: [
            "1995-yilda",
            "2001-yilda",
            "2008-yilda",
            "2015-yilda"
        ],

        correct: 1
    },


    {
        question:
            "Android asosan qaysi qurilmalarda keng qo‘llaniladi?",

        answers: [
            "Smartfon va planshetlarda",
            "Faqat printerlarda",
            "Faqat televizorlarda",
            "Faqat kalkulyatorlarda"
        ],

        correct: 0
    },


    {
        question:
            "iOS qaysi kompaniyaning operatsion tizimi?",

        answers: [
            "Microsoft",
            "Google",
            "Apple",
            "Intel"
        ],

        correct: 2
    },


    {
        question:
            "Linuxning muhim xususiyatlaridan biri nima?",

        answers: [
            "Ochiq kodli ekanligi",
            "Faqat telefonlarda ishlashi",
            "Faqat o‘yin uchun yaratilgani",
            "Internet bo‘lmasa ishlamasligi"
        ],

        correct: 0
    }

];


/* ================= TEST O'ZGARUVCHILARI ================= */

let currentQuestion = 0;

let score = 0;

let selectedAnswer = false;


/* ================= TESTNI YUKLASH ================= */

function loadQuestion() {

    const questionElement =
        document.getElementById("question");

    const answersElement =
        document.getElementById("answers");

    const questionNumber =
        document.getElementById("questionNumber");

    const scoreText =
        document.getElementById("scoreText");

    const nextButton =
        document.getElementById("nextButton");


    if (!questionElement || !answersElement) {

        return;

    }


    selectedAnswer = false;

    nextButton.disabled = true;


    const question =
        questions[currentQuestion];


    questionElement.textContent =
        question.question;


    questionNumber.textContent =
        `${currentQuestion + 1} / ${questions.length}`;


    scoreText.textContent =
        `Ball: ${score}`;


    answersElement.innerHTML = "";


    question.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement("button");


            button.className =
                "answer-button";


            button.textContent =
                answer;


            button.onclick = function () {

                selectAnswer(
                    index,
                    button
                );

            };


            answersElement.appendChild(
                button
            );

        }
    );

}


/* ================= JAVOBNI TANLASH ================= */

function selectAnswer(
    selectedIndex,
    selectedButton
) {

    if (selectedAnswer) {

        return;

    }


    selectedAnswer = true;


    const question =
        questions[currentQuestion];


    const allButtons =
        document.querySelectorAll(
            ".answer-button"
        );


    allButtons.forEach(
        (button, index) => {

            button.disabled = true;


            if (
                index === question.correct
            ) {

                button.classList.add(
                    "correct-answer"
                );

            }

        }
    );


    if (
        selectedIndex === question.correct
    ) {

        score++;

        selectedButton.classList.add(
            "correct-answer"
        );

    }

    else {

        selectedButton.classList.add(
            "wrong-answer"
        );

    }


    document.getElementById(
        "scoreText"
    ).textContent =
        `Ball: ${score}`;


    document.getElementById(
        "nextButton"
    ).disabled = false;

}


/* ================= KEYINGI SAVOL ================= */

function nextQuestion() {

    if (!selectedAnswer) {

        return;

    }


    currentQuestion++;


    if (
        currentQuestion <
        questions.length
    ) {

        loadQuestion();

    }

    else {

        showResult();

    }

}


/* ================= NATIJA ================= */

function showResult() {

    const quizBox =
        document.getElementById("quizBox");

    const resultBox =
        document.getElementById("resultBox");

    const finalScore =
        document.getElementById("finalScore");

    const resultMessage =
        document.getElementById("resultMessage");


    quizBox.style.display = "none";

    resultBox.style.display = "block";


    finalScore.textContent =
        `${score} / ${questions.length}`;


    let message;


    if (score === 10) {

        message =
            "🏆 Ajoyib! Siz mavzuni juda yaxshi bilasiz!";

    }

    else if (score >= 8) {

        message =
            "🔥 Juda yaxshi natija! Siz mavzuni yaxshi o‘zlashtirgansiz.";

    }

    else if (score >= 6) {

        message =
            "👍 Yaxshi! Lekin mavzuni yana bir marta takrorlash foydali.";

    }

    else if (score >= 4) {

        message =
            "📚 Yomon emas. Darsni yana bir marta ko‘rib chiqing.";

    }

    else {

        message =
            "💪 Harakat qiling! Darsni qayta o‘rganib, yana test ishlang.";

    }


    resultMessage.textContent =
        message;

}


/* ================= QAYTA ISHLASH ================= */

function restartQuiz() {

    currentQuestion = 0;

    score = 0;

    selectedAnswer = false;


    document.getElementById(
        "quizBox"
    ).style.display = "block";


    document.getElementById(
        "resultBox"
    ).style.display = "none";


    loadQuestion();

}


/* =====================================================
   3 TA GURUH BELLASHUVI
   COMPETITION SYSTEM
   ===================================================== */


/* =====================================================
   7.6 — BALLIK BELLASHUV SAVOLLARI
   ===================================================== */

const competitionQuestions = [

    /* ================= 10 BALL ================= */

    {
        question:
            "Operatsion tizimning asosiy vazifalaridan biri nima?",

        answers: [
            "Kompyuter resurslarini boshqarish",
            "Faqat musiqa tinglash",
            "Faqat rasm chizish",
            "Faqat internetga kirish"
        ],

        correct: 0,
        points: 10,
        difficulty: "easy"
    },


    {
        question:
            "Dastlabki elektron kompyuterlar taxminan qaysi davrda paydo bo‘lgan?",

        answers: [
            "1940-yillarda",
            "1970-yillarda",
            "1990-yillarda",
            "2010-yillarda"
        ],

        correct: 0,
        points: 10,
        difficulty: "easy"
    },


    {
        question:
            "MS-DOS foydalanuvchi bilan asosan qanday usulda ishlagan?",

        answers: [
            "Buyruqlar orqali",
            "Sensor ekran orqali",
            "Ovoz orqali",
            "Faqat sichqoncha orqali"
        ],

        correct: 0,
        points: 10,
        difficulty: "easy"
    },


    {
        question:
            "Windows 95 qaysi yilda chiqarilgan?",

        answers: [
            "1985-yil",
            "1990-yil",
            "1995-yil",
            "2005-yil"
        ],

        correct: 2,
        points: 10,
        difficulty: "easy"
    },


    /* ================= 20 BALL ================= */

    {
        question:
            "Batch Processing qanday ishlash usuli?",

        answers: [
            "Vazifalarni guruhlab, navbat bilan bajarish",
            "Faqat bitta dasturni ishlatish",
            "Internet orqali fayl yuborish",
            "Kompyuterni o‘chirish"
        ],

        correct: 0,
        points: 20,
        difficulty: "medium"
    },


    {
        question:
            "Windows 1.0 qaysi yilda chiqarilgan?",

        answers: [
            "1985-yil",
            "1995-yil",
            "2001-yil",
            "2010-yil"
        ],

        correct: 0,
        points: 20,
        difficulty: "medium"
    },


    {
        question:
            "Windows XP qachon taqdim etilgan?",

        answers: [
            "1995-yilda",
            "2001-yilda",
            "2005-yilda",
            "2010-yilda"
        ],

        correct: 1,
        points: 20,
        difficulty: "medium"
    },


    {
        question:
            "Android qaysi turdagi operatsion tizim hisoblanadi?",

        answers: [
            "Mobil operatsion tizim",
            "Faqat server tizimi",
            "Faqat o‘yin dasturi",
            "Antivirus dasturi"
        ],

        correct: 0,
        points: 20,
        difficulty: "medium"
    },


    /* ================= 30 BALL ================= */

    {
        question:
            "iOS qaysi kompaniya tomonidan ishlab chiqilgan?",

        answers: [
            "Microsoft",
            "Google",
            "Apple",
            "Intel"
        ],

        correct: 2,
        points: 30,
        difficulty: "hard"
    },


    {
        question:
            "Linuxning asosiy xususiyatlaridan biri nima?",

        answers: [
            "Ochiq kodli bo‘lishi",
            "Faqat telefonda ishlashi",
            "Faqat o‘yin uchun ishlatilishi",
            "Faqat internet bilan ishlashi"
        ],

        correct: 0,
        points: 30,
        difficulty: "hard"
    },


    {
        question:
            "Windows 11 qaysi kompaniyaning operatsion tizimi?",

        answers: [
            "Apple",
            "Microsoft",
            "Google",
            "Samsung"
        ],

        correct: 1,
        points: 30,
        difficulty: "hard"
    },


    {
        question:
            "Operatsion tizim foydalanuvchi va nima o‘rtasida aloqa o‘rnatadi?",

        answers: [
            "Kompyuter qurilmalari va dasturlar o‘rtasida",
            "Faqat printer va skaner o‘rtasida",
            "Faqat internet va brauzer o‘rtasida",
            "Faqat telefon va televizor o‘rtasida"
        ],

        correct: 0,
        points: 30,
        difficulty: "hard"
    }

];


/* =====================================================
   BELLASHUV O'ZGARUVCHILARI
   ===================================================== */

let competitionCurrentQuestion = 0;

let competitionScores = [0, 0, 0];

let competitionSelectedAnswer = false;


/* =====================================================
   7.7 — JOKER O'ZGARUVCHILARI
   ===================================================== */

let jokerState = [

    {
        fifty: false,
        double: false,
        time: false
    },

    {
        fifty: false,
        double: false,
        time: false
    },

    {
        fifty: false,
        double: false,
        time: false
    }

];


/* Hozirgi savolda 2x ball faolmi? */

let activeDoublePoints = false;


/* =====================================================
   GURUHLAR
   ===================================================== */

const competitionGroups = [0, 1, 2];


/* =====================================================
   7.2 — BELLASHUV TIMER
   ===================================================== */

let competitionTimerInterval = null;

let competitionTimeLeft = 20;


/* ================= TIMERNI TO'XTATISH ================= */

function stopCompetitionTimer() {

    if (
        competitionTimerInterval !== null
    ) {

        clearInterval(
            competitionTimerInterval
        );

        competitionTimerInterval = null;

    }

}


/* ================= TIMERNI BOSHLASH ================= */

function startCompetitionTimer() {

    stopCompetitionTimer();

    competitionTimeLeft = 20;


    const timerElement =
        document.getElementById(
            "competitionTimer"
        );


    const timerBox =
        document.querySelector(
            ".competition-timer"
        );


    if (!timerElement) {

        return;

    }


    timerElement.textContent =
        competitionTimeLeft;


    if (timerBox) {

        timerBox.classList.remove(
            "warning"
        );

        timerBox.classList.remove(
            "danger"
        );

    }


    competitionTimerInterval =
        setInterval(
            function () {

                competitionTimeLeft--;


                timerElement.textContent =
                    competitionTimeLeft;


                /* 10 soniyadan kam */

                if (
                    competitionTimeLeft <= 10 &&
                    competitionTimeLeft > 5
                ) {

                    if (timerBox) {

                        timerBox.classList.add(
                            "warning"
                        );

                    }

                }


                /* 5 soniyadan kam */

                if (
                    competitionTimeLeft <= 5
                ) {

                    if (timerBox) {

                        timerBox.classList.remove(
                            "warning"
                        );

                        timerBox.classList.add(
                            "danger"
                        );

                    }

                }


                /* VAQT TUGADI */

                if (
                    competitionTimeLeft <= 0
                ) {

                    stopCompetitionTimer();

                    playTimeoutSound();

                    alert(
                        "⏰ Vaqt tugadi!"
                    );


                    competitionSelectedAnswer =
                        true;


                    nextCompetitionQuestion();

                }

            },
            1000
        );

}


/* =====================================================
   GURUH NOMLARI
   ===================================================== */

function getCompetitionGroupName(
    groupIndex
) {

    const defaultNames = [

        "1-GURUH",
        "2-GURUH",
        "3-GURUH"

    ];


    const savedName =
        localStorage.getItem(
            `group${groupIndex + 1}`
        );


    return savedName ||
        defaultNames[groupIndex];

}


/* =====================================================
   GURUHNI ANIQLASH
   ===================================================== */

function getCurrentCompetitionGroup() {

    return (
        competitionCurrentQuestion % 3
    );

}


/* =====================================================
   7.6 — SAVOL BALLINI KO'RSATISH
   ===================================================== */

function updateQuestionPoints(
    question
) {

    const pointsElement =
        document.getElementById(
            "questionPoints"
        );


    if (!pointsElement) {

        return;

    }


    pointsElement.textContent =
        `${question.points} BALL`;


    pointsElement.className =
        "question-points";


    if (
        question.points === 10
    ) {

        pointsElement.classList.add(
            "points-easy"
        );

    }

    else if (
        question.points === 20
    ) {

        pointsElement.classList.add(
            "points-medium"
        );

    }

    else if (
        question.points === 30
    ) {

        pointsElement.classList.add(
            "points-hard"
        );

    }

}


/* =====================================================
   BELLASHUVNI YUKLASH
   ===================================================== */

function loadCompetitionQuestion() {

    const questionElement =
        document.getElementById(
            "competitionQuestion"
        );


    if (!questionElement) {

        return;

    }


    competitionSelectedAnswer =
        false;


    const question =
        competitionQuestions[
            competitionCurrentQuestion
        ];


    const groupIndex =
        getCurrentCompetitionGroup();


    const groupName =
        getCompetitionGroupName(
            groupIndex
        );


    /* ================= SAVOL ================= */

    questionElement.textContent =
        question.question;


    /* ================= SAVOL BALLI ================= */

    updateQuestionPoints(
        question
    );


    /* ================= 2X BALLNI TOZALASH ================= */

    activeDoublePoints = false;


    questionElement.classList.remove(
        "double-points-active"
    );


    /* ================= RAQAM ================= */

    document.getElementById(
        "competitionQuestionNumber"
    ).textContent =
        `${competitionCurrentQuestion + 1} / ${competitionQuestions.length}`;


    /* ================= GURUH SAVOLI ================= */

    const groupQuestion =
        Math.floor(
            competitionCurrentQuestion / 3
        ) + 1;


    document.getElementById(
        "groupQuestionNumber"
    ).textContent =
        `${groupQuestion} / 4`;


    /* ================= GURUH NOMI ================= */

    document.getElementById(
        "currentGroupName"
    ).textContent =
        groupName;


    document.getElementById(
        "turnTitle"
    ).textContent =
        `${groupName} navbati!`;


    /* ================= JAVOBLAR ================= */

    const answersContainer =
        document.getElementById(
            "competitionAnswers"
        );


    answersContainer.innerHTML = "";


    question.answers.forEach(
        function (
            answer,
            index
        ) {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "competition-answer";


            button.textContent =
                answer;


            button.onclick =
                function () {

                    selectCompetitionAnswer(
                        index,
                        button
                    );

                };


            answersContainer.appendChild(
                button
            );

        }
    );


    /* ================= NEXT ================= */

    document.getElementById(
        "competitionNext"
    ).disabled = true;


    /* ================= BALLARNI YANGILASH ================= */

    updateCompetitionScores();


    /* ================= JOKERLARNI YANGILASH ================= */

    updateJokerButtons();


    /* ================= TIMER ================= */

    startCompetitionTimer();

}


/* =====================================================
   JAVOB TANLASH
   ===================================================== */

function selectCompetitionAnswer(
    selectedIndex,
    selectedButton
) {

    stopCompetitionTimer();


    if (
        competitionSelectedAnswer
    ) {

        return;

    }


    competitionSelectedAnswer =
        true;


    const question =
        competitionQuestions[
            competitionCurrentQuestion
        ];


    const groupIndex =
        getCurrentCompetitionGroup();


    const allButtons =
        document.querySelectorAll(
            ".competition-answer"
        );


    allButtons.forEach(
        function (
            button,
            index
        ) {

            button.disabled =
                true;


            if (
                index === question.correct
            ) {

                button.classList.add(
                    "competition-correct"
                );

            }

        }
    );


    /* =================================================
       TO'G'RI JAVOB
       ================================================= */

    if (
        selectedIndex === question.correct
    ) {

        playCorrectSound();


        let earnedPoints =
            question.points;


        /* ================= 2X BALL ================= */

        if (
            activeDoublePoints
        ) {

            earnedPoints =
                question.points * 2;

        }


        competitionScores[
            groupIndex
        ] += earnedPoints;


        selectedButton.classList.add(
            "competition-correct"
        );


        /* 2X holatini o'chiramiz */

        activeDoublePoints =
            false;


        document
            .getElementById(
                "competitionQuestion"
            )
            ?.classList.remove(
                "double-points-active"
            );

    }


    /* =================================================
       NOTO'G'RI JAVOB
       ================================================= */

    else {

        playWrongSound();


        selectedButton.classList.add(
            "competition-wrong"
        );


        /* 2X joker ishlatilgan bo'lsa ham,
           noto'g'ri javobda ball berilmaydi */

        activeDoublePoints =
            false;


        document
            .getElementById(
                "competitionQuestion"
            )
            ?.classList.remove(
                "double-points-active"
            );

    }


    /* ================= BALLARNI YANGILASH ================= */

    updateCompetitionScores();


    /* ================= KEYINGI TUGMA ================= */

    document.getElementById(
        "competitionNext"
    ).disabled = false;

}


/* =====================================================
   BALLARNI YANGILASH
   ===================================================== */

function updateCompetitionScores() {

    const score1 =
        document.getElementById(
            "competitionScore1"
        );


    const score2 =
        document.getElementById(
            "competitionScore2"
        );


    const score3 =
        document.getElementById(
            "competitionScore3"
        );


    if (!score1) {

        return;

    }


    score1.textContent =
        competitionScores[0];


    score2.textContent =
        competitionScores[1];


    score3.textContent =
        competitionScores[2];

}


/* =====================================================
   KEYINGI SAVOL
   ===================================================== */

function nextCompetitionQuestion() {

    stopCompetitionTimer();


    if (
        !competitionSelectedAnswer
    ) {

        return;

    }


    competitionCurrentQuestion++;


    if (
        competitionCurrentQuestion <
        competitionQuestions.length
    ) {

        loadCompetitionQuestion();

    }

    else {

        showCompetitionResult();

    }

}


/* =====================================================
   7.5 — PROFESSIONAL YAKUNIY NATIJA
   ===================================================== */

function showCompetitionResult() {

    stopCompetitionTimer();


    document.querySelector(
        ".competition-question"
    ).style.display =
        "none";


    document.querySelector(
        ".turn-box"
    ).style.display =
        "none";


    document.querySelector(
        ".round-info"
    ).style.display =
        "none";


    const result =
        document.getElementById(
            "competitionResult"
        );


    result.style.display =
        "block";


    /* ================= GURUH NOMLARI ================= */

    const names = [

        getCompetitionGroupName(0),

        getCompetitionGroupName(1),

        getCompetitionGroupName(2)

    ];


    /* ================= BALLAR ================= */

    const scores =
        competitionScores;


    /* ================= YAKUNIY NATIJALAR ================= */

    const resultContainer =
        document.getElementById(
            "finalCompetitionScores"
        );


    resultContainer.innerHTML =
        "";


    for (
        let i = 0;
        i < 3;
        i++
    ) {

        const div =
            document.createElement(
                "div"
            );


        div.className =
            "final-group-score";


        div.innerHTML = `

            <span>
                ${
                    i === 0
                        ? "🔵"
                        : i === 1
                            ? "🟢"
                            : "🟠"
                }
            </span>

            <strong>
                ${names[i]}
            </strong>

            <b>
                ${scores[i]} ball
            </b>

        `;


        resultContainer.appendChild(
            div
        );

    }


    /* ================= REYTING ================= */

    const ranking = [

        {
            name: names[0],
            score: scores[0],
            originalIndex: 0
        },

        {
            name: names[1],
            score: scores[1],
            originalIndex: 1
        },

        {
            name: names[2],
            score: scores[2],
            originalIndex: 2
        }

    ];


    ranking.sort(
        function (
            a,
            b
        ) {

            return b.score -
                a.score;

        }
    );


    /* ================= PODIUM ================= */

    const podium =
        document.getElementById(
            "competitionPodium"
        );


    if (podium) {

        podium.innerHTML = `

            <div class="podium-card podium-second">

                <div class="podium-medal">
                    🥈
                </div>

                <h3>
                    ${ranking[1].name}
                </h3>

                <strong>
                    ${ranking[1].score} ball
                </strong>

            </div>


            <div class="podium-card podium-first">

                <div class="podium-medal">
                    🥇
                </div>

                <h3>
                    ${ranking[0].name}
                </h3>

                <strong>
                    ${ranking[0].score} ball
                </strong>

            </div>


            <div class="podium-card podium-third">

                <div class="podium-medal">
                    🥉
                </div>

                <h3>
                    ${ranking[2].name}
                </h3>

                <strong>
                    ${ranking[2].score} ball
                </strong>

            </div>

        `;

    }


    /* ================= G'OLIBNI ANIQLASH ================= */

    const maxScore =
        Math.max(
            ...scores
        );


    const winners = [];


    for (
        let i = 0;
        i < 3;
        i++
    ) {

        if (
            scores[i] === maxScore
        ) {

            winners.push(
                names[i]
            );

        }

    }


    const winnerElement =
        document.getElementById(
            "winnerText"
        );


    /* ================= BIRINCHI O'RIN ================= */

    if (
        winners.length === 1
    ) {

        winnerElement.innerHTML = `

            🏆 G‘OLIB:

            <strong>
                ${winners[0]}
            </strong>

            <br>

            ${maxScore} ball

        `;


        winnerElement.classList.add(
            "winner-highlight"
        );

    }


    /* ================= DURRANG ================= */

    else {

        winnerElement.innerHTML = `

            🤝 DURRANG!

            <br>

            <strong>
                ${winners.join(" va ")}
            </strong>

            <br>

            ${maxScore} ball

        `;


        winnerElement.classList.add(
            "winner-highlight"
        );

    }

}


/* =====================================================
   JOKERLAR
   ===================================================== */


/* ================= JOKER ISHLATISH ================= */

function useJoker(
    type
) {

    const groupIndex =
        getCurrentCompetitionGroup();


    const state =
        jokerState[groupIndex];


    const question =
        competitionQuestions[
            competitionCurrentQuestion
        ];


    /* Javob berilgan bo'lsa */

    if (
        competitionSelectedAnswer
    ) {

        alert(
            "⚠️ Avvalgi savol yakunlangan!"
        );

        return;

    }


    /* =================================================
       50/50
       ================================================= */

    if (
        type === "fifty"
    ) {

        if (
            state.fifty
        ) {

            return;

        }


        state.fifty =
            true;


        const buttons =
            Array.from(
                document.querySelectorAll(
                    ".competition-answer"
                )
            );


        const wrongButtons =
            buttons.filter(
                function (
                    button,
                    index
                ) {

                    return (
                        index !==
                        question.correct
                    );

                }
            );


        /* Tasodifiy aralashtirish */

        wrongButtons.sort(
            function () {

                return (
                    Math.random() -
                    0.5
                );

            }
        );


        /* 2 ta noto'g'ri javobni yashirish */

        wrongButtons
            .slice(0, 2)
            .forEach(
                function (
                    button
                ) {

                    button.classList.add(
                        "joker-answer-hidden"
                    );

                    button.disabled =
                        true;

                }
            );


        playJokerSound();


        updateJokerButtons();


        return;

    }


    /* =================================================
       2X BALL
       ================================================= */

    if (
        type === "double"
    ) {

        if (
            state.double
        ) {

            return;

        }


        state.double =
            true;


        activeDoublePoints =
            true;


        const questionElement =
            document.getElementById(
                "competitionQuestion"
            );


        if (
            questionElement
        ) {

            questionElement.classList.add(
                "double-points-active"
            );

        }


        playJokerSound();


        updateJokerButtons();


        return;

    }


    /* =================================================
       +10 SONIYA
       ================================================= */

    if (
        type === "time"
    ) {

        if (
            state.time
        ) {

            return;

        }


        state.time =
            true;


        competitionTimeLeft +=
            10;


        const timerElement =
            document.getElementById(
                "competitionTimer"
            );


        if (
            timerElement
        ) {

            timerElement.textContent =
                competitionTimeLeft;

        }


        const timerBox =
            document.querySelector(
                ".competition-timer"
            );


        if (
            timerBox
        ) {

            timerBox.classList.remove(
                "warning"
            );

            timerBox.classList.remove(
                "danger"
            );

        }


        playJokerSound();


        updateJokerButtons();


        return;

    }

}


/* =====================================================
   JOKER TUGMALARINI YANGILASH
   ===================================================== */

function updateJokerButtons() {

    const groupIndex =
        getCurrentCompetitionGroup();


    const state =
        jokerState[groupIndex];


    const fiftyButton =
        document.getElementById(
            "joker5050"
        );


    const doubleButton =
        document.getElementById(
            "jokerDouble"
        );


    const timeButton =
        document.getElementById(
            "jokerTime"
        );


    if (
        fiftyButton
    ) {

        fiftyButton.classList.toggle(
            "joker-disabled",
            state.fifty
        );


        fiftyButton.disabled =
            state.fifty;

    }


    if (
        doubleButton
    ) {

        doubleButton.classList.toggle(
            "joker-disabled",
            state.double
        );


        doubleButton.disabled =
            state.double;

    }


    if (
        timeButton
    ) {

        timeButton.classList.toggle(
            "joker-disabled",
            state.time
        );


        timeButton.disabled =
            state.time;

    }

}


/* =====================================================
   JOKER OVOZI
   ===================================================== */

function playJokerSound() {

    const audioContext =
        new (
            window.AudioContext ||
            window.webkitAudioContext
        )();


    const oscillator =
        audioContext.createOscillator();


    const gain =
        audioContext.createGain();


    oscillator.type =
        "triangle";


    oscillator.frequency.setValueAtTime(
        500,
        audioContext.currentTime
    );


    oscillator.frequency.setValueAtTime(
        800,
        audioContext.currentTime + 0.1
    );


    oscillator.frequency.setValueAtTime(
        1100,
        audioContext.currentTime + 0.2
    );


    gain.gain.setValueAtTime(
        0.2,
        audioContext.currentTime
    );


    gain.gain.exponentialRampToValueAtTime(
        0.01,
        audioContext.currentTime + 0.4
    );


    oscillator.connect(
        gain
    );


    gain.connect(
        audioContext.destination
    );


    oscillator.start();


    oscillator.stop(
        audioContext.currentTime + 0.4
    );

}


/* =====================================================
   QAYTA BOSHLASH
   ===================================================== */

function restartCompetition() {

    stopCompetitionTimer();


    competitionCurrentQuestion =
        0;


    competitionScores =
        [0, 0, 0];


    competitionSelectedAnswer =
        false;


    /* ================= JOKERLARNI RESET ================= */

    jokerState = [

        {
            fifty: false,
            double: false,
            time: false
        },

        {
            fifty: false,
            double: false,
            time: false
        },

        {
            fifty: false,
            double: false,
            time: false
        }

    ];


    activeDoublePoints =
        false;


    /* ================= SAHIFANI QAYTARISH ================= */

    document.querySelector(
        ".competition-question"
    ).style.display =
        "block";


    document.querySelector(
        ".turn-box"
    ).style.display =
        "block";


    document.querySelector(
        ".round-info"
    ).style.display =
        "flex";


    document.getElementById(
        "competitionResult"
    ).style.display =
        "none";


    /* ================= GURUH BALLARI ================= */

    updateCompetitionScores();


    /* ================= SAVOLNI YUKLASH ================= */

    loadCompetitionQuestion();

}


/* =====================================================
   SAHIFA YUKLANGANDA
   ===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        /* ================= QUIZ ================= */

        if (
            document.getElementById(
                "quizBox"
            )
        ) {

            loadQuestion();

        }


        /* ================= COMPETITION ================= */

        if (
            document.getElementById(
                "competitionQuestion"
            )
        ) {

            /* Guruh nomlarini chiqarish */

            const groupName1 =
                document.getElementById(
                    "groupName1"
                );


            const groupName2 =
                document.getElementById(
                    "groupName2"
                );


            const groupName3 =
                document.getElementById(
                    "groupName3"
                );


            if (
                groupName1
            ) {

                groupName1.textContent =
                    getCompetitionGroupName(0);

            }


            if (
                groupName2
            ) {

                groupName2.textContent =
                    getCompetitionGroupName(1);

            }


            if (
                groupName3
            ) {

                groupName3.textContent =
                    getCompetitionGroupName(2);

            }


            /* Bellashuvni boshlash */

            loadCompetitionQuestion();

        }

    }
);


/* =====================================================
   GURUHLARDAN BELLASHUVGA O'TISH
   ===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const startButton =
            document.getElementById(
                "startCompetitionButton"
            );


        if (!startButton) {

            return;

        }


        startButton.addEventListener(
            "click",
            function () {

                const group1 =
                    document.getElementById(
                        "group1"
                    ).value.trim();


                const group2 =
                    document.getElementById(
                        "group2"
                    ).value.trim();


                const group3 =
                    document.getElementById(
                        "group3"
                    ).value.trim();


                if (
                    group1 === "" ||
                    group2 === "" ||
                    group3 === ""
                ) {

                    alert(
                        "⚠️ Iltimos, uchala guruh nomini ham kiriting!"
                    );


                    return;

                }


                /* Guruh nomlarini saqlash */

                localStorage.setItem(
                    "group1",
                    group1
                );


                localStorage.setItem(
                    "group2",
                    group2
                );


                localStorage.setItem(
                    "group3",
                    group3
                );


                /* Boshlang'ich ballar */

                localStorage.setItem(
                    "group1Score",
                    "0"
                );


                localStorage.setItem(
                    "group2Score",
                    "0"
                );


                localStorage.setItem(
                    "group3Score",
                    "0"
                );


                /* Bellashuv sahifasiga o'tish */

                window.location.href =
                    "competition.html";

            }
        );

    }
);


/* =====================================================
   7.4 — BELLASHUV OVOZ EFFEKTLARI
   ===================================================== */


/* ================= TO'G'RI JAVOB ================= */

function playCorrectSound() {

    const audioContext =
        new (
            window.AudioContext ||
            window.webkitAudioContext
        )();


    const oscillator =
        audioContext.createOscillator();


    const gain =
        audioContext.createGain();


    oscillator.type =
        "sine";


    oscillator.frequency.setValueAtTime(
        600,
        audioContext.currentTime
    );


    oscillator.frequency.setValueAtTime(
        900,
        audioContext.currentTime + 0.12
    );


    gain.gain.setValueAtTime(
        0.25,
        audioContext.currentTime
    );


    gain.gain.exponentialRampToValueAtTime(
        0.01,
        audioContext.currentTime + 0.35
    );


    oscillator.connect(
        gain
    );


    gain.connect(
        audioContext.destination
    );


    oscillator.start();


    oscillator.stop(
        audioContext.currentTime + 0.35
    );

}


/* ================= NOTO'G'RI JAVOB ================= */

function playWrongSound() {

    const audioContext =
        new (
            window.AudioContext ||
            window.webkitAudioContext
        )();


    const oscillator =
        audioContext.createOscillator();


    const gain =
        audioContext.createGain();


    oscillator.type =
        "sawtooth";


    oscillator.frequency.setValueAtTime(
        220,
        audioContext.currentTime
    );


    oscillator.frequency.setValueAtTime(
        140,
        audioContext.currentTime + 0.18
    );


    gain.gain.setValueAtTime(
        0.2,
        audioContext.currentTime
    );


    gain.gain.exponentialRampToValueAtTime(
        0.01,
        audioContext.currentTime + 0.4
    );


    oscillator.connect(
        gain
    );


    gain.connect(
        audioContext.destination
    );


    oscillator.start();


    oscillator.stop(
        audioContext.currentTime + 0.4
    );

}


/* ================= VAQT TUGADI ================= */

function playTimeoutSound() {

    const audioContext =
        new (
            window.AudioContext ||
            window.webkitAudioContext
        )();


    const oscillator =
        audioContext.createOscillator();


    const gain =
        audioContext.createGain();


    oscillator.type =
        "square";


    oscillator.frequency.setValueAtTime(
        180,
        audioContext.currentTime
    );


    gain.gain.setValueAtTime(
        0.22,
        audioContext.currentTime
    );


    gain.gain.exponentialRampToValueAtTime(
        0.01,
        audioContext.currentTime + 0.7
    );


    oscillator.connect(
        gain
    );


    gain.connect(
        audioContext.destination
    );


    oscillator.start();


    oscillator.stop(
        audioContext.currentTime + 0.7
    );

}