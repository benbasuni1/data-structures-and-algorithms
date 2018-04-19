# Is Valid BST
---
### Description:

Given a Binary Tree figure out whether it's a Binary Search Tree. A binary search tree holds the property that each node's key is smaller than the key value of all nodes in the right subtree and greater than the key values of all nodes in the left subtree ( L < N < R )

### Hints:
  1. Recursion
  2. In-Order Traversal

### Space and Time Complexity:
##### Time:
```
Linear O(n)
```

##### Memory:   
```
Linear O(n)
```

### Algorithm:
----------------------------------------------
SETUP :

  BinaryTree (value) - value, left, right

----------------------------------------------
isSorted (arr) :

  1. Iterate through arr

  2. If current is greater than next element, return false

  3. Return true
---------------------------------------------
validateBST (bt) :

  1. Set output array

  2. Call InOrderTraversal accepting node param

    a. If node is empty, return

    b. In-Order Traversal, pushing sorted data

  3. Call inOrderTraversal w/ bt param

  4. Return isSorted(output)
