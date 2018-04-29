/*
 * ALGORITHM:
 *
 * If strs is empty, return '';
 *
 * Loop through first string
 *   Loop through array of strings
 *     If first string[i] !== str[i] return str.slice(0, i)
 *
 * return all of first string
 */

const longestCommonPrefix = strs => {
  if (!strs.length) return '';

  for (let i = 0; i < strs[0].length; i++) {
    for (let str of strs) {
      if (strs[0][i] !== str[i]) return str.slice(0, i);
    }
  }

  return strs[0];
}

/*
 * TIME AND SPACE COMPLEXITY:
 *   T : O(n^2)
 *   S : O(1)
 */
