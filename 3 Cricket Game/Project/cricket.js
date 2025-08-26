let scoreStr = localStorage.getItem('Score');
resetScore(scoreStr);
// let score;
function resetScore(scoreStr)
{
  score = scoreStr ? JSON.parse(scoreStr) : {
  win : 0,
  loss : 0,
  tie : 0,
};

showResult();

}

// let score = JSON.parse(scoreStr) || {
//   win : 0,
//   loss : 0,
//   tie : 0,
// };
// if(scoreStr !== undefined){
//   score = JSON.parse(scoreStr);
// }
// else{
// score = {
//   win : 0,
//   loss : 0,
//   tie : 0,
// }
// };

function generateComputerChoise() {
      // This will generate random number between 0 and 3
      let randomNumber = Math.random() * 3;

      if (randomNumber > 0 && randomNumber <= 1) {
        return 'Bat';

      } else if (randomNumber > 1 && randomNumber <= 2) {
        return 'Ball';

      } else {
        return 'Stump';

      }

    }

    function getResult(userMove, computerMove) {
      if (userMove = 'Bat') {
        if (computerMove === 'Ball') {
          score.win ++;
          return `User is won.`;
        }
        else if (computerMove === 'Bat') {
          score.tie ++;
          return `It's a tie.`;
        }
        else if (computerMove === 'Stump') {
          score.loss ++;
          return `Computer is won.`;
        }
      }
      else if (userMove = 'Ball') {
        if (computerMove === 'Ball') {
          score.tie ++;
          return `It's a tie.`;
        }
        else if (computerMove === 'Bat') {
          score.loss ++;
          return `Computer is won.`;
        }
        else if (computerMove === 'Stump') {
          score.win ++;
          return `User is won.`;
        }
      }
      else {
        if (computerMove === 'Ball') {
          score.loss ++;
          return `Computer is won.`;
        }
        else if (computerMove === 'Bat') {
          score.win ++;
          return `User is won.`;
        }
        else if (computerMove === 'Stump') {
          score.tie ++;
          return `It's a tie.`;
        }

      }



      if (computerMove === userMove) {
        return `It's a tie `;
      }
      else if (computerMove === 'Bat' && userMove === 'Ball') {
        return 'Computer has Won';
      }
    }

    function showResult(userMove, computerMove, result) {
      let ResultMsg = ` Won: ${score.win} || Lost: ${score.loss} || Tie: ${score.tie}`;

      document.querySelector('#user-move').innerText = userMove ? `You have chosen ${userMove} `: '';

      document.querySelector('#computer-move').innerText = userMove ? `Computer Choise is ${computerMove}` : '';

      document.querySelector('#result').innerText = userMove ? `Result :- ${result}` : '';

      document.querySelector('#score').innerHTML = ResultMsg;
      // console.log(score);
      localStorage.setItem('Score', JSON.stringify(score));
      
      let Message = `You have choosen ${userMove}.Computer Choise is ${computerMove}.${result}`;

      document.querySelector('#message').innerHTML = Message;

      

      // document.querySelector('#Score').innerHTML = ResultMsg;
    }