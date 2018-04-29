/*
 * ALGORITHM:
 *   if x is a single digit, return x
 *
 *   make x to string
 *
 *   if s starts with -,
 *     helper start from 1
 *   else
 *     helper start from 0
 *
 *   return s, if it is inside boundaries
 *
 *   Helper => swap begin and end, if beginning of s is 0, splice it
 */

const helper = (s, start, end) => {
  let begin = start;

  while (start < end) {
    let temp = s[start];
    s[start] = s[end];
    s[end] = temp;
    start++;
    end--;
  }

  while (s[begin] === '0') {
    s.splice(begin--, 1);
  }
}

const reverseInt = x => {
  if (!x || x < 10 && x > -10) return x;

  let s = x.toString().split('');

  if (s[0] === '-') helper(s, 1, s.length - 1);
  else helper(s, 0, s.length - 1);

  let result = parseInt(s.join('');

  return (result > Math.pow(2, 31) || result < Math.pow(-2, 31)) ? 0 : result;
}

/*
 * TIME AND SPACE COMPLEXITY
 *   T : O(n)
 *   S : O(1)
 */
