/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
function moveTrain(board, mov) {

  // Function to check if the train crashes
  function checkCrash(row, col) {
    return row < 0 || row >= board.length || col < 0 || col >= board[row].length || board[row][col] === obstacle;
  }

  // Function to check if the train eats food
  function checkEat(row, col) {
    return board[row][col] === food;
  }

  // Define the board objects
  const boardObjects = {
    'train': '@',
    'obstacle': 'o',
    'food': '*',
    'empty': '.'
  }

  // Define the movement directions
  const directions = {
    'U': [-1, 0],
    'D': [1, 0],
    'R': [0, 1],
    'L': [0, -1]
  }

  // Destructure the board objects for easy access
  const {train, obstacle, food, empty} = boardObjects;
  // Get the row and column change based on the movement direction
  const [rowChange, colChange] = directions[mov];
  // Iterate through each row of the board
  for (let trainRow = 0; trainRow < board.length; trainRow++) {
    // Find the column index of the train in the current row
    const trainCol = board[trainRow].indexOf(train);
    
    // If the train is found in the current row
    if (trainCol > -1) {
      // Calculate the next row and column based on the movement direction
      const nextRow = trainRow + rowChange;
      const nextCol = trainCol + colChange;

      // Check for crash or eat conditions
      if (checkCrash(nextRow, nextCol)) return 'crash';
      if (checkEat(nextRow, nextCol)) return 'eat';

      // If no special condition is met, return 'none'
      return 'none';
    }
  }
  return 'none';

}