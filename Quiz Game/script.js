
const data = [
	 { q: 'What is JavaScript?', a: 'A language', b: 'A tool', c: 'A framework', d: 'A database', ans: 'a' },
    { q: 'What is the capital of France?', a: 'Paris', b: 'London', c: 'Berlin', d: 'Madrid', ans: 'a' },
    { q: 'Who is the creator of Microsoft?', a: 'Steve Jobs', b: 'Bill Gates', c: 'Elon Musk', d: 'Mark Zuckerberg', ans: 'b' },
	{ q: 'What is JavaScript?', a: 'A language', b: 'A tool', c: 'A framework', d: 'A database', ans: 'a' },
    { q: 'What is the capital of France?', a: 'Paris', b: 'London', c: 'Berlin', d: 'Madrid', ans: 'a' },
    { q: 'Who is the creator of Microsoft?', a: 'Steve Jobs', b: 'Bill Gates', c: 'Elon Musk', d: 'Mark Zuckerberg', ans: 'b' },
    { q: 'What is JavaScript?', a: 'A language', b: 'A tool', c: 'A framework', d: 'A database', ans: 'a' },
    { q: 'What is the capital of France?', a: 'Paris', b: 'London', c: 'Berlin', d: 'Madrid', ans: 'a' },
    { q: 'Who is the creator of Microsoft?', a: 'Steve Jobs', b: 'Bill Gates', c: 'Elon Musk', d: 'Mark Zuckerberg', ans: 'b' },
];

let currentQuestion = 0;
let score = 0;
let timer;
let count = 30;


const questionElement = document.getElementById('question');
const choicesElements = document.querySelectorAll('.choice');
const resultElement = document.getElementById('result');
const scoreDisplay = document.getElementById('scoreDisplay');
const timeDisplay = document.getElementById('time');
const submitBtn = document.getElementById('submitBtn');


showQuestion();

function showQuestion() {
    const questionData = data[currentQuestion];
    questionElement.innerText = questionData.q;
    
    document.getElementById('choice1').innerText = questionData.a;
    document.getElementById('choice2').innerText = questionData.b;
    document.getElementById('choice3').innerText = questionData.c;
    document.getElementById('choice4').innerText = questionData.d;

    resetTimer();
}


function startTimer() {
    timer = setInterval(() => {
        timeDisplay.innerText = `Time left: ${count}`;
        count--;
        if (count < 0) {
            clearInterval(timer);
            checkAnswer();
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    count = 30;
    startTimer();
}


submitBtn.addEventListener('click', () => {
    checkAnswer();
});


function checkAnswer() {
    clearInterval(timer);
    
    const selectedChoice = document.querySelector('input[name="choice"]:checked');
    

    const userAnswer = selectedChoice.value;
    if (userAnswer === data[currentQuestion].ans) {
        score++;
     }
	else{

	}

    
    scoreDisplay.innerText = `Score: ${score}`;
	currentQuestion++;
    if (currentQuestion < data.length) {
        showQuestion();
    } else {
        questionElement.innerText = "Quiz Completed!";
        submitBtn.style.display='none';
		scoreDisplay.style.display='none';
        resultElement.innerText = `Final score : ${score} out of ${data.length}`;
		timeDisplay.style.display='none';
    }
}
