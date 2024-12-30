/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes 
 */
function organizeShoes(shoes) {
  // Initialize objects to store the count of left and right shoes by size
  const leftShoes = {};
  const rightShoes = {};

  // Count the number of left and right shoes for each size
  shoes.forEach(({ type, size }) => {
    if (type === 'I') {
      leftShoes[size] = (leftShoes[size] || 0) + 1; // Increment count for left shoes
    } else {
      rightShoes[size] = (rightShoes[size] || 0) + 1; // Increment count for right shoes
    }
  });

  // Initialize an array to store the organized pairs of shoes
  const organized = [];

  // Find the pairs of shoes and add them to the organized array
  Object.keys(leftShoes).forEach(size => {
    if (rightShoes[size]) {
      const pairs = Math.min(leftShoes[size], rightShoes[size]); // Find the minimum count of pairs
      organized.push(...Array(pairs).fill(Number(size))); // Add the pairs to the organized array
    }
  });

  // Return the organized array
  return organized;
}