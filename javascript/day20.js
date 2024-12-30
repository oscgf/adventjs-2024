/**
 * @typedef {Record<string, number>} GiftsCount
 */

/**
 * @typedef {{ missing: GiftsCount, extra: GiftsCount }} Result
 */

/**
 * @param {string[]} received
 * @param {string[]} expected
 * @returns {Result}
 */
function fixGiftList(received, expected) {
  // Auxiliar function to convert array to object
  function array2obj(array) {
    const obj = {}
    for (let i = 0; i < array.length; i++) {
      const gift = array[i]
      obj[gift] = obj[gift] ? obj[gift] + 1 : 1
    }
    return obj
  }

  // Auxiliar function to count differences
  function differences(obj1, obj2) {
    const obj = {}
    for (const [key, value] of Object.entries(obj1)) {
      const obj2_value = obj2[key] || 0
      const obj_value = value - obj2_value
      if (obj_value > 0) obj[key] = obj_value
    }
    return obj
  }

  // Convert array to objects
  const received_obj = array2obj(received)
  const expected_obj = array2obj(expected)

  // Calculate missing and extra
  const missing = differences(expected_obj, received_obj)
  const extra = differences(received_obj, expected_obj)

  // Return the result containing missing and extra gifts
  return { missing, extra }
}