/**
 * @param {string} agenda
 * @param {string} phone
 * @returns {{ name: string, address: string } | null}
 */
function findInAgenda(agenda, phone) {
  // Initialize an array to store the matches
  const matches = [];

  // Split the agenda into lines and process each line
  agenda.split('\n').forEach((line) => {
    // Extract the phone number and name from the line
    const phoneMatch = line.match(/\+(\d{1,2}-\d{3}-\d{3}-\d{3})/);
    const nameMatch = line.match(/<([^>]+)>/);

    // If both phone number and name are found
    if (phoneMatch && nameMatch) {
      const fullPhone = phoneMatch[1];
      const name = nameMatch[1];
      const address = line
        .replace(phoneMatch[0], '') // Remove the phone number from the line
        .replace(nameMatch[0], '') // Remove the name from the line
        .trim(); // Trim any extra whitespace
      
      // If the phone number matches the search phone number, add to matches
      if (fullPhone.includes(phone)) {
        matches.push({ name, address });
      }
    }
  });

  // Return the match if exactly one is found, otherwise return null
  return matches.length === 1 ? matches[0] : null;
}