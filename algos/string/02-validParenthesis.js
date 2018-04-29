/*
 * ALGORITHM:
 *   Loop through x
 *     if it is an opening parens, add to stack
 *     Otherwise
 *       if current is not equal to the same value as closing parens of the last item on stack, return false
 *
 *   if stack.length is 0, return true, otherwise return false
 */

const parens = {
  '{' : '}',
  '[' : ']',
  '(' : ')',
}

const validParenthesis = x => {

  if (x === '') return true;
  if (x.length < 2) return false;

  let stack = [];

  for (let i = 0; i < x.length; i++) {
    let current = x[i];
    if (parens.hasOwnProperty(current)) stack.push(current);
    else {
      if (parens[stack.pop()] !== current) return false;
    }
  }

  return stack.length === 0 ? true : false;
}

/*
 * TIME AND SPACE COMPLEXITY:
 *   T : O(n)
 *   S : O(1)
 */
