# Arrays
  **Initialize** ``` const arr = [];```   
  **Insert** ``` arr.push('z'); arr.unshift('a')```   
  **Remove** ```arr.splice(1, 1) // StartIndex, # of Items```  
  **Access** ``` arr[0]```   
  **Size** ``` arr.length``` 
# Stacks
#### Initialize
  1. {Integer} topCounter to -1
  2. {Array} values
#### Push
  1. Increment { Int } topCounter
  2. Set { Array } values (w/ index topCounter) to data
#### Pop:
  1. If Stack is empty, return null
  2. Store the last item on the stack to variable (topElement)
  3. Decrement Top Counter by 1
  4. Remove the last element, EXACTLY the same as calling pop()
  5. Return (topElement)
#### Peek:
  1. If Stack is empty, return null
  2. Return {Array} values with index [top]

#### Size:
```js
Stack.prototype.size = function() { return this.values.length; }
```

### isEmpty
```js
Stack.prototype.isEmpty = function() { return (this.top < 0) ? true : false; }
```

# Queues
#### Initialize
  1. {Integer} Head of queue (0)
  2. {Array} values

#### Enqueue (push)
```js
Queue.prototype.enqueue = function(data) { this.data.push(data) }
```

#### Dequeue (shift)
  1. If head is negative, or head is greater than # of items, return null
  2. { Array } data (w/ index head) as dequeuedItem
  3. Increment head by 1
  4. If head is 100, delete previous 100 pointers and reset head to 0
  5. Return dequeuedItem

#### Peek
1. If head is negative, or head is greater than # of items, return null
2. Return { Array } data (w/ index head)

#### Size
```js
Queue.prototype.size = function() { return this.data.length - this.head }
```

### isEmpty
```js
Queue.prototype.isEmpty = function() { return this.head === this.data.length }
```

# Sets
#### Initialize
1. Initialize with object called set
2. Initialize size with int 0 to keep track of length

#### Add Items to Set

# Dictionary
# Hash Table
# Linked Lists
# Binary Trees & BST
---
### 1. Initialize
```js
function BST() { this.root = null; }

function Node(data) {
  this.data  = data;
  this.left  = null;
  this.right = null;
}
```
### 2. Search
1. Traverse through BST
2. If X === current node's data, return true
3. Set current to left if current node's data is less than X, else to right.

### 3. Insert
1. Setup the node to be inserted
2. Handle edge case if root is empty, insert node and exit function
3. Traverse through BST
    1. if (K < current node)  
        a. **Insert into current node -> left if empty**  
        b. else set current node to current -> left (traverse)
    2. else if (K > current node)  
        a. **Insert into current node -> right if empty**  
        b. else set current node to current -> right (traverse)
    3. else just return if it's a duplicate

### 4. Traverse

1. Use array data structure [result]
2. Setup preOrderTraversal recursive function accepting BST  
    Base Case: if node is null, return
      1. Push node itself
      2. Recursive Case: run preOrderTraversal on left subtree
      3. Recursive Case: run preOrderTraversal on right subtree
3. Call preOrderTraversal on root
4. Return result
### 5. Remove
1. Setup helper function (maximum) || Predecessor
2. Setup helper function (removeImpl)    
  Traverse through the tree  
     * If K < current node's data, Set current node -> left to removeImpl on node.left   
     * If K > current node's data, Set current node -> right to removeImpl on node.right   
     * If key === current node, and current node has 2 children
        * Replace current node to its PREDECESSOR
     * Else if node only has 1 child
        * Set node to node.left || node.right
  Return node

### 6. Depth First Search
1. Set output as empty array
2. Create recursive function implementDFS w/ tree as param  
    a. Push node value to output array  
    b. If the tree has a left side, recursively call implementDFS on left subtree  
    b. If the tree has a right side, recursively call implementDFS on right subtree  
3. Call implementDFS w/ tree as param    
4. Return output  

### 7. Breadth First Search
1. Create queue array w/ top node   
2. Set output as empty array  
3. While queue is not empty  
    a. Set queue.shift as node variable, and add nodeVal into output array  
    b. If tree.left exists, push tree.left into queue  
    c. If tree.right exists, push tree.right into queue  
4. Return output  
  
# Graphs
