/*
 * ALGORITHM:
 *  Setup cache with 1st element of nums
 *
 *  loop through nums
 *    if lastCached is negative, push current to cache
 *    else push current + lastCached to cache
 *
 *  return Math.max of cache
 */

const maximumSubArray = nums => {
  let cache = [nums[0]];

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    let lastCached = cache[cache.length - 1];

    if (lastCached < 0) cache.push(current);
    else cache.push(current + lastCached);
  }

  return Math.max(...cache);
}

console.log(maximumSubArray([-2,1,-3,4,-1,2,1,-5,4]));

/*
 * TIME AND SPACE COMPLEXITY:
 *   T : O(n)
 *   S : O(n)
 */
