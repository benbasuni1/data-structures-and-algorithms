# Sets
1. Initialize Set
2. Add Items to Set
3. Remove Items in Set
4. Membership in Set
5. Set Size
6. Union of 2 Sets
7. Intersection of 2 Sets
8. Summary
## Initialize Set
---
```js
function Set() {

  // { Object } set to keep track of items
  this.set  = {};

  // { Int } size to keep track of length
  this.size = 0;
}
```
## Add Items to Set
---
#### Algorithm:
1. If data does not exist in set,  
    Insert data into set  
    Increment size by 1
#### Code:
```js
Set.prototype.add = function(data) {

  // If data does not exist in set
  if (!(this.set.hasOwnProperty(data))) {

    // Insert data into set and set value as 1
    this.set[data] = 1;

    // Increment size
    this.size++;
  }
}
```
## Remove Items in Set
---
#### Algorithm: 
1. If data is inside the set  
      Delete the item  
      Decrement size by 1
#### Code: 
```js
Set.prototype.remove = function(data) {

  // If data is inside the set
  if (this.set.hasOwnProperty(data)) {

    // Delete the item
    delete this.set[data];

    // Decrement size by 1
    this.size--;
  }

}
```

## Membership in the Set
---
```js
Set.prototype.member = function(data) { 

  // If data is inside set, return true, else false;
  return (this.set.hasOwnProperty(data)) ? true : false;

}
```
## Getting Set Size
---
```js
Set.prototype.size = function() { return this.size }
```

## Union of 2 Sets
---
#### Algorithm: 
1. Set data structure unionSet
2. Iterate first set, add key to unionSet
3. Iterate second set, if not already in unionSet, add key to unionSet
3. Return unionSet
#### Code: 
```js
Set.prototype.union = function(secondSet) {

  // Set data structure unionSet
  let unionSet = new Set();
  
  // Iterate first set, add key to unionSet
  for (let key in this.set) { unionSet.add(key) }

  // Iterate second set, if not already in unionSet, add key to unionSet
  for (let key in secondset.set) {
    if (!unionSet.set.hasOwnProperty(key)) unionSet.add(key);
  }
    
  return unionSet;
}
```

## Intersection of 2 Sets
---
#### Algorithm:
1. Set data structure intersectionSet
2. Iterate through first set  
   If the key exists in the second set  
   Add onto the intersectionSet
3. Return intersectionSet

#### Code:
```js
Set.prototype.intersect = function(secondSet) {

  // Set data structure intersectionSet
  let intersectionSet = new Set();

  // Iterate through first set
  for (let key in this.set) {

    // If the key exists in the second set
    if (secondSet.set.hasOwnProperty(key)) {

      // Add onto intersectionSet
      intersectionSet.add(key);
    }   
  }

  return intersectionSet;
}
```

## Difference of 2 Sets
---
#### Algorithm:
1. Set data structure differenceSet as new Set
2. Iterate first set, if key does not exist in second set, add key.
3. Iterate second set, if key does not exist in first set, add key.
4. Return differenceSet

#### Code:
```js
Set.prototype.difference = function(secondset) {  

  // Set data structure differenceSet as new Set
  let differenceSet = new Set();  

  // Iterate first set, if key does not exist in second set, add key
  for (let key in this.set) {     
    if (!secondset.set.hasOwnProperty(key)) differenceSet.add(key);  
  }   

  // Iterate second set, if key does not exist in first set, add key
  for (let key in secondset.set) {     
    if (!this.set.hasOwnProperty(key)) differenceSet.add(key);  
  }    

  return differenceSet;
}
```

## Summary
---
1. A set is a data structure which has the following key properties:  
    * Elements are unordered
    * No Duplicates.  
2. The add and remove functions are used to add and remove items from the set.
3. The union of two sets returns a set containing all elements in either this or the other set
4. The intersection of two sets returns a set containing all elements in both this and the other set.

