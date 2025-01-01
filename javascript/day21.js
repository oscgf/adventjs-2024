/**
 * @param {object} tree1 - The first binary tree.
 * @param {object} tree2 - The second binary tree.
 * @returns {[boolean, string]}
 */
function isTreesSynchronized(tree1, tree2) {
  // Auxiliar function to check if two trees are mirrors
  function areMirrors(node1, node2) {
    // If both nodes are null, they are mirrors
    if (!node1 && !node2) return true;
    // If only one is null, they are not mirrors
    if (!node1 || !node2) return false;
    // Check if the values are the same and their subtrees are mirrors
    return (
        node1.value === node2.value &&
        areMirrors(node1.left, node2.right) &&
        areMirrors(node1.right, node2.left)
    );
  }

  // Compare roots and check if the trees are mirrors
  const synchronized = areMirrors(tree1, tree2);
  // Return the result and the value of the first tree
  return [synchronized, tree1.value];
}