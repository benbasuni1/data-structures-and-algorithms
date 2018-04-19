function Node(key, val) {
  this.key  = key;
  this.val  = val;
  this.next = null;
  this.prev = null;
}

const LRUCache = function(capacity) {
  this.capacity  = capacity;
  this.hash      = {};
  this.head      = { next : null }
  this.tail      = { prev : null }
  this.head.next = this.tail;
  this.tail.prev = this.head;
}

LRUCache.prototype.get = function(key) {

  // retrieve the node from the hashtable
  var currNode = this.hash[key];

  // Handle Edge Case
  if (currNode === undefined) return -1;

  // if currentNode is NOT the most recently used
  if (currNode.next !== this.tail) {

    // connect prev and next to each other, currNode acting as middleman
    currNode.prev.next = currNode.next;
    currNode.next.prev = currNode.prev;

    // point current node to tail && old MRU
    currNode.next = this.tail;
    currNode.prev = this.tail.prev;

    // point tail && old MRU to current node
    this.tail.prev.next = currNode;
    this.tail.prev = currNode;

  }
  return currNode.val;
};




































LRUCache.prototype.put = function(key, val) {

  // If node is not in the hash table
  if (this.hash[key] === undefined) {

    // Decrement capacity by 1 to allow space
    this.capacity -= 1;

    // Insert new node(key, val)
    this.hash[key] = new Node(key, val);

    // Set new node added to hash map to newNode variable
    var newNode = this.hash[key];

  } else {

    // Replace old node val to val
    this.hash[key].val = val;

    // Set newNode to the node
    newNode = this.hash[key];

    // connect prev and next to each other, newNode acting as middleman
    newNode.prev.next = newNode.next;
    newNode.next.prev = newNode.prev;

    // Clear any connections from newNode
    newNode.next = newNode.prev = null;
  }

  // Make the new node MRU
  newNode.next = this.tail;
  newNode.prev = this.tail.prev;
  this.tail.prev.next = newNode;
  this.tail.prev = newNode;

  // If the cache is full
  if (this.capacity < 0) {

    // Set delete key to head.next.key to be deleted later in hash
    var delK = this.head.next.key;

    // Set head next to the 2nd item
    this.head.next = this.head.next.next;
    this.head.next.prev = this.head;

    // Delete the head node
    delete this.hash[delK];

    // Make sure that capacity goes back to 0 to not delete this again
    this.capacity++;
  }
};






















