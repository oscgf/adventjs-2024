/**
 * @param {number} height - Height of the tree
 * @param {string} ornament - Symbol to draw
 * @returns {string} Drawn tree
 */
function createXmasTree(height, ornament) {
  // Function to draw a single line of the tree
  function drawLine(i) {
    // Create the stars for the current level
    const stars = ornament.repeat(2 * i - 1);
    // Add the current level to the tree
    return `${padding.slice(0, halfWidth - i + 1)}${stars}${padding.slice(0, halfWidth - i + 1)}\n`;
  }

  // Function to draw the crown of the tree
  function drawCrown() {
    let crown = '';
    // Loop to create each level of the crown
    for (let i = 1; i <= height; i++) {
      crown += drawLine(i);
    }
    return crown;
  }

  // Function to draw the trunk of the tree
  function drawTrunk() {
    // Create the trunk with padding
    const trunk = `${padding}#${padding}`;
    // Return the trunk repeated twice
    return `${trunk}\n${trunk}`;
  }

  // Calculate the width of the tree at its base
  const width = 2 * height - 1;
  const halfWidth = (width - 1) / 2;
  const padding = '_'.repeat(halfWidth);

  // Draw the crown and trunk of the tree
  const crown = drawCrown();
  const trunk = drawTrunk();
  
  // Combine the crown and trunk to form the final tree
  return `${crown}${trunk}`;
}