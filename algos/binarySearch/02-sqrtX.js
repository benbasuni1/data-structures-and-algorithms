/*
 * ALGORITHM:
 *  Binary Search
 *  lo = 0
 *  hi = half of x + 1
 *
 *  while lo <= hi
 *    set mid as floor.lo + hi / 2
 *
 *    if x^2 === mid return mid
 *    else if x^2 < mid lo = mid + 1
 *    else if x^2 > mid hi = mid - 1
 *
 *  return right
 */

const mySqrt = x => {
  let lo = 0;
  let hi = Math.floor(x / 2) + 1;

  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);

    if (mid * mid === x) return mid;
    else if (mid * mid < x) lo = mid + 1;
    else hi = mid - 1;
  }

  return right;
}

console.log(mySqrt(121));

/*
 * TIME AND SPACE COMPLEXITY:
 *   T : log n
 *   S : 1
 */
