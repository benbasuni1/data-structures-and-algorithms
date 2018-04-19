# Stacks
---
1. Defining a Stack
2. Pushing - Insert into a stack
3. Popping - Extract most recently added
4. Peeking - Look at most recently added without removing
5. Get Stack Size
6. Is Stack Empty?
## Defining a Stack
---
Stack is **Last In, First Out** data structure that is useful in *solving many problems in computer science.*

#### Setup:
  1. {Integer} topCounter to -1
  2. {Array} values

#### Code: 
```js
function Stack() {

  // Top counter
  this.top = -1;

  // Empty array called values
  this.values = [];
}
```

## Pushing onto a Stack
---
#### Algorithm:
  1. Increment index of top most element
  2. Set values array (with index top) to data
#### Code: 
```js
Stack.prototype.push = function(data) {

  // Increment index of top most element
  this.top++;
  
  // Set values array (with index top) to data
  this.values[this.top] = data;
}
```
## Popping Elements from the Stack
---

#### Algorithm:
  1. If Stack is empty, return null
  2. Store the last item on the stack to variable (topElement)
  3. Decrement Top Counter by 1
  4. Remove the last element, EXACTLY the same as calling pop()
  5. Return (topElement)

#### Code:
```js
Stack.prototype.pop = function() {

  // If Stack is empty, return null
  if (this.top < 0) return null;

  // Store the last item on the stack as topElement variable
  let topElement = this.values[this.top];

  // Decrement Top Counter by 1
  this.top--;

  // Remove the last element, EXACTLY the same as calling pop()
  this.values.length--;

  return topElement;
}
```

## Peeking Top Element
---
#### Algorithm:
1. If Stack is empty, return null
2. Return {Array} values with index [top]

#### Code:
```js
Stack.prototype.peek = function() {

  // If Stack is Empty, return null
  if (this.top < 0) return null;

  // Return {Array} values with index [top]
  return this.values[this.top];
}
```

## Get Size
---
```js
Stack.prototype.size = function() { return this.values.length; }
```

### isEmpty
```js
Stack.prototype.isEmpty = function() { return (this.top < 0) ? true : false; }
```
### Summary
1. Stack is a LIFO data structure
2. Stack has 3 basic operations: Push, Pop and Peek.
3. Javascript Array is actually a stack and supports Push and Pop.

