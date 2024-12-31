/**
 * @param {string} s
 * @returns {string}
 */
function removeSnow(s) {
  // Regular expression to match consecutive duplicate characters
  const regex = /(\w)\1/g;
  
  // Loop while there are consecutive duplicates in the string
  while (regex.test(s)) {
    // Replace consecutive duplicates with an empty string
    s = s.replace(regex, '');
  }
  
  // Return the final string
  return s;
}