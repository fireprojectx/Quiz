const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const resultElement = document.getElementById('result')
const scoreContainerElement = document.getElementById('score-container')
const scoreElement = document.getElementById('score')
const restartButton = document.getElementById('restart-btn')

let shuffledQuestions, currentQuestionIndex
let correctAnswers = 0, totalQuestions = 0

const questions = [
    {
        question: "Qual é a soma de 7 e 8?",
        answers: [
            { text: '14', correct: false },
            { text: '15', correct: true },
            { text: '16', correct: false },
            { text: '17', correct: false }
        ]
    },
    {
        question: "Quanto é 9 vezes 6?",
        answers: [
            { text: '54', correct: true },
            { text: '56', correct: false },
            { text: '58', correct: false },
            { text: '60', correct: false }
        ]
    },
    {
        question: "Qual é o valor de x na equação 2x + 3 = 11?",
        answers: [
            { text: '3', correct: false },
            { text: '4', correct: true },
            { text: '5', correct: false },
            { text: '6', correct: false }
        ]
    },
    {
        question: "Se um triângulo tem lados de 3 cm, 4 cm e 5 cm, qual é a sua área?",
        answers: [
            { text: '6 cm²', correct: true },
            { text: '10 cm²', correct: false },
            { text: '12 cm²', correct: false },
            { text: '15 cm²', correct: false }
        ]
    },
    {
        question: "Qual é o menor múltiplo comum de 4 e 6?",
        answers: [
            { text: '10', correct: false },
            { text: '12', correct: true },
            { text: '16', correct: false },
            { text: '18', correct: false }
        ]
    },
    {
        question: "Qual é a diferença entre 23 e 9?",
        answers: [
            { text: '12', correct: false },
            { text: '13', correct: false },
            { text: '14', correct: true },
            { text: '15', correct: false }
        ]
    },
    {
        question: "Qual é o resultado de 15 ÷ 3?",
        answers: [
            { text: '3', correct: false },
            { text: '4', correct: false },
            { text: '5', correct: true },
            { text: '6', correct: false }
        ]
    },
    {
        question: "Quantos ângulos retos há em um quadrado?",
        answers: [
            { text: '2', correct: false },
            { text: '3', correct: false },
            { text: '4', correct: true },
            { text: '5', correct: false }
        ]
    },
    {
        question: "Qual é a fração equivalente a 0,75?",
        answers: [
            { text: '1/2', correct: false },
            { text: '3/4', correct: true },
            { text: '2/3', correct: false },
            { text: '4/5', correct: false }
        ]
    },
    {
        question: "Se João tem 12 maçãs e dá 5 para Maria, quantas maçãs João tem agora?",
        answers: [
            { text: '5', correct: false },
            { text: '6', correct: false },
            { text: '7', correct: true },
            { text: '8', correct: false }
        ]
    }
]

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})
restartButton.addEventListener('click', startGame)

function startGame() {
    startButton.classList.add('hide')
    scoreContainerElement.classList.add('hide')
    restartButton.classList.add('hide')
    correctAnswers = 0
    totalQuestions = 0
    shuffledQuestions = questions.sort(() => Math.random() - 0.5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    resultElement.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    resultElement.innerTextLet's continue with the code to incorporate the functionality of counting correct answers and providing percentages of correct and incorrect responses.

### `script.js`
```javascript
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const resultElement = document.getElementById('result')
const scoreContainerElement = document.getElementById('score-container')
const scoreElement = document.getElementById('score')
const restartButton = document.getElementById('restart-btn')

let shuffledQuestions, currentQuestionIndex
let correctAnswers = 0, totalQuestions = 0

const questions = [
    {
        question: "Qual é a soma de 7 e 8?",
        answers: [
            { text: '14', correct: false },
            { text: '15', correct: true },
            { text: '16', correct: false },
            { text: '17', correct: false }
        ]
    },
    {
        question: "Quanto é 9 vezes 6?",
        answers: [
            { text: '54', correct: true },
            { text: '56', correct: false },
            { text: '58', correct: false },
            { text: '60', correct: false }
        ]
    },
    {
        question: "Qual é o valor de x na equação 2x + 3 = 11?",
        answers: [
            { text: '3', correct: false },
            { text: '4', correct: true },
            { text: '5', correct: false },
            { text: '6', correct: false }
        ]
    },
    {
        question: "Se um triângulo tem lados de 3 cm, 4 cm e 5 cm, qual é a sua área?",
        answers: [
            { text: '6 cm²', correct: true },
            { text: '10 cm²', correct: false },
            { text: '12 cm²', correct: false },
            { text: '15 cm²', correct: false }
        ]
    },
    {
        question: "Qual é o menor múltiplo comum de 4 e 6?",
        answers: [
            { text: '10', correct: false },
            { text: '12', correct: true },
            { text: '16', correct: false },
            { text: '18', correct: false }
        ]
    },
    {
        question: "Qual é a diferença entre 23 e 9?",
        answers: [
            { text: '12', correct: false },
            { text: '13', correct: false },
            { text: '14', correct: true },
            { text: '15', correct: false }
        ]
    },
    {
        question: "Qual é o resultado de 15 ÷ 3?",
        answers: [
            { text: '3', correct: false },
            { text: '4', correct: false },
            { text: '5', correct: true },
            { text: '6', correct: false }
        ]
    },
    {
        question: "Quantos ângulos retos há em um quadrado?",
        answers: [
            { text: '2', correct: false },
            { text: '3', correct: false },
            { text: '4', correct: true },
            { text: '5', correct: false }
        ]
    },
    {
        question: "Qual é a fração equivalente a 0,75?",
        answers: [
            { text: '1/2', correct: false },
            { text: '3/4', correct: true },
            { text: '2/3', correct: false },
            { text: '4/5', correct: false }
        ]
    },
    {
        question: "Se João tem 12 maçãs e dá 5 para Maria, quantas maçãs João tem agora?",
        answers: [
            { text: '5', correct: false },
            { text: '6', correct: false },
            { text: '7', correct: true },
            { text: '8', correct: false }
        ]
    }
]

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})
restartButton.addEventListener('click', startGame)

function startGame() {
    startButton.classList.add('hide')
    scoreContainerElement.classList.add('hide')
    restartButton.classList.add('hide')
    correctAnswers = 0
    totalQuestions = 0
    shuffledQuestions = questions.sort(() => Math.random() - 0.5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    resultElement.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    resultElement.innerText = correct ? "Resposta correta!" : "Resposta errada!"
    resultElement.classList.remove('hide')
    totalQuestions++
    if (correct) correctAnswers++
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        showScore()
    }
}

function showScore() {
    questionContainerElement.classList.add('hide')
    scoreContainerElement.classList.remove('hide')
    restartButton.classList.remove('hide')
    const percentageCorrect = Math.round((correctAnswers / totalQuestions) * 100)
    scoreElement.innerText = `Você acertou ${correctAnswers} de ${totalQuestions} perguntas. (${percentageCorrect}% de acertos)`
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
