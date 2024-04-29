const questions = [
    {
        question: "Melyik Kratos első és ikononikus fegyvere?",
        answers: [
            {text: "Káosz Pengéi", correct: true},
            {text: "Leviatán Fejsze", correct: false},
            {text: "Olimpusz Pengéje", correct: false},
            {text: "Drauphnir", correct: false}
        ]
    }, 
    {
        question: "Hogy hivják Kratos lányát?",
        answers: [
            {text: "Athena", correct: false},
            {text: "Artemis", correct: false},
            {text: "Calliophe", correct: true},
            {text: "Freya", correct: false}
        ]
    }, 
    {
        question: "Melyik isten Kratos apja?",
        answers: [
            {text: "Zeus", correct: true},
            {text: "Ares", correct: false},
            {text: "Helios", correct: false},
            {text: "Poseidon", correct: false}
        ]
    }, 
    {
        question: "Hogy hívták Kratos elveszet testvérét?",
        answers: [
            {text: "Hercules", correct: false},
            {text: "Deimos", correct: true},
            {text: "Atreus", correct: false},
            {text: "Thezeus", correct: false}
        ]
    }, 
    {
        question: "Kinek a halála hozza el a Fimburwintert?",
        answers: [
            {text: "Kratos", correct: false},
            {text: "Odin", correct: false},
            {text: "Magi", correct: false},
            {text: "Baldur", correct: true}
        ]
    }, 
    {
        question: "Ki végez Odinnal a Ragnarök végén?",
        answers: [
            {text: "Sindri", correct: true},
            {text: "Kratos", correct: false},
            {text: "Thor", correct: false},
            {text: "Freya", correct: false}
        ]
    }, 
]

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Következő";
    showQuestion();

}

function showQuestion(){
    resetState()
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct == "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct == "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `${score} pontot szereztél ${questions.length} kérdésből!`;
    nextButton.innerHTML = " Játsz Újra";
    nextButton.style.display = "block";

}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", () =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

startQuiz();
