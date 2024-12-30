/** @param {string[]} gifts
 *  @returns {boolean} True if the gift is inside the box
 */
function inBox(box) {
  // Iterate through each row of the box, excluding the first and last rows
  for (let i = 1; i < box.length - 1; i++) {
    const row = box[i]; // Get the current row
    const index = row.indexOf('*'); // Find the index of the gift in the current row

    // Check if the gift is found and it is not on the border of the box
    if (index !== -1) {
      return (index > 0 && index < row.length - 1);
    }
  }
  return false; // Return false if the gift is not found inside the box
}