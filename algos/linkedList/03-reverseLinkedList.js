/**
 * Iterative Algorithm:
 *   Point prev to null
 *
 *   while (current)
 *      Set nodesToStillConnectTo to next
 *      Set the current>next to the previous node
 *      Set prev to current node
 *      Iterate
 *
 *  return prev
 *
 * Recursive Algorithm:
 *   If no head or no head->next, return head
 *
 *   Set variable newHead recursively call algorithm on head.next
 *   Set next headers next pointer to head
 *   Set next pointer to header to null
 *
 *   Return newHead
 */

const reverseLinkedListIter = head => {
  let prev    = null;
  let current = head;

  while (current) {
    let nodeToStillConnect = current.next;
    current.next           = prev;
    prev                   = current;
    current                = nodeToStillConnect;
  }

  return prev;
}

const reverseLinkedListRecurs = head => {
  if (!head || !head.next) return head;

  let newHead    = reverseLinkedListRecurs(head.next);
  head.next.next = head;
  head.next      = null;

  return newHead;
}
