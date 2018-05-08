/*
 * Set rabbit, left and right to head
 *
 * 1. Make left halfway of the whole list
 *    Handle odd case (if rabbit exists, left = next)
 *
 * 2. Reverse(left)
 *
 * 3. While (left and right.val === left.val)
 *      Iterate through
 *
 * 4. Return left === null
 */

const palindromeLinkedList = list => {
  let rabbit = head;

  let left   = head;
  let right  = head;

  while (rabbit && rabbit.next) {
    rabbit = rabbit.next.next;
    left = left.next;
  }

  if (rabbit) left = left.next;

  left = reverse(left);

  while (left && left.val === right.val) {
    left = left.next;
    right = right.next;
  }

  return left === null;
}

const reverse = list => {
  let prev = null;

  while (list) {
    let nodeConnect = list.next;
    list.next = prev;
    prev = list;
    list = nodeConnect;
  }

  return prev;
}
