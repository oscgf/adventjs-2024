/**
 * @param {boolean[][]} grid
 * @returns {number[][]}
 */
function detectBombs(grid) {
  // Function to check the number of bombs in adjacent cells
  function checkAdjacents(i, j) {
    // Determine the range of rows and columns to check
    const i_min = Math.max(i - 1, 0);
    const i_max = Math.min(i + 1, grid.length - 1) + 1;
    const j_min = Math.max(j - 1, 0);
    const j_max = Math.min(j + 1, grid[i].length - 1) + 1;
    // Extract the subgrid of adjacent cells
    const subGrid = grid.slice(i_min, i_max).map(row => row.slice(j_min, j_max));
    // Count the number of bombs in the subgrid, excluding the current cell
    return subGrid.flat().filter(Boolean).length - grid[i][j];
  }

  // Initialize the bombs array
  const bombs = [];
  // Iterate through each cell in the grid
  for (let i = 0; i < grid.length; i++) {
    bombs[i] = [];
    for (let j = 0; j < grid[i].length; j++) {
      // Calculate the number of adjacent bombs for each cell
      bombs[i][j] = checkAdjacents(i, j);
    }
  }
  // Return the resulting bombs array
  return bombs;
}