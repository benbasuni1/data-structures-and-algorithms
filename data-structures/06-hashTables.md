# Hash Tables
1. Vocabulary
2. Initialize Hash Table
3. Hash Function
4. Inserting Element into Hash Table
5. Collision Resolution
## Vocabulary
Hash tables rely on a **hash function** to convert keys into a bucket index.  
**Collision** - When we add a key/value pair to a bucket that already has a key/value pair.  
**Bucket** - Each array cell in a hash table.  
**Hash Function** - A special function applied to the key.  
**Uniform Hash** - A function that maps the expected inputs into available buckets as evenly possible.


## Initialize Hash Table
```js
function HashTable() {

  // Set our bucket size (usually a huge, prime number)
  this.bucketSize = 23;

  // Array to store our data
  this.buckets = [];

  // Length of our buckets
  this.buckets.length = this.bucketSize;
}
```
## Hash Function
---
```js
HashTable.prototype.computeHash = function(key) {
  let total = 0;

  // Calculate sum of character codes of the data,
  // then make sure that the final hash is less than the num of buckets
  for (let i = 0; i < data.length; i++) {
    total += data.charCodeAt(i);
  }

  return total % this.bucketSize;
}
```

## Collision Resolution in Hash Table
2 Techniques: 
1. Seperate Chaining - Each method contains a key/value pair list itself.
2. Open Addressing - If key/value pair is occupied, it will search the next one that is unoccupied.

## Separate Chaining Hash Table
---
```js
HashTable.prototype.put = function(key, value) {

  // If type of key is not a string or num, return undefined
  if (typeof key !== 'string' && typeof key !== 'number') return undefined;

  let hash = this.computeHash(key);

  let chain = this.buckets[hash];

  if (this.buckets[hash] === undefined) this.buckets[hash] = {};

  if (chain.hasOwnProperty(key)) throw 'Duplicate key not allowed';

  chain[key] = value;
}
```
```js
HashTable.prototype.get = function(key, value) {

  // If type of key is not a string or num, return undefined
  if (typeof key !== 'string' && typeof key !== 'number') return undefined;
  
  let hash = this.computeHash(key);
  
  if (this._buckets[hash] === undefined) {
    // Yay No collision found
    this._buckets[hash] = {};
    this._buckets[hash][key] = value;
    return;
  } else if (this._buckets[hash].hasOwnProperty(key)) {
    // Duplicate Key
    throw 'Duplicate Key is not allowed';
  }
  
  // Collision found.
  // Let's probe for the next available slot
  var bucketId = hash + 1;
  
  do {
    if (bucketId >= this._bucketSize) {
      // Reached the end. 
      // Start from the beginning
      bucketId = 0;
    }
    
    if (this._buckets[bucketId] === undefined) {
      // Found an empty slot
      this._buckets[bucketId] = {};
      this._buckets[bucketId][key] = value;
      return;
    }
    
    bucketId++;
  } while (bucketId != hash);
  
  // Couldn't find any free slots.
  throw 'Hash Table is full. Rehashing needed';
}
```

```js
HashTable.prototype.get = function(key) {
  // If type of key is not a string or num, return undefined
  if (typeof key !== 'string' && typeof key !== 'number') return undefined;
  
  var hash = this.computeHash(key);
  
  if (this._buckets[hash] === undefined) {
    return undefined;
  } else if (this._buckets[hash].hasOwnProperty(key)) {
    // Key found. Return value
    return this._buckets[hash][key];
  }
  
  // Possible Collision.
  // Iterate through the table using the 
  // probing sequence used by the put function
  var bucketId = hash + 1;
  
  do {
    if (bucketId >= this._bucketSize) {
      // Reached the end. 
      // Start from the beginning
      bucketId = 0;
    }
    
    if (this._buckets[bucketId] === undefined) {
      // Found an empty slot
      return undefined;
    } else if (this._bucekts[bucketId].hasOwnProperty(key)) {
      // Key found. Return value
      return this._buckets[hash][key];
    }
    
    bucketId++;
  } while (bucketId != hash);
  
  // Couldn't find the key and exhausted the
  // whole hash table.
  return undefined;
}
```
## Summary
1. Hash Table is a data structure used to implement key value pairs.
2. Hash Table consists of a buckets (slots) and a hashing function maps the keys to slots.
3. Hash function can have collisions. When there is a collision, there are strategies to resolve to collision. 
4. Two most common stragies for conflicit resolution are called separate chaining and open addressing.
