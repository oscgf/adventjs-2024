/**
 * @param {number[]} reindeer
 * @param {number[]} stables
 * @returns {number}
 */
function minMovesToStables(reindeer, stables) {
  // Sort both arrays
  reindeer.sort((a, b) => a - b);
  stables.sort((a, b) => a - b);

  // Calculate total distance
  return reindeer.reduce((total, rPos, i) => total + Math.abs(rPos - stables[i]), 0);
}