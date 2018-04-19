## Contents
---
1. Defining a BST
2. Searching a BST
3. Inserting in a BST
4. Traversing a BST
      1. Pre-order (Self to Left to Right)
      2. In-order  (Left to Self to Right)
      3. Post-order (Left to Right to Self)
5. Deleting a node in a BST
6. Getting size of BST
6. Depth First Search
7. Breadth First Search
# Binary Tree
---

1. **Root Node** [ Top ]
2. **Internal Node** [ In Between ]
3. **Leaf Node** [ End ]

## Height and Depth of Tree
---
**Depth** - # of nodes from root to node. [root : 0]

**Height** - # of nodes from node to root. [leaf : 0]

 Depth === Height

## Defining a BST
 ---
```js
function BST() {
  this.root = null;
}

function Node(data) {
  this.data  = data;
  this.left  = null;
  this.right = null;
}
```

## Searching in BST
---
##### Algorithm: 
1. Traverse through BST
2. If X === current node's data, return true
3. Set current to left if current node's data is less than X, else to right.

##### Code:
```js
BST.prototype.contains = function(data) {  
  let current = this.root;    

  // Traverse through BST
  while (current) {    

    // if X === current node's data, return true
    if (data === current.data) return true;

    // Set current to left if current node's data is less than X, else set to right
    current = (data < current.data) ? current.left : current.right;
  }    

  return null;
}
```

## Insertion in BST
---
##### Algorithm: 
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
          

##### Code:
```js
BST.prototype.insert = function(data) {  
  // Setup the node to be inserted
  let node = new Node(data);

   // Handle edge case if root is empty, insert node and exit function
  if (!this.root) {
    this.root = node;
    return;
  }

  let current = this.root;

  // Traverse through the tree
  while (current) {

    // if K < current node
    if (data < current.data) {

      // Insert into current node -> left if left is empty
      if (!current.left) { 
        current.left = node; 
        return;
      }     

      // Set current node to the left (traverse)
      current = current.left;

    // If K > current node
    } else if (data > current.data) {

      // Insert into current node -> right if right is empty
      if (!current.right) { 
        current.right = node;
        return;
      }
      // Set current node to the right (traverse)
      current = current.right;

    // If duplicate, just return
    } else return;
  }
```

## Tree Traversals
---
#### 1. Pre-Order (Self to Left to Right)

##### Algorithm: 
1. Use array data structure [result]
2. Setup preOrderTraversal recursive function accepting BST  
    Base Case: if node is null, return
      1. Push node itself
      2. Recursive Case: run preOrderTraversal on left subtree
      3. Recursive Case: run preOrderTraversal on right subtree
3. Call preOrderTraversal on root
4. Return result

##### Code:
```js
BST.prototype.preOrder = function() {
  // Use array data structure [result]
  let result = [];
  
  // Setup preOrderTraversal recursive function accepting BST
  function preOrderTraversal(node) {

    // Base case: if node is null, return
    if (!node) return;
    
    // 1. Push node itself
    result.push(node.data);

    // 2. Recursive case: run preOrderTraversal on left subtree
    preOrderTraversal(node.left);

    // 3. Recursive case: run preOrderTraversal on right subtree
    preOrderTraversal(node.right);
  } 

  // Call preOrderTraversal on root
  preOrderTraversal(this.root);

  return result;
}
```
#### 2. In-Order (Left to Self to Right)

##### Algorithm: 
1. Use array data structure [result]
2. Setup inOrderTraversal recursive function accepting BST  
    Base Case: if node is null, return
      1. Recursive Case: run inOrderTraversal on left subtree
      2. Push node itself
      3. Recursive Case: run inOrderTraversal on right subtree
3. Call inOrderTraversal on root
4. Return result
##### Code:
```js
BST.prototype.inOrder = function() {
  // use array data structure [result]
  let result = [];
  
  // Setup inOrderTraversal recursive function accepting BST
  function inOrderTraversal(node) {

    // Base Case: if node is null, return
    if (!node) return null;

    // 1. Recursive Case: run inOrderTraversal on left subtree
    inOrderTraversal(node.left);

    // 2. Push node itself
    result.push(node.data);

    // 3. Recursive Case: run inOrderTraversal on right subtree
    inOrderTraversal(node.right);
  } 

  // Call inOrderTraversal on root
  inOrderTraversal(this.root);

  return result;
}
```
#### 3. Post-Order (Right to Left to Self)

