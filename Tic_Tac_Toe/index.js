const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false; // we need a boolean variable to keep track if our game is running, switch to true when initialising the game

initializeGame();

function initializeGame(){
    cells.forEach(cell => cell.addEventListener("click", cellClicked)); // adding event listeners to cells
    restartBtn.addEventListener("click", restartGame); // add event listener to restart button
    statusText.textContent = `${currentPlayer}'s turn`; // update the status text
    running = true;
}
function cellClicked(){ // when we click on a cell
    const cellIndex = this.getAttribute("cellIndex"); // "this" refers to whatever cell we clicked on
  
  // we hav an index no., that index no. withing our options or placeholders are not empty, we'll only update a cell if ther's nothing there

    if(options[cellIndex] != "" || !running){ // if our options at index of cell index are not empty space, or if the game is not running, then we will return it without doing anything
        return;
    }

    updateCell(this, cellIndex); // otherwise we will invoke update cell functn, passing 'this' and 'cellIndex' as argument
    checkWinner();
}
function updateCell(cell, index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}
function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusText.textContent = `${currentPlayer}'s turn`;
}
function checkWinner(){
    let roundWon = false;
  // when we iterate over all inner arrays, like first we hav 3 indices 0 1 2 , not we check these in options array, if these 3 are not spaces and are all same then someone won, if there is no winner we'll check the next set of win conditions

    for(let i = 0; i < winConditions.length; i++){
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];
        // thus checking empty spaces
        if(cellA == "" || cellB == "" || cellC == ""){
            continue; // we'll continue and skip this iteration
        }
      // if no empty spaces means all spaces are full, make sure they are all the same character
        if(cellA == cellB && cellB == cellC){
            roundWon = true;
            break;
        }
    }

    if(roundWon){
        statusText.textContent = `${currentPlayer} wins!`;
        running = false;
    }
    else if(!options.includes("")){ // draw condition i.e. if options do not include any empty spaces
        statusText.textContent = `Draw!`;
        running = false;
    }
    else{
        changePlayer();
    }
}
function restartGame(){
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
}