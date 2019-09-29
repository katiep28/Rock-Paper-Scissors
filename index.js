console.log('Welcome to Rock Paper Scissors');

const readline1 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

const readline2 = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});


// Computer to choose either Rock Paper or Scissors
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const computerChoice = getRandomInt(2);

let computerResponse = '';


switch (computerChoice) {
  case 0:
    computerResponse = 'rock';
    break;
  case 1:
    computerResponse = 'paper';
    break;
  default:
    computerResponse = 'scissors';
    break;
}
console.log("computers choice " + computerResponse);


function handlePlayAgainResponse(response) {
  readline2.close();
  const lowerCaseResponse = response.toLowerCase();

  //Check for a valid value entered

  const responselist = ['y','n'];
  var found = responselist.find(function (element) {
    return element === lowerCaseResponse;
  });

  if (found === undefined) {
    console.log('You MUST enter either y or n.');
    // Need a loop here so that they can re-try
    return;
  }
  if (found === 'n') {
    playAgain = false;
    return console.log('Thank you for playing');
  }
  else {
    playAgain = true;
  }
}

function handleUserResponse(response) {
  readline1.close();
  const lowerCaseResponse = response.toLowerCase();
  console.log(lowerCaseResponse);

  //Check for a valid value entered

  const responselist = ['rock', 'paper', 'scissors'];
  var found = responselist.find(function (element) {
    return element === lowerCaseResponse;
  });
  console.log('found value ' + found);
  if (found === undefined) {
    console.log('You MUST enter either Rock, Paper or Scissors.');
    // Need a loop here so that they can re-try
    return;
  }

  // If both the computer and human enter the same then it is a draw

  if (lowerCaseResponse === computerResponse) {
    console.log('The computer chose: ' + computerResponse + ' It is a DRAW !');
    return;
  }

  // Check to see who wins
  switch (computerResponse) {
    case 'rock':
      if (lowerCaseResponse === 'paper') {
        console.log('The computer chose: ' + computerResponse + ' YOU WIN!');
      }
      else {
        console.log('The computer chose: ' + computerResponse + ' The COMPUTER WINs!');
      }
      break;
    case 'paper':
      if (lowerCaseResponse === 'rock') {
        console.log('The computer chose: ' + computerResponse + ' YOU WIN!');
      }
      else {
        console.log('The computer chose: ' + computerResponse + ' The COMPUTER WINs!');
      }
      break;
    case 'scissors':
      if (lowerCaseResponse === 'rock') {
        console.log('The computer chose: ' + computerResponse + ' YOU WIN!');
      }
      else {
        console.log('The computer chose: ' + computerResponse + ' The COMPUTER WINs!');
      }
      break;
  }
}
let playAgain = true;

//while (playAgain === true) {

  readline1.question("Please choose either Rock, Paper or Scissors ?\n", handleUserResponse);
  //
  console.log(" at the end");
//  readline2.question("Do you want to pay again, enter y or n ?\n", handlePlayAgainResponse);
//}

