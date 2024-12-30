/**
 * @param {string[]} names - Array of names to frame
 * @returns {string} The framed names
 */
function createFrame(names) {
  // Find the length of the longest name
  const length = Math.max(...names.map(name => name.length));
  
  // Create the top and bottom border of the frame
  const border = '*'.repeat(length + 4);
  
  // Create the rows with names, each padded to the length of the longest name
  const rows = names.map(name => `* ${name.padEnd(length)} *`).join('\n');
  
  // Combine the border and rows to form the final framed string
  return [border, rows, border].join('\n');
}