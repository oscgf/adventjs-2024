/**
 * @param {{ name: string, quantity: number, category: string }[]} inventory - Array of inventory items
 * @returns {object} Organized inventory by category and name
 */
function organizeInventory(inventory) {
  // Initialize an object to store the organized inventory
  const organized = {};

  for (const item of inventory) {
    // Destructure the item object
    const { name, quantity, category } = item;

    // Initialize category if it doesn't exist
    if (!organized[category]) {
      organized[category] = {};
    }

    // Add quantity to existing item or initialize it
    if (organized[category][name]) {
      organized[category][name] += quantity;
    } else {
      organized[category][name] = quantity;
    }
  }

  // Return the organized inventory
  return organized;
}