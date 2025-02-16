const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = '';


//TODO: Variables for Part 2
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "
];
let correctAnswers = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3"
];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question('What is your name?\n');
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
//candidateAnswer = input.question(question);
let tempAnswer = '';
for (let i = 0; i < questions.length; i++) {
  tempAnswer = input.question(questions[i]);
  candidateAnswers.push(tempAnswer);
}


}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 


//new output
console.log(`Candidate Name: ${candidateName}`)
for (let i = 0; i < candidateAnswers.length; i++) {
  console.log(`${i+1}) ${questions[i]}\nYour answer: ${candidateAnswers[i]}\nCorrect Answer: ${correctAnswers[i]}.\n`)

}

  let grade = 0;  //TODO 3.2 use this variable to calculate the candidates score.
  let numCorrectAnswers = 0;
  for (let i = 0; i < candidateAnswers.length; i++) {
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      numCorrectAnswers += 1;
      grade = ((numCorrectAnswers) / (questions.length)) * 100;
    }
  }


  if (grade >= 80) {
    console.log(`\nCongratulations, you passed the quiz with a score of ${grade}%. Good job!`);
  } else {
    console.log(`\nSorry, your score of ${grade}% is NOT a passing grade.`);
  }
//new output pt 2

  console.log(`>>> Overall Grade: ${grade}% (${numCorrectAnswers} of ${questions.length}) correct <<<`);
if (grade >= 80) {
  console.log(`>>> STATUS: PASSED <<<`);
} else {
  console.log(`>>> STATUS: FAILED <<<`);
}

  return grade;

}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log(`Hello, ${candidateName}. Welcome!`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};