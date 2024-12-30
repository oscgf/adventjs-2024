/**
 * @param {string} timeWorked - Time worked in hh:mm:ss format.
 * @param {string} totalTime - Total estimated time in hh:mm:ss format.
 * @returns {string} - The completed percentage rounded to the nearest integer with a % sign.
 */
function getCompleted(timeWorked, totalTime) {
  // Auxiliar function to convert time in hh:mm:ss format to minutes
  function getMinutes(thetime) {
    // Split the time and convert to numbers
    const [hours, mins, secs] = thetime.split(':').map(n => Number(n));
    // Convert hours and seconds to minutes and sum them up
    return hours * 60 + mins + secs / 60;
  }

  // Calculate the percentage of time worked
  const percentage = Math.round(getMinutes(timeWorked) / getMinutes(totalTime) * 100);
  
  // Return the percentage with a % sign
  return `${percentage}%`; 
}