/**
 * @param {string[]} instructions - The instructions to execute
 * @returns {number} The value of the register A
 */
function compile(instructions) {
  // Initialize an empty object to store register values
  const assembler = {}
  // Iterate over each instruction
  for (let i = 0; i < instructions.length; i++) {
    // Split the instruction into its components
    const [order, x, y] = instructions[i].split(' ')
    // Ensure the register x is initialized to 0 if not already
    if (!assembler.hasOwnProperty(x)) assembler[x] = 0;
    // Handle the different types of instructions
      // Move the value of x (or the value in register x) to register y
    if (order === 'MOV') assembler[y] = isNaN(x) ? assembler[x] : Number(x);
      // Increment the value in register x by 1
    if (order === 'INC') assembler[x] = (assembler[x]) + 1;
      // Decrement the value in register x by 1
    if (order === 'DEC') assembler[x] = (assembler[x]) - 1;
      // Jump to instruction y if the value in register x is 0
    if (order === 'JMP' && assembler[x] === 0) i = Number(y) - 1;
  }
  // Return the value in register A if it exists
  return assembler.hasOwnProperty('A') ? assembler['A'] : undefined;
}