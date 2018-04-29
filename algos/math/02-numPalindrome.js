/*
 * ALGORITHM:
 *  turn x to string
 *
 *  2 pointers, begin and end
 *  if pointer in beginning and end dont match, return false
 *
 *  return true
 */

const numPalindrome = x => {
  if (x < 0) return false;

  let s = x.toString().split('');

  let begin = 0;
  let end = s.length - 1;

  while (begin < end) {
    if (s[begin] !== s[end]) return false;
    begin++;
    end--;
  }

  return true;
}

/*
 * TIME AND SPACE COMPLEXITY:
 *  T : O(n)
 *  S : O(1)
 */
