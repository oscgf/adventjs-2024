/**
 * @param {number} weight - Total weight of the gifts
 * @returns {string} - Stacked boxes represented as ASCII art
 */
function distributeWeight(weight) {
  // Auxiliar function to get the minimum number of boxes needed to distribute the weight
  function getMinNumBoxes() {
    let diff = weight;
    let boxes = [];
    const keys = Object.keys(boxRepresentations);
    while (diff > 0) {
      // Iterate over the keys from the biggest to the smallest
      for (let i = keys.length - 1; i > -1; i--) {
        const key = keys[i];
        // Add boxes while the current key can be subtracted from the remaining weight
        while (diff % key < diff) {
          boxes.push(key);
          diff -= key;
        }
      }
    }
    return boxes;
  }

  // Auxiliar function to stack the boxes
  function stack(bottom, top) {
    if (bottom.length === 0) {
      return top;
    }
    const topEnd = top[top.length - 1];
    // Combine the last line of the top box with the first line of the bottom box
    const combinedStart = (topEnd + bottom[0].slice(topEnd.length)).replace(' ', '');
    return [...top.slice(0, -1), combinedStart, ...bottom.slice(1)];
  };

  // Auxiliar function to get the stacked boxes as a single string
  function getStackedBoxes(boxes){
    let stackedBoxes = [];
    for (let i = 0; i < boxes.length; i++) {
      const box = boxRepresentations[boxes[i]];
      stackedBoxes = stack(stackedBoxes, box);
    }
    return stackedBoxes.join('\n');
  };

  const boxRepresentations = {
    1: [" _ ", "|_|"],
    2: [" ___ ", "|___|"],
    5: [" _____ ", "|     |", "|_____|"],
    10: [" _________ ", "|         |", "|_________|"]
  };

  const boxes = getMinNumBoxes();
  const stackedBoxes = getStackedBoxes(boxes);
  return stackedBoxes;
}