/**
 * @param {number[]} indices - The reno indices.
 * @param {number} length - The length of the race.
 * @returns {string} The reno race.
 */
function drawRace(indices, length) {
  // Create a lane filled with '~'
  const laneTemplate = Array(length).fill('~');

  // Create leading spaces for lane alignment
  const spaces = Array(indices.length - 1).fill(' ');
  
  // Map each index to a track string
  const tracks = indices.map((position, i) => {
      // Create a copy of the lane template
      const lane = [...laneTemplate];

      // Adjust position to fit within track bounds
      let pos = position > 0 ? position : length + position;
      if (pos < length) lane[pos] = 'r';

      // Add leading spaces for lane alignment and lane number
      return `${spaces.slice(i).join('')}${lane.join('')} /${i + 1}`;
    });
    
  // Join all tracks with newline characters
  return tracks.join('\n');
}
