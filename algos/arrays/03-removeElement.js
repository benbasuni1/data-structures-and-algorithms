/*
 * ALGORITHM:
 *  Loop through arr
 *    if current === target
 *       splice current
 *       decrement index
 */

const removeElement = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      arr.splice(i, 1);
      i--;
    }
  }
}

/*
 * TIME AND SPACE COMPLEXITY:
 *   T : O(n)
 *   S : O(1)
 */
