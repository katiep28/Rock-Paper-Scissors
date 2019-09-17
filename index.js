console.log( 'Welcome to Rock Paper Scissors' );
const readline = require("readline").createInterface({
     input: process.stdin,
     output: process.stdout
});

// Computer to choose either Rock Paper or Scissors
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  

  const computerChoice = getRandomInt(2);
  console.log(computerChoice);

  let computerResponse='';

  if (computerChoice === 0) {
    computerResponse = 'rock';
  }   
  else if  (computerChoice === 1) {
    computerResponse = 'paper';
  }  
  else {
    computerResponse = 'scissors';
  }
  console.log("computers choice " + computerResponse);

function handleUserResponse (response){
    readline.close();
    const lowerCaseResponse = response.toLowerCase();
    console.log(lowerCaseResponse);

//Check for a valid value entered
    
    const responselist =['rock','paper','scissors'];
    var found = responselist.find(function(element) {
        return element === lowerCaseResponse;
      });
      console.log ('found value ' + found);
      if (found === undefined){
          console.log('You MUST enter either Rock, Paper or Scissors. Try again');
        // Need a loop here so that they can re-try
        return;
       }
    
      

         // If both the computer and human enter the same then it is a draw

        if (lowerCaseResponse === computerResponse){
             console.log('The computer chose: ' + computerResponse + ' It is a DRAW !');
             return;
          }
        
         // Check to see who wins
              switch (computerResponse) {
              case 'rock':
                if (lowerCaseResponse === 'paper'){ 
                   console.log('The computer chose: ' + computerResponse + ' YOU WIN!');
                }
                else{
                  console.log('The computer chose: ' + computerResponse + ' The COMPUTER WINs!');
                }
                break;
               case 'paper':
                  if (lowerCaseResponse === 'rock'){ 
                     console.log('The computer chose: ' + computerResponse + ' YOU WIN!');
                  }
                  else{
                     console.log('The computer chose: ' + computerResponse + ' The COMPUTER WINs!');
                  }
                  break;
                case 'scissors':
                   if (lowerCaseResponse === 'rock'){ 
                     console.log('The computer chose: ' + computerResponse + ' YOU WIN!');
                    }
                   else{
                     console.log('The computer chose: ' + computerResponse + ' The COMPUTER WINs!');
                    }
                   break;
                 }
                
            
            

    

    
}
readline.question("Please choose either Rock, Paper or Scissors ?\n", handleUserResponse);
   
