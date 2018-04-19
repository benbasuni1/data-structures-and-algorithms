# Contents
1. Defining a Queue
2. Enqueue - Insert into a Queue
3. Dequeue - Extract from Queue
4. Peek - Look at what will be dequeued
5. Get Queue Size
6. Is Queue Empty?

# Queues
---
## Defining a Queue
Queue is a **First In, First Out** data structure.

#### Setup:
  1. {Integer} head of our queue
  2. {Array} data - contains items in our queue

#### Code: 
```js
function Queue() {

  // { Integer } head of our queue init to 0
  this.head = 0;

  // Empty array called data that will hold our items
  this.data = [];
}
```

### Enqueue {push}
```js
Queue.prototype.enqueue = function(data) { this.data.push(data) }
```
## Dequeue {shift}

#### Algorithm:
  1. If head is negative or the head is greater than the # of items, return null
  2. { Array } data (w/ index head) as dequeuedItem
  3. Increment head by 1
  4. If head is 100, delete previous 100 pointers and reset head to 0
  5. Return dequeuedItem
#### Code:
```js
Queue.prototype.dequeue = function() {

  // If head is negative or the head is greater than the # of items, return null
  if (this.head < 0 || this.head >= this.data.length) return null;

  // { Array } data (w/ index head) as dequeuedItem
  let dequeuedItem = this.data[this.head];

  // Increment head by 1
  this.head++;

  // If head is 100, delete previous 100 pointers and reset head to 0
  if (this.head === 100) {
    this.data.splice(0, 100);
    this.head = 0;
  }

  // Return dequeuedItem
  return dequeuedItem;
}
```

## Peek

#### Algorithm:
1. If head is negative or the head is greater than the # of items, return null
2. Return { Array } data (w/ index head)

#### Code:
```js
Queue.prototype.peek = function() {
  // if head is negative or the head is greater than the # of items, return null
  If (this.head < 0 || this.head >= this.data.length) return null;

  // Return { Array } data (w/ index head)
  return this.data[this.head];
}
```

## Get Size
```js
Queue.prototype.size = function() { return this.data.length - this.head; }
```

## isEmpty
```js
Queue.prototype.isEmpty = function() { return this.head === this.data.length }
```
## Summary
1. A queue is a first-in-first-out (FIFO) data structure
2. It supports Enqueue for insertion and Dequeue for extraction of items.
3. Peek operation return the top most item in the queue.
4. Javascript array supports Enqueue (Array.push) and Dequeue (Array.shift)
5. Implementing dequeue using Array.shift can be slow.
6. Dequeue operation should do periodic cleanup to save memory.
