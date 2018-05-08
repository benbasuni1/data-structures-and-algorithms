/**
 * If either one of the linked List is empty, return null
 *
 * set temporary variable a, b to headA, headB respectively
 *
 * while a !== b
 *  if a exists, set a = a.next, otherwise set to headB
 *  if b exists, set b = b.next, otherwise set to headA
 *
 *  return a
 */

const getIntersectionNode = (headA, headB) => {
  if (!headA || !headB) return null;

  let a = headA;
  let b = headB;

  while (a !== b) {
    a = a ? a.next : headB;
    b = b ? b.next : headA;
  }

  return a;
}


