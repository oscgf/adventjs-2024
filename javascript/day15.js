/**
  * @param {Array<Object>} data
  * @returns {string}
  */
function drawTable(data) {
  // Auxiliar function to calculate the length of the longest string
  function maxLength(data) {
    const keys = Object.keys(data[0]);
    return keys.map(key => {
      return Math.max(
        key.length,
        ...data.map(obj => String(obj[key]).length)
      );
    });
  }

  // Auxiliar function to capitalize only the first letter of a string
  function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // Auxiliar function to draw a line
  function drawLine(lengths) {
    return '+-' + lengths.map(length => '-'.repeat(length)).join('-+-') + '-+';
  }

  // Auxiliar function to draw the header
  function drawHeader(arr, lengths) {
    arr = arr.map(capitalizeFirst);
    return [drawLine(lengths), drawRow(arr, lengths), drawLine(lengths)].join('\n');
  }

  // Auxiliar function to draw a row
  function drawRow(arr, lengths) {
    return '| ' + arr.map((value, i) => String(value).padEnd(lengths[i])).join(' | ') + ' |';
  }

  // Calculate the maximum length of each column
  const lengths = maxLength(data);
  // Draw the header
  const header = drawHeader(Object.keys(data[0]), lengths);
  // Draw the rows
  const rows = data.map(obj => drawRow(Object.values(obj), lengths)).join('\n');
  // Return the table
  return [header, rows, drawLine(lengths)].join('\n');
}