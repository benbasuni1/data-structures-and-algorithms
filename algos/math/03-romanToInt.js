/*
 * ALGORITHM:
 *   loop through x,
 *   have a pointer current and next,
 *
 *   if current < next, subtract to result
 *   otherwise add to result
 *
 *   return result
 */

const roman = {
 I : 1,
 V : 5,
 X : 10,
 L : 50,
 C : 100,
 D : 500,
 M : 1000
}

const romanToInt = x => {
  let result = 0;

  for (let i = 0; i < x.length; i++) {
    let current = x[i];
    let next = x[i + 1];

    if (roman[current] < roman[next]) result -= roman[current];
    else result += roman[current];
  }

  return result;
}

/*
 * TIME AND SPACE COMPLEXITY:
 *   T : O(n)
 *   S : O(n)
 */
