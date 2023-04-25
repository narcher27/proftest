const startButton = document.getElementById("start-button");
let currentQuestion = 0;
let answers = [];

const questions = ["У вас прерывистый и неспокойный сон.", "Вы часто нервничаете, переживаете, напрягаетесь из-за организационных недостатков на работе.", "Вы часто ловите себя на том, что вас что-то тревожит.", "У вас часто возникают мрачные мысли.", 
"На работе вы испытываете постоянные физические или психологические перегрузки.","Вы считаете себя человеком  жизнерадостным.","Вы любите участвовать в коллективных мероприятиях.","Бывает, что вы плохо засыпаете из-за переживаний, связанных с работой.",
"Работать вам стало труднее, чем раньше","Вы считаете себя тревожным человеком.","В последнее время самые обычные ситуации на работе вызывают у вас раздражение, чаще чем раньше","Вы чувствуете угнетенность и апатию.","В компании вы, как правило, веселы и активны.",
"У вас часто портится настроение, возникает уныние и хандра","Когда вы приходите с работы домой, вам хочется какое-то время побыть наедине с собой и ни с кем не общаться","Обычно вы приходите на работу отдохнувшим, со свежими силами, в хорошем настроении",
"Вы замечаете, что хорошее настроение бывает у вас значительно реже, чем прежде.","Конфликты и разногласия с коллегами отнимают у вас много сил и эмоций.","Вы часто чувствуете себя эмоционально опустошенным.","Вы часто испытываете чувство вины.",
"Большинство людей довольны своей жизнью больше, чем вы","Часто вы работаете на пределе своих сил.","У вас часто возникают тревожные ожидания, связанные с работой: что-то может случиться, на сократят ли, как бы не допустить ошибки и т.п.",
"Ваше настроение в настоящее время хуже, чем раньше."];
const keys = [[1,15],[1,10],[1,15],[1,10],[1,15],[0,7],[0,5],[1,10],[1,15],[1,20],[1,10],[1,15],[0,5],[1,10],[1,5],[0,10],[1,10],[1,10],[1,10],[1,10],[1,10],[1,15],[1,15],[1,10]];

const rightButton = document.getElementById("right");
const wrongButton = document.getElementById("wrong");
const question = document.getElementById("question");
const restartButton = document.getElementById("restart-button");

function startTest () {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("questions-screen-box").style.display = "flex";
    question.innerHTML = questions[0];
}

startButton.addEventListener("click",startTest);

function testAnswer (event) {
    if (event.target === rightButton) {
        answers.push(1);
    } else if (event.target === wrongButton) {
        question.innerHTML = "wrong";
        answers.push(0);
    }
    currentQuestion++;
    if (currentQuestion >= questions.length) {
        showResults();
    }
    question.innerHTML=questions[currentQuestion];
}

function showResults () {
    document.getElementById("questions-screen-box").style.display = "none";
    document.getElementById("results-screen-box").style.display = "flex";
    let score = 0;
    let scoreMax = 0;
    let level = "";
    for (let i=0; i<questions.length; i++) {
        if (answers[i] === keys[i][0]) {
            score += keys[i][1]
        }
        scoreMax += keys[i][1];
    }
    
    if (score < 50) {
        level = "низкий";
    } else if (score >= 50 && score < 100)  {
        level = "ниже среднего";
    } else if (score >= 100 && score < 150)  {
        level = "средний";
    } else if (score >= 150 && score < 200)  {
        level = "выше среднего";
    } else  {
        level = "высокий";
    }

    document.getElementById("results-number").textContent = `Вы набрали ${score} из ${scoreMax} возможных баллов по шкале нервно-психического напряжения.`;
    document.getElementById("results-level").textContent = `Уровень нервно-психического напряжения: ${level}.`;
}

function restartTest () {
    document.getElementById("results-screen-box").style.display = "none";
    document.getElementById("start-screen").style.display = "flex";
    currentQuestion = 0;
    answers = [];
}
rightButton.addEventListener("click",testAnswer);
wrongButton.addEventListener("click",testAnswer);
restartButton.onclick = restartTest;
