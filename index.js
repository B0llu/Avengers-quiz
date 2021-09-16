var readlineSync = require("readline-sync");
var score = 0

var userName = readlineSync.question("What is your Name? ");

console.log("Welcome " + userName + " to the Avengers Quiz");

//data of high score
var highscores = [
  {
    Name: "Dhruv",
    score: 5
  },

  {
    Name: "Akshay",
    score: 5
  }
]


// play function

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("Correct");
    score = score + 1;
    
  } else {
    console.log("Nope")

  }

  console.log("current score: ", score);
   console.log("--------------")
}
// array of objects
var questions = [{
  question: "What is the name of First Avenger? ",
  answer: "steve"
  }, {
  question: "Who is the head of Shield? ",
  answer: "nick fury"
  }, {
  question: "Who created Ultron? ",
  answer: "stark and banner"
}, {
  question: "What were the avengers eating in the post credit scene of movie Age of Ultron? ",
  answer: "shwarma"
}, {
  question: "What were ironmans last words to thanos? ",
  answer: "i am ironman"
}];
 
// loop

for (var i=0; i<questions.length; i++) {
  var curruntQuestion = questions[i];
  play(curruntQuestion.question, curruntQuestion.answer)
}

console.log("Congratulations you have answered all the questions, YOUR SCORE IS: ", score);

console.log("Check out the scores ", highscores)