$(document).ready(function() {
    let currentPlayer = "X";
    let gameOver = false;
    let winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    
    function checkForWin() {
      for (let i = 0; i < winningCombinations.length; i++) {
        let combination = winningCombinations[i];
        if ($("#game-board tr:nth-child(" + (combination[0] + 1) + ") td:nth-child(" + (combination[1] + 1) + ")").text() == currentPlayer &&
            $("#game-board tr:nth-child(" + (combination[1] + 1) + ") td:nth-child(" + (combination[1] + 1) + ")").text() == currentPlayer &&
            $("#game-board tr:nth-child(" + (combination[2] + 1) + ") td:nth-child(" + (combination[2] + 1) + ")").text() == currentPlayer) {
          gameOver = true;
          $("#game-status").text("Player " + currentPlayer + " wins!");
          break;
        }
      }
    }
    
    function checkForTie() {
      let emptyCells = $(".game-cell").filter(function() {
        return $(this).text() == "";
      });
      if (emptyCells.length == 0 && !gameOver) {
        gameOver = true;
        $("#game-status").text("It's a tie!")}
    }
}); 