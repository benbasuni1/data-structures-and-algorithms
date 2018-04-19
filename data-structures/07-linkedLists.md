# Linked Lists
1. Intro
2. Node Element in JavaScript
3. Manually Build a Linked List
4. General Linked List Operations
5. Insert Element into Linked List
6. Find Index in Linked List
7. Remove Element in Linked List
8. Search Element in Linked List
9. Summary
## Intro
---
Linked Lists are an ordered ste of nodes where each node contains a link to its successor.  
If you need to access elements at random positions, don't used a Linked List.  

**Head Node** - The first node in a linked list.

## Node Element in Javascript
```js
const node = {

  // Some data value
  data : 0, 

  // Reference to next node
  next : null

}
```

## Manually Build a Linked List
```js
// Instantiate the nodes
let node1 = { data : 100, next: null }
let node2 = { data : 200, next: null }
let node3 = { data : 300, next: null }

// Connect the nodes
node1.next = node2;
node2.next = node3;

const currentNode = node1;

// Traversing through a Linked List
while (currentNode) {
  console.log(currentNode);
  currentNode = currentNode.next;
}
```

## General Linked List Operations
```js
function Node(data)   { this.data = data; this.next = null; }
function LinkedList() { this.length = 0; this.head = null; }
LinkedList.prototype.push = function(data) {}
LinkedList.prototype.itemAt = function(index) {}
LinkedList.prototype.remove = function(index) {}

```

## Insert Element into Linked List
### Algorithm:
1. Set a new node variable with data
2. If Linked List is empty, set the head node to the new node
3. Otherwise,   
      Iterate through the Linked List until you get to the end  
      Add the node to the last node
5. Increment length by 1
### Code:
```js
LinkedList.prototype.push = function(data) {

  // Set a new node variable
  let node = new Node(data);

  let current = this.head;

  // If Linked List is empty, set the head node to the new node
  if (!current) current = node;

  else {

    // Otherwise, iterate through the Linked List, until you get to the end
    while (current.next) { current = current.next }

    // Add the node to the last node
    current.next = node;

  }

  // Increment length by 1
  this.length++;
}
```

## Find Element in Linked List
### Algorithm:
1. Check to see if index is in bounds
2. Iterate through LInked List until we reach index
3. Return data
### Code:
```js
LinkedList.prototype.itemAt = function(index) {

  // Check to see if index is in bounds
  if (index < 0 || index >= this.length) return null;

  let current = this.head;
  let counter = 0;

  // Iterate through Linked List until we reach the index
  while (counter < index) {
    current = current.next;
    counter++;
  }

  // Return data
  return current.data;
}
```

## Remove Element in Linked List
### Algorithm:
1. Check to see if index is in bounds
2. If index is 0, set head to current.next
3. Otherwise, iterate until we reach index, while keeping track of previous
4. Connect previous to current's next (currentNode acts as middleman)
5. Decrement length by 1 and return current.data
     
### Code:
```js
LinkedList.prototype.remove = function(index) {
  // Check to see if index is in bounds
  if (index < 0 || index >= this.length) return null;

  let current = this.head;

  // if index is 0, Set head to current.next
  if (index === 0) this.head = current.next;
  else {

    let previous = null;
    let counter = 0;

    // Otherwise iterate until we reach index, while keeping track of previous
    while (counter < index) {
      previous = current;
      current = current.next;
      counter++;
    }

    // Connect previous to current's next (current acts as middleman)
    previous.next = current.next;
  }

  // Decrement length by 1
  this.length--;

  return current.data;
}
```

## Search Element in Linked List
### Algorithm:
1. Iterate through Linked List  
   If data matches with current.data, return counter  
   Increment counter  
   Traverse to next node
2. Return undefined if nothing found
     
### Code:
```js
LinkedList.prototype.search = function(data) {
  let current = this.head;
  let counter = 0;

  // Iterate through List
  while (current) {

    // If data is matching with current.data, return counter
    if (current.data === data) return counter;

    // Increment Counter
    counter++;
    
    // traverse to next node
    current = current.next;
  }

  return undefined;
}
```

## Summary
1. Linked list comprises of a chain of nodes.
2. Each node contains a data element and the reference to the next node in the chain.
3. Linked lists are better for scenarios where you need to insert or remove elements from the middle.
4. Unlike arrays, linked lists don't provide random access. Hence, look up and retrieval in linked lists are slower than an array.

