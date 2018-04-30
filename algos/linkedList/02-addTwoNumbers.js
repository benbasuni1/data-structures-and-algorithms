const LinkedList = require('./utils/LinkedList.js');
/*
 * ALGORITHM:
 *   Create a new Node list
 *
 *   While list1 or list2 exists,
 *     add list1Val to sum, iterate
 *     add list2Val to sum, iterate
 *
 *     if sum > 10, carry becomes 1, subtract 10 from sum
 *
 *     current.next is new Node with sum
 *     iterate current
 *
 *     reset sum and carry
 *
 *   return list.next
 */

const addTwoNumbers = (l1, l2) => {
  let list    = new LinkedList(0);
  let current = list;
  let sum     = 0;
  let carry   = 0;

  while (l1 || l2 || sum > 0) {
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    }

    current.next = new LinkedList(sum);
    current = current.next;

    sum   = carry;
    carry = 0;
  }

  return list.next;
}

/*
 * TIME AND SPACE COMPLEXITY:
 *  T : O(mn)
 *  S : O(mn) + 1
 */

