# Implement LRU Cache
---
### Description:

Least Recently Used (LRU) is a common caching strategy which defines policy to evict elements from the cache to make room for new elements when the cache is full. [Discard LRU items first]

LRU is a very simple and a commonly used algorithm.   
**The core concept of LRU algorithm is to evict the oldest data to accomodate more data.**

### Hints:
    1. Doubly Linked List - Helps in maintaining the eviction order
    2. Hash Map           - Helps with O(1) lookup of cached keys
    3. Think about Evictions

### Space and Time Complexity:
##### Time:
```
Get - O(1)
Set - O(1)
```

##### Memory:   
```
Linear O(n)
n is size of cache
```

### Algorithm:
```
----------------------------------------------
SETUP :
  Node     (key, val) - key, val, next, prev
  LRUCache (capacity) - capacity, hash, head--tail
----------------------------------------------
GET :     

  1. Retrieve the node from the hash table

  2. Handle edge case if currNode === undefined, throw error

  3. If currentNode is **NOT** the most recently used

    a. connect prev and next to each other, currNode acting as middleman

    b. point current node to tail && old MRU

    c. point tail && old MRU to current node

  4. Return currNode.val
---------------------------------------------
SET :

  1. If node is not in the hash table  

    a. Decrement capacity by 1 to allow space

    b. Insert new node(key, val)

    c. Set new node added to hash map to newNode variable

  2. Otherwise,

    a. Replace old node val to val

    b. Set newNode to the currNode

    c. Connect prev and next to each other, newNode acting as middleman

    d. Clear any connectinos from newNode

  3. Make the newNode MRU

  4. If the cache is full

    a. Set delkey to head.next.key to be deleted later in hash

    b. Set head next to the 2nd item

    c. Delete the head node

    d. Make sure that capacity goes back to 0 to not delete unnecessaily
```

