/*
 * ALGORITHM:
 *   Loop through array DESC
 *     incr lastDigit
 *
 *     if lastDigit > 9, lastDigit = 0
 *     Otherwise, just return digit and exit
 *
 *   add 1 to the front
 *
 *   return digits
 */

const plusOne = digits => {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++;

    if (digits[i] > 9) digits[i] = 0;
    else return digits;
  }

  digits.unshift(1);

  return digits;
}

console.log(plusOne([8, 9, 9, 9]));

/*
 * TIME AND SPACE COMPLEXITY:
 *   T : O(n)
 *   S : O(1)
 */
