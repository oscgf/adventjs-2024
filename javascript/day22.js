/**
 * @param {string[]} gifts - List of unique gifts.
 * @returns {string[][]} - All possible combinations of gifts, sorted by length.
 */
function generateGiftSets(gifts) {
  // Auxiliar function to generate combinations using backtracking
  function backtrack(start, current, k) {
      // If the current combination has the required size, add it to the result
      if (current.length === k) {
          result.push([...current]);
          return;
      }
      // Iterate through the remaining toys starting from the current index
      for (let i = start; i < gifts.length; i++) {
          // Add the current toy to the combination
          current.push(gifts[i]);
          // Recurse to continue building the combination
          backtrack(i + 1, current, k);
          // Remove the last toy to try other combinations
          current.pop();
      }
  }

  // Initialize the result array to store all combinations
  const result = [];

  // Loop through all possible sizes of combinations (from 1 to n)
  for (let k = 1; k <= gifts.length; k++) {
      // Generate all combinations of size k
      backtrack(0, [], k);
  }
  
  // Return the result
  return result;
}