/*
 * Set rabbit and turtle
 *
 * while rabbit && rabbit.next
 * rabbit>next>next
 * turtle>next
 *
 * if rabbit === turtle return true
 *
 * return false
 */

const hasCycle = list => {
  let rabbit = list;
  let turtle = list;

  while (rabbit && rabbit.next) {
    rabbit = rabbit.next.next;
    turtle = turtle.next;

    if (rabbit === turtle) return true;
  }

  return false;
}
