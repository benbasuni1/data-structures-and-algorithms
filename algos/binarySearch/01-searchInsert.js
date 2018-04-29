/*
 * ALGORITHM:
 *   set pointers lo and hi
 *
 *   while (lo <= hi)
 *    set mid to lo + hi / 2
 *
 *    if (target === midVal) return midIndex
 *    elif (target > midVal) lo = mid + 1;
 *    elif (target < midVal) hi = mid - 1;
 *
 *   return lo
 */

const searchInsert = (nums, target) => {
  let lo = 0;
  let hi = nums.length - 1;

  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);

    if (nums[mid] === target) return mid;
    else if (target > nums[mid]) lo = mid + 1;
    else if (target < nums[mid]) hi = mid - 1;
  }

  return lo;
}

console.log(searchInsert([1,3,5,6], 5));
/*
 * TIME AND SPACE COMPLEXITY:
 *  T : log n
 *  S : 1
 */
