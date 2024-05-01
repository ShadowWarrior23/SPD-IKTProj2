const questions = [
    {
        question: "Melyik Kratos első és ikononikus fegyvere?",
        answers: [
            {text: "Káosz Pengéi", correct: true},
            {text: "Leviatán Fejsze", correct: false},
            {text: "Olümpusz Pengéje", correct: false},
            {text: "Drauphnir lándzsa", correct: false}
        ]
    }, 
    {
        question: "Hogy hivják Kratos lányát?",
        answers: [
            {text: "Athéné", correct: false},
            {text: "Artemisz", correct: false},
            {text: "Calliope", correct: true},
            {text: "Freyja", correct: false}
        ]
    }, 
    {
        question: "Melyik isten Kratos apja?",
        answers: [
            {text: "Zeusz", correct: true},
            {text: "Arész", correct: false},
            {text: "Héliosz", correct: false},
            {text: "Poszeidón", correct: false}
        ]
    }, 
    {
        question: "Hogy hívták Kratos elveszett testvérét?",
        answers: [
            {text: "Héraklész", correct: false},
            {text: "Deimosz", correct: true},
            {text: "Atreus", correct: false},
            {text: "Thészeusz", correct: false}
        ]
    }, 
    {
        question: "Kinek a halála hozza el a Fimburwintert?",
        answers: [
            {text: "Kratos", correct: false},
            {text: "Odin", correct: false},
            {text: "Magi", correct: false},
            {text: "Baldr", correct: true}
        ]
    }, 
    {
        question: "Ki végez Odinnal a Ragnarök végén?",
        answers: [
            {text: "Sindri", correct: true},
            {text: "Kratos", correct: false},
            {text: "Thor", correct: false},
            {text: "Freyja", correct: false}
        ]
    },
    {
        question: "Kinek a szolgálatába állt Kratos?",
        answers: [
            {text: "Héphaisztosz", correct: false},
            {text: "Arész", correct: true},
            {text: "Thor", correct: false},
            {text: "Perszephoné", correct: false}
        ]
    }, 
    {
        question: "Hány God of War novella jelent meg?",
        answers: [
            {text: "1", correct: false},
            {text: "2", correct: false},
            {text: "3", correct: true},
            {text: "5", correct: false}
        ]
    }, 
    {
        question: "Mi Atreus eredeti neve?",
        answers: [
            {text: "Poszeidón", correct: false},
            {text: "Loki", correct: true},
            {text: "Orkos", correct: false},
            {text: "Modi", correct: false}
        ]
    }, 
    {
        question: "Melyik játszódik a legkorábban?",
        answers: [
            {text: "God of War", correct: false},
            {text: "God of War Ascension", correct: true},
            {text: "God of War Chains of Olympus", correct: false},
            {text: "God of War Ragnarök", correct: false}
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
    nextButton.innerHTML = " Játssz újra";
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
