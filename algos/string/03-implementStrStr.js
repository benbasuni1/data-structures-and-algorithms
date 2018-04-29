/*
 * ALGORITHM:
 *   If needle is empty, return 0
 *
 *   loop through haystack.length - needle.length
 *      if haystack[i] === needle[0]
 *        if substring of haystack of length needle === needle, return index
 *
 *   return -1
 */

const implementStrStr = (haystack, needle) => {
  if (!needle.length) return 0;

  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    if (haystack[i] === needle[0]) {
      if (haystack.substring(i, i + needle.length) === needle) return i;
    }
  }

  return -1;
}

console.log(implementStrStr('hello', 'll'));

/*
 * TIME AND SPACE COMPLEXITY:
 *   T : O(n)
 *   S : O(1)
 */
