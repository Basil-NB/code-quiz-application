var startButton = document.getElementById("start-button")
var questionContainetEl = document.getElementById('question-container')
var quizIntro = document.getElementById('quiz-start')

var questions = [
    {
        question: 'what is an array',
        answer: [
            {}
        ]
    }
]

startButton.addEventListener('click', startGame)

function startGame(){
console.log('started')
startButton.classList.add('hide')
questionContainetEl.classList.remove('hide')
quizIntro.classList.add('hide')
setNextQuestion()
}

function setNextQuestion(){

}

function selectAnswer(){

}