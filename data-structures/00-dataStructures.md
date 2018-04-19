# Arrays
  **{ Array } Initialize** ``` const arr = [];```   
  **{ Array } Insert** ``` arr.push('z'); arr.unshift('a')```   
  **{ Array } Remove** ```arr.splice(1, 1) // StartIndex, # of Items```  
  **{ Array } Access** ``` arr[0]```   
  **{ Array } Size** ``` arr.length``` 
# Stacks
#### { Stack } Initialize
  1. {Integer} topCounter to -1
  2. {Array} values
#### { Stack } Push
  1. Increment { Int } topCounter
  2. Set { Array } values (w/ index topCounter) to data
#### { Stack } Pop:
  1. If Stack is empty, return null
  2. Store the last item on the stack to variable (topElement)
  3. Decrement Top Counter by 1
  4. Remove the last element, EXACTLY the same as calling pop()
  5. Return (topElement)
#### { Stack } Peek:
1. If Stack is empty, return null
2. Return {Array} values with index [top]

#### { Stack } Size:
```js
Stack.prototype.size = function() { return this.values.length; }
```

### { Stack } isEmpty
```js
Stack.prototype.isEmpty = function() { return (this.top < 0) ? true : false; }
```

# Queues
# Sets
# Dictionary
# Hash Table
# Linked Lists
# Binary Trees & BST
---
### 1. { BST } Initialize
```js
function BST() { this.root = null; }

function Node(data) {
  this.data  = data;
  this.left  = null;
  this.right = null;
}
```
### 2. { BST } Search
1. Traverse through BST
2. If X === current node's data, return true
3. Set current to left if current node's data is less than X, else to right.

### 3. { BST } Insert
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

### 4. { BST } Traverse

1. Use array data structure [result]
2. Setup preOrderTraversal recursive function accepting BST  
    Base Case: if node is null, return
      1. Push node itself
      2. Recursive Case: run preOrderTraversal on left subtree
      3. Recursive Case: run preOrderTraversal on right subtree
3. Call preOrderTraversal on root
4. Return result
### 5. { BST } Remove
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
  
# Graphs
