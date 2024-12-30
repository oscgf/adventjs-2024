/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
  // Loop while there are parentheses in the packages string
  while (packages.includes('(')) {
      // Replace the innermost parentheses and reverse the content inside them
      packages = packages.replace(/\(([^()]*)\)/g, (_, inner) => inner.split('').reverse().join(''));
  }
  // Return the fixed packages string
  return packages;
}