

// All code should be written in this file.


let playerOneMoveOneType
let playerOneMoveTwoType 
let playerOneMoveThreeType 
let playerTwoMoveOneType;
let playerTwoMoveTwoType 
let playerTwoMoveThreeType 
let playerOneMoveOneValue 
let playerOneMoveTwoValue 
let playerOneMoveThreeValue 
let playerTwoMoveOneValue 
let playerTwoMoveTwoValue 
let playerTwoMoveThreeValue 

//outline move types, define exceptions and set movetypes and values in setPlayerMoves function

function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {
  let moveTypes = ['rock', 'paper', 'scissors']

  if (moveOneType === undefined || moveTwoType === undefined || moveThreeType === undefined) {
    return 'Please input a valid move'
  } else if (moveOneValue === undefined || moveTwoValue === undefined || moveThreeValue === undefined) {
    return 'Please input a valid value'
  } else if (isNaN(moveOneValue) || isNaN(moveTwoValue) || isNaN(moveThreeValue)) {
    return 'Please input a number'
  }

  if (moveTypes.indexOf(moveOneType) === -1  || moveTypes.indexOf(moveTwoType) === -1  || moveTypes.indexOf(moveThreeType) === -1) {
    return 'Please enter a move that is either rock, paper, or scissors'
  }

  if ((moveOneValue + moveTwoValue + moveThreeValue) > 99) {
    return;
  }

  if (moveOneValue < 1 || moveTwoValue < 1 || moveThreeValue < 1) {
    return;
  }
  // if (moveOneValue < 1 || moveOneValue >)

  if (player === 'Player One') {
    playerOneMoveOneType = moveOneType;
    playerOneMoveOneValue = moveOneValue;
    playerOneMoveTwoType = moveTwoType;
    playerOneMoveTwoValue = moveTwoValue;
    playerOneMoveThreeType = moveThreeType;
    playerOneMoveThreeValue = moveThreeValue;
  } else if (player === 'Player Two') {
    playerTwoMoveOneType = moveOneType;
    playerTwoMoveOneValue = moveOneValue;
    playerTwoMoveTwoType = moveTwoType;
    playerTwoMoveTwoValue = moveTwoValue;
    playerTwoMoveThreeType = moveThreeType;
    playerTwoMoveThreeValue = moveThreeValue;
  }

  }
    
  


 


// function getRoundWinner(round) {
//     if (playerOneMoveOneType === playerTwoMoveOneType) {
//       return 'Tie'
//     } else if (playerOneMoveOneType === 'rock' && playerTwoMoveOneType === 'Scissors'){
//       return 'Player One'
//     } else if (playerOneMoveOneType === 'rock' && playerTwoMoveOneType === 'Paper') {
//       return 'Player Two'
//     }
// }

// console.log(setPlayerMoves('Player One', 'rock', 1, 'paper', 3, 'scissors', 2))