let startQuizButton= document.querySelector('#start-quiz');
let timerEl= document.querySelector('.timer');
let quizEl=document.getElementById("quiz");
let footerEl=document.getElementById('footer');
let secondsLeft= 80;
let scoreEl= document.getElementById('score-form');
let questionxx= 0;
let highScore= document.getElementById('highscore');

scoreEl.style.display="none";

startQuizButton.addEventListener("click", function() {
    document.querySelector('.page1').style.display= "none";
    displayQuestion();
    startQuiz();
})

function scoreElForm(){
    scoreEl.style.display='';
    footerEl.textContent='';
}

function startQuiz() {
    

let timeInterval= setInterval(function() {
 secondsLeft--;
 timerEl.textContent= 'Time: '+ secondsLeft;
 if (secondsLeft > questions.length){
 timeInterval.pause();
 highScore.InnerHTML = secondsLeft; 
}} , 1000 );
}

function displayQuestion(){
    if (questionxx == questions.length){
       scoreElForm();
    }
let quizQuestions= document.createElement ('p');
quizQuestions.textContent=questions[questionxx].text;
quizQuestions.classList.add('questions');
quizEl.appendChild(quizQuestions);
for (let i=0; i<4; i++){
    let selectionButton= document.createElement ('button');
    selectionButton.classList.add ('answer');
    selectionButton.textContent=questions[questionxx].choices[i];
    quizEl.appendChild(selectionButton);
    selectionButton.addEventListener("click", function(){
        if (i == questions[questionxx].answer){
             footerEl.textContent= 'Correct!';
} else { 
    footerEl.textContent='Wrong!';
    secondsLeft -=15;
    }
quizEl.innerHTML=''; 
questionxx++;
displayQuestion();
})

}}






const questions = [ 
 {text: 'Which type of the followng:',
choices: ['object based language', 'object oriented language', 'procedural', 'none of the above'],
answer: 1 },
{text: 'Which of the following key words is used to define a variable in JavaSCript?',
choices: ['Var', 'Let', 'Both A and B', 'None of the above'],
answer: 2 },
{text: 'How can a data type be declared to be a const type?',
choices: ['Const', 'Var', 'None of the above', 'constant'],
answer: 0 },
{text: 'Which of the folowing methods can be used to display data in some form using Javascript?',
choices: ['document.write[]', 'console.log[]', 'window.alert[]', 'all of the above'],
answer: 3},
{text: 'Which of the following methods is used to access html elements using Javascript?',
choices: ['getElementByID', 'getElementByClass', 'Both A and B', 'None of the above'],
answer: 2}, ]