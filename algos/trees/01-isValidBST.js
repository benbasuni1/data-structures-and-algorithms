let BinaryTree = function(value) {
  this.value = value;
  this.left  = null;
  this.right = null;
};

const isSorted = function(arr) {

  // Iterate through array
  for (let i = 0; i < arr.length; i++)

    // If current is greater than next element, return false
    if (arr[i] >= arr[i + 1]) return false;

  // Return true
  return true;
}

const validateBST = function(bt) {

  // Set output array
  let output = [];

  // Call inOrderTraverse accepting node
  let inOrderTraverse = function(node) {

    // If node is empty, return
    if (!node) return;

    // In-Order Traversal, pushing sorted data
    traverse(node.left);
    output.push(node.value);
    traverse(node.right);
  }

  // Call recursive function
  inOrderTraverse(bt);

  // Return isSorted w/ output array
  return isSorted(output);
};
























/* TESTS */

let bt1a = new BinaryTree(5);
let bt1b = new BinaryTree(4);
let bt1c = new BinaryTree(6);
let bt1d = new BinaryTree(1);
let bt1e = new BinaryTree(100);

bt1a.left  = bt1b;
bt1a.right = bt1c;
bt1b.left  = bt1d;
bt1b.right = bt1e;

console.log(validateBST(bt1a), false);

let bt2a = new BinaryTree(5);
let bt2b = new BinaryTree(3);
let bt2c = new BinaryTree(6);
let bt2d = new BinaryTree(1);
let bt2e = new BinaryTree(4);

bt2a.left  = bt2b;
bt2a.right = bt2c;
bt2b.left  = bt2d;
bt2b.right = bt2e;

console.log(validateBST(bt2a), true);
