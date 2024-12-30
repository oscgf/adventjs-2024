/**
 * @param {string} code - The magical program to execute
 * @returns {number} - The final value after executing the program
 */
function execute(code) {
  // Auxiliar function to check sum or substract
  function checkSumOrSub(instruction) {
    return (instruction === '+') ? 1 : (instruction === '-') ? -1 : 0
  }

  // Auxiliar function to check conditional
  function checkCond(instruction, result, code, i) {
    return (instruction === '{' && !result) ? code.indexOf('}', i + 2) : i
  }

  // Initialize result variable to store the result
  let result = 0
  // Loop to iterate through all the instructions
  for (let i = 0; i < code.length; i++) {
    // Obtain the instruction
    const instruction = code[i]
    // Check if is a sum or a substract
    result += checkSumOrSub(instruction)
    // Check if is a conditional
    i = checkCond(instruction, result, code, i)
    // Check if is loop
    if (instruction === '[') {
      // Obtain length of the loop
      const length = code.indexOf(']', i + 2) - i - 1
      // Enter only when result is zero
      while (result !== 0) {
        // Iterate through all the loop
        for (let j = i+1; j < i+length+1; j++) {
          // Repeat the same process for each instruction
          const instruction = code[j]
          result += checkSumOrSub(instruction)
          j = checkCond(instruction, result, code, j)
        }
      }
      i = code.indexOf(']', i + 2)
    }
  }
  // Return the final result
  return result
}