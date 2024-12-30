/** 
 * @param {string} ornaments
 * @return {number} - The price of the tree
 */
function calculatePrice(ornaments) {
  // Define the ranking values for each ornament
  const ranking = {
    "*": 1,
    "o": 5,
    "^": 10,
    "#": 50,
    "@": 100
  };

  // Calculate the total value of the ornaments
  const value = ornaments.split('').reduce((acc, current, i) => {
    // Get the value of the current and next ornament or 0 if it doesn't exist
    const actual = ranking[current];
    const next = ranking[ornaments[i + 1]] || 0;
     // Add or subtract the value based on the next ornament
    return (actual >= next) ? acc + actual : acc - actual;
  }, 0);
  
  // Return the calculated value or undefined if the value is 0
  return value || undefined;
}