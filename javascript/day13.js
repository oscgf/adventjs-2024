/** 
 * @param {string} moves
 * @returns {true|[number, number]} Return true if robot returns or position
 */
function isRobotBack(moves) {
  // Auxiliary function to move the robot
  const moveRobot = ((move,invert=false,duplicate=false) => {
    const negative = invert ? -1 : 1
    const double = duplicate ? 2 : 1
    if (move === 'R' || move === 'L') x += orders[move] * negative * double
    if (move === 'U' || move === 'D') y += orders[move] * negative * double
  })

  // Auxiliary function to invert the move
  const invertMove = (move => {
    if (move === 'R') return 'L'
    if (move === 'L') return 'R'
    if (move === 'U') return 'D'
    if (move === 'D') return 'U'
    return move
  })

  // Define the order of moves
  const orders = {
    'R': 1,
    'L': -1,
    'U': 1,
    'D': -1
  }

  const mods = {
    'double': '*',
    'invert': '!',
    'conditional': '?'
  }  
  
  // Initialize origin coordinates
  let x = 0;
  let y = 0;

  // Desestructure the special moves
  const {double, invert, conditional} = mods

  const visitedMoves = new Set();

  // Iterate over each move
  for (var i=0; i<moves.length; i++){
    // Get the current move
    const move = moves[i]
    // Check if the move is a valid order
    if (Object.keys(orders).includes(move)) {
      // Move the robot
      moveRobot(move)
      visitedMoves.add(move);
    }
    // Otherwise, check for special moves
    else {
      // Double intensity move
      if (move === double) moveRobot(moves[++i],false,true)
      // Invert move
      if (move === invert) moveRobot(moves[++i],true)
      // Conditional move
      if (move === conditional){
        const nextMove = moves[++i];
        if (!visitedMoves.has(nextMove)) {
          moveRobot(nextMove);
          visitedMoves.add(nextMove);
        }
      }
    }
  }
  // Return true if the robot is back to the origin
  return (x === 0 && y === 0) ? true : [x, y]
}