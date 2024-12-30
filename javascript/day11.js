/**
 * @param {string} filename - The filename to decode.
 * @returns {string} The decoded filename.
 */
function decodeFilename(filename) {
  // Regular expression to match the pattern
  const match = filename.match(/^\d+_(.+?\..+)\./);

  // Return the captured group or an empty string
  return match ? match[1] : '';
}