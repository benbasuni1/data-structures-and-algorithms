const twoSum = (nums, target) => {
  let hash = {};

  debugger;
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];

    if (hash.hasOwnProperty(target - current)) return [hash[target - current], i];

    hash[current] = i;
  }

  return null;
}

console.log(twoSum([2, 7, 11, 15], 9));

/*
 * ALGORITHM:
 *   Store [target - current] into hash table with index as value
 *   Loop through the array
 *     If hash has target - current as key, return the value of hash[target - current] and currentIndex
 */

/*
 * TIME AND SPACE COMPLEXTY:
 *   T : n
 *   S : n
 */
