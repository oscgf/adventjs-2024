function isRobotBack(moves) {
  function invertMove(move) {
    switch (move) {
        case 'L': return 'R';
        case 'R': return 'L';
        case 'U': return 'D';
        case 'D': return 'U';
        default: return move;
    }
  }
  let x = 0, y = 0;
  let visitedMoves = new Set(); // To track conditional moves with ?
  let invertNext = false;

  for (let i = 0; i < moves.length; i++) {
      let move = moves[i];
      let multiplier = 1;

      // Handle '*' modifier for doubling movement
      if (move === '*') {
          multiplier = 2;
          move = moves[++i];
      }

      // Handle '!' modifier for inverting movement
      if (invertNext) {
          move = invertMove(move);
          invertNext = false;
      }

      if (move === '!') {
          invertNext = true;
          continue;
      }

      // Handle '?' modifier for conditional moves
      if (move === '?') {
          let nextMove = moves[++i];
          if (visitedMoves.has(nextMove)) {
              continue; // Skip the move if it has been done before
          } else {
              visitedMoves.add(nextMove);
              move = nextMove;
          }
      }

      // Apply the movement
      for (let j = 0; j < multiplier; j++) {
          switch (move) {
              case 'L': x--; break;
              case 'R': x++; break;
              case 'U': y++; break;
              case 'D': y--; break;
              default: break;
          }
      }

      // Track all movements (invertMove already adds inverted version)
      visitedMoves.add(move);
  }

  return (x === 0 && y === 0) ? true : [x, y];
}