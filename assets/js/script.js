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
        answer: 'The <body>'
    },
    {
        title: "How do you create a function in JavaScript?",
        choices: ['function:myFunction()','function = myFunction()', 'function myFunction()', 'varFunction = function (myFunction)'],
        answer: 'function myFunction()'
    },

    {
        title: "How can you add a comment in a JavaScript?",
        choices: ['*This is a Comment','//This is a comment', '<!--This is a comment-->', 'comment = (comment)'],
        answer: '//This is a comment'
    },
    {
        title: "How do you declare a JavaScript variable?",
        choices: ['v myName','var myName', 'variable myName', 'declare.var.MyName'],
        answer: 'var myName'
    },
]
var questionsEl = document.querySelector("#questions");
var timerEl = document.querySelector("#time");
var choicesEl = document.querySelector("#choices");
var submitBtn = document.querySelector("#submit");
var startBtn = document.querySelector("#start");
var initialsEl = document.querySelector("#initials");
var feedbackEl = document.querySelector("#feedback");


var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

function startQuiz() {
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide");
  questionsEl.removeAttribute("class");
   timerId = setInterval(clockTick, 1000);
  timerEl.textContent = time;

  getQuestion();
}

function getQuestion() {
   var currentQuestion = questions[currentQuestionIndex];
  var titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQuestion.title;
   choicesEl.innerHTML = "";
  currentQuestion.choices.forEach(function(choice, i) {
    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", choice);
    choiceNode.textContent = i + 1 + ". " + choice;
    choiceNode.onclick = questionClick;
    choicesEl.appendChild(choiceNode);
  });
}

function questionClick() {
  if (this.value !== questions[currentQuestionIndex].answer) {
    time -= 15;
    if (time < 0) {
      time = 0;
    }
     }

  feedbackEl.setAttribute("class", "feedback");
  setTimeout(function() {
    feedbackEl.setAttribute("class", "feedback hide");
  }, 1000);

  currentQuestionIndex++;
  if (currentQuestionIndex === questions.length) {
    quizEnd();
  } else {
    getQuestion();
  }
}

function quizEnd() {
  clearInterval(timerId);

  var endScreenEl = document.getElementById("end-screen");
  endScreenEl.removeAttribute("class");

  var finalScoreEl = document.getElementById("final-score");
  finalScoreEl.textContent = time;
  questionsEl.setAttribute("class", "hide");
}

function clockTick() {
  time--;
  timerEl.textContent = time;
  if (time <= 0) {
    quizEnd();
  }
}

function saveHighscore() {
  var initials = initialsEl.value.trim();

  if (initials !== "") {
    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];
    var newScore = {
      score: time,
      initials: initials
    };
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));
    window.location.href = "score.html";
  }
}

function checkForEnter(event) {
  if (event.key === "Enter") {
    saveHighscore();
  }
}

submitBtn.onclick = saveHighscore;

startBtn.onclick = startQuiz;

initialsEl.onkeyup = checkForEnter;


