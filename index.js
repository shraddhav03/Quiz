const readlineSync = require("readline-sync");



var score = 0;



var questions = [
  {
    question: "What is capital of India? ",
    answer: "New Delhi"
  },

  {
    question: "Who is the current Prime Minister of India? ",
    answer: "Mr.Narendra Modi"
  },

  {
    question: "How many states are there in India? ",
    answer: "28"
  },

  {
    question: "What is Nation animal of India? ",
    amswer: "tiger"
  },

  {
    question: "What is National bird of India? ",
    answer: "Peacock"
  }
];

function welcome() {
  var userName = readlineSync.question('May I have your name? ');
  console.log('Hi ' + userName + '!' + " Welcome to Quiz about India");
  console.log("**************************")
}

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {

    console.log("right");
    score = score + 1;
  } else {
    console.log("wrong");
  }
  console.log("current score is :", score);
  console.log("___________________");
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You Scored:", score);
}

welcome();
game();
showScores();