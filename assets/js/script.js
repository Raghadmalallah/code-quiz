//* varaibls for the qustions //
var questions = [
    {
        title: "Inside which HTML element do we put the JavaScript?",
        choices: ['<js>', '<scripting>', '<script>', '<javascript>'],
        answer: '<script>'
    },
    {
        title: "Where is the correct place to insert a JavaScript?",
        choices: ['The <head> section','The <body>', 'The <Title>', 'Both <head> section and <body>section'],
        answer: '<body>'
    },
    {
        title: "How do you create a function in JavaScript?",
        choices: ['function:myFunction()','function = myFunction()', 'function myFunction()', 'varFunction = function (myFunction)'],
        answer: '<unction myFunction()'
    },

    {
        title: "How can you add a comment in a JavaScript?",
        choices: ['*This is a Comment','//This is a comment', '<!--This is a comment-->', 'comment = (comment)'],
        answer: '//This is a comment'
    },
    {
        title: "How do you declare a JavaScript variable?",
        choices: ['v myName;','var myName;', 'variable myName;', 'declare.var.MyName'],
        answer: 'var myName'
    },
]

var questionsEl = document.querySelector("#questions");
var timerEl = document.querySelector("#time");


var time = questions.length * 20;
var timerId;

function startQuiz(){
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    timerEl.textContent = time;
    getQuestion();
}

