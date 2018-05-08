/*
 * Algorithm
 *   Set 2 pointers,
 *   current => null, next => head
 *
 *   Loop through next
 *    if nextVal === val
 *      if current is null, that basically means head.val === val, therefore,
 *      we need to setup head to next.next, (this is the skipping part)
 *    Otherwise set current.next to next.next
 *
 *    If nextVal is not equal to val
 *      Set current to next
 *
 *
 *  iterate next to next.next
 */

var removeElements = function(head, val) {
  
  // Set 2 pointers, current and next
  let current = null;
  let next    = head;

  // Because current does not matter if it does not have anything to compare to with next,
  // That's why we loop through next
  while (next) {
    if (next.val === val) {
      
      // If current is null, that basically means that the head.val === val, therefore we need to set head to next.next, this is the skipping part
      if (!current) head = next.next;
      
      // Otherwise, set the current next to next.next, this is the skipping part
      else current.next = next.next;
    } else {
      
      // Otherwise, set current to move ahead by 1 node
      current = next;
    }
    
    // Iterate next to the next node
    next = next.next;
  }
  
  return head;
}
