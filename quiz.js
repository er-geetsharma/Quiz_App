const quizData=[
    {
        question: "Which language runs in a Web browser ?",
        a: "Java",
        b:"C",
        c:"Python",
        d:"Javascript",
        correct:"d",
    },
    {
        question:"What does CSS stands for?",
        a:"Central Style Sheets",
        b:"Cascading Style Sheets",
        c:"Cascading Simple Sheets",
        d:"Cascading Short Sheets",
        correct:"b",
    },
    {
        question:"What does HTML stands for?",
        a:"Hypertext Markup Language",
        b:"Hypertext Markdown Language",
        c:"Hyperloop Machine Language",
        d:"Hypertext Marker Language",
        correct:"a",
        
    },
    {
        question:"What year was Javascript launched?",
        a:"1996",
        b:"1995",
        c:"1992",
        d:"none of the above",
        correct:"b",
        
    },
    
];

var quiz=document.getElementById("quiz");
var questionEl=document.getElementById("question");
var answersEl=document.querySelectorAll(".answer");
var a_text=document.getElementById("a_text");
var b_text=document.getElementById("b_text");
var c_text=document.getElementById("c_text");
var d_text=document.getElementById("d_text");
var submitBtn= document.getElementById("submit");

var currentQuestion = 0;
var score = 0;
loadQuiz();

function loadQuiz(){
    getDeselect();
    var currentQuizData = quizData[currentQuestion];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d;
    
}
function getDeselect(){
    answersEl.forEach(answerEl => answerEl.checked = false);
}
function getSelected(){
    answersEl.forEach(answersEl => {
        
        if(answersEl.checked){
            answer=answersEl.id;
        }
    })
    return answer;
    
}
submitBtn.addEventListener('click',()=>{
    var answer= getSelected();
    if(answer=== quizData[currentQuestion].correct){
        score++;
    }
    currentQuestion++;
    if(currentQuestion<quizData.length){
        loadQuiz();
    }
    else{
        quiz.innerHTML=`
<h2> You answered ${score}/${quizData.length} questions correctly </h2>
<button onclick="location.reload()">Reload</button>
` 
    }
})

    
    
    
    
    