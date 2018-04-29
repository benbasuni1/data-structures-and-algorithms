/*
 * ALGORITHM:
 *   make string into an array by space and trim
 *   return length of last element in array
 */

const lengthOfLastWord = s => {
  let sArr = s.trim().split(' ');
  return sArr[sArr.length - 1].length;
}

console.log(lengthOfLastWord('i am an awesome baby'));

/*
 * TIME AND SPACE COMPLEXITY:
 *  T : O(n)
 *  S : O(1)
 */
