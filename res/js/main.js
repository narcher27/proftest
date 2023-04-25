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

const rightButton = document.getElementById("right");
const wrongButton = document.getElementById("wrong");
const question = document.getElementById("question");

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

}

rightButton.addEventListener("click",testAnswer);
wrongButton.addEventListener("click",testAnswer);
