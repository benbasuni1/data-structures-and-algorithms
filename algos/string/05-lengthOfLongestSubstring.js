/*
 * ALGORITHM:
 *  Set with current and rm pointer
 *  Set variable longestStr, current and rm pointer to 0
 *
 *   Loop through string
 *      if set HAS char
 *        delete from set,
 *        increment rmIdx
 *      otherwise
 *        add to set
 *        increment curIdx
 *        set longestStr to max of setSize or longestStr
 *
 *   return longestStr
 */

const lengthOfLongestSubString = str => {
  let curIdx, rmIdx, longestStr = 0;
  let tempSet = new Set();

  while (curIdx < str.length) {
    let current = str[curIdx];

    if (tempSet.has(current)) {
      tempSet.delete(str[rmIdx]);
      rmIdx++;
    } else {
      tempSet.add(current);
      curIdx++;
      longestStr = Math.max(tempSet.size, longestStr);
    }
  }

  return longestStr;
}

console.log(lengthOfLongestSubString('abcabcbb');

/*
 * TIME AND SPACE COMPLEXITY:
 *  T : O(n)
 *  S : O(n)
 */
