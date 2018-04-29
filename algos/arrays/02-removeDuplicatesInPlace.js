/*
 * ALGORITHM:
 *   loop through the array
 *     if current === next
 *        splice current
 *        decrement i
 */

const removeDups = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
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
