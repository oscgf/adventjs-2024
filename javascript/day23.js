/**
 * @param {number[]} nums - List of integers.
 * @returns {number[]} - List of missing numbers.
 */
function findMissingNumbers(nums) {
  const max = Math.max(...nums); // Find the maximum number in the list
  const numSet = new Set(nums); // Convert the list to a set
  const missing = []; // Initialize an array to store the missing numbers

  // Iterate from 1 to the maximum number
  for (let i = 1; i <= max; i++) {
    // If the number is not in the set, add it to the missing array
    if (!numSet.has(i)) missing.push(i);
  }

  // Return the list of missing numbers
  return missing;
}