##### Algorithm: 
1. Use array data structure [result]
2. Setup postOrderTraversal recursive function accepting BST  
    Base Case: if node is null, return
      1. Recursive Case: run postOrderTraversal on left subtree
      2. Recursive Case: run postOrderTraversal on right subtree
      3. Push node itself
3. Call postOrderTraversal on root
4. Return result

##### Code:
```js
BST.prototype.postOrder = function() {
  // Use array data structure [result]
  let result = [];
  
  // Setup postOrderTraversal recursive function accepting BST
  function postOrderTraversal(node) {

    // Base case: if node is null, exit function;
    if (!node) return;

    // 1. Recursive Case: run postOrderTraversal on left subtree
    postOrderTraversal(node.left);

    // 2. Recursive Case: run postOrderTraversal on right subtree
    postOrderTraversal(node.right);

    // 3. Push node itself
    result.push(node.data);
  } 

  // Call postOrderTraversal on root
  postOrderTraversal(this.root);

  return result;
}
```

## In Order Predecessor & Successor
Node X's predecessor is the node that comes just before X in inOrder traversal.  
Node X's successor is the node that comes right after X in inOrder traversal.

## Deleting a node in BST
3 cases in deleting a node:
1. The node has 0 children.
2. The node has 1 child.
3. The node has 2 children.

##### Algorithm: 
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
  

##### Code: 
```js
BST.prototype.remove = function(key) { this.removeImpl(key, this.root) }

// Helper function (maximum)
BST.prototype.maximum = function(node) {
  while (node.right) node = node.right;
  return node;
}

// Helper function (removeImpl)
BST.prototype.removeImpl = function(key, node) {

  // Traverse through the tree
  if (node) {

    // If K < current node's data, 
    if (key < node.data) {

        // Recursively call removeImpl on leftNode
        node.left = this.removeImpl(key, node.left);

    // If K > current node's data, 
    } else if (key > node.data) {

        // Recursively call removeImpl on rightNode
        node.right = this.removeImpl(key, node.right);

    } 

    // If key === current node, and current node has 2 children
    if (key === node.data && node.left && node.right) {

      // Replace current node to its PREDECESSOR || Need help with this logic
      node.data = this.maximum(node.left);
      node.left = this.removeImpl(node.data, node.left);
    } else {
      // if node only has 1 child
      node = node.left || node.right;
    }

  }
  
  return node;
}
```
### Getting Size of BST
---
##### Algorithm: 
1. If root is empty, return 0
2. Setup traverse function accepting BST  
    If there are no more nodes, return;  
    Increment counter  
    Recursively traverse through left side of tree  
    Recursively traverse through right side of tree
3. Call recursive traverse function

##### Code: 
```js
BST.prototype.size = function() {
  // If root is empty, return 0
  if (!this.root) return 0;  

  let counter = 0;    

  // Setup traverse function accepting BST
  function traverse(node) {    

    // If there are no more nodes, return;
    if (!node) return;    

    // Increment counter
    counter++;    

    // Recursively traverse through left side of tree
    traverse(node.left);    

    // Recursively traverse through right side of tree
    traverse(node.right);
  }    

  // Call recursive traverse function
  traverse(this.root);  

  return counter;
}
```
## Depth First Search
##### Algorithm: 

##### Code: 
```js
function DFS(tree) {

  // Set output as empty array
  let output = [];

  // Call Recursive function implementDFS with tree as parameter
  let implementDFS(tree) {

    // Push the tree's value
    output.push(tree.val);

    // If tree has left side, first recursively call left subtree
    if (tree.left) implementDFS(tree.left);

    // If tree has right side, then recursively call right subtree
    if (tree.right) implementDFS(tree.right);

  }

  // Call implement recursive function
  implementDFS(tree);

  return output;
}
```
## Breadth First Search
##### Algorithm: 

##### Code: 
```js
function BFS(tree) {
  let queue = [tree];
  let output = [];

  while (queue.length > 0) {
    let node = queue.shift();
    output.push(node.val);

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return output;
}
```


## Summary
---
* Binary Tree is a **hierarchial data structure**
* Binary Search Tree (BST) is a binary tree where all smaller keys are to the left and all greater keys are to the right
* Insertion & Search in BST are relatively straight forward
* Removal is a little tricky because deletion of a node can caust the BST to violate it's properties
* Binary Trees can be traversed in many orders. (Pre-Order, In-Order, and Post-Order)



