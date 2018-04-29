const LinkedList = require('./utils/linkedList.js');

/*
 * ALGORITHM:
 *    Create a new linkedList sorted with val -1 in beginning
 *    create a copy of it
 *
 *    While l1 and l2 are still available,
 *      Compare the 2 values, whichever one is smaller, connect the new linkedList to that one,
 *      go to next node of list
 *
 *      connect current to the next one
 *
 *    Connect list to either l1 or l2 if one of them is all traversed through
 *
 *    return newLinkedListSorted.next
 */

const mergeTwoLists = (l1, l2) => {
  let sorted = { val : -1, next : null };
  let current = sorted;

  while (l1 && l2) {

    if (l1.val > l2.val) {
      current.next = l2;
      l2 = l2.next;
    } else {
      current.next = l1;
      l1 = l1.next;
    }

    current = current.next;
  }

  current.next = l1 || l2;

  return sorted.next;
}

let l1       = new LinkedList(1);
let l2       = new LinkedList(1);
l1.next      = new LinkedList(2);
l1.next.next = new LinkedList(4);
l2.next      = new LinkedList(3);
l2.next.next = new LinkedList(4);

console.log(mergeTwoLists(l1, l2));
/*
 * TIME AND SPACE COMPLEXITY:
 *   T : O(mn)
 *   N : O(n)
 */
