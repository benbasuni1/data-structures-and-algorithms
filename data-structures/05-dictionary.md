# Dictionaries
1. Initialize Dictionary
2. Add Elements to Dictionary
3. Look up Value in Dictionary
4. Removing Elemeent in Dictionary
5. Getting Dictionary Length
6. Summary

## Initialize Dictionary
---
#### Setup: 
  1. {Object} data
  2. {Integer} length to 0
#### Code: 
```js
function Dictionary() {

  // Set data to empty object
  this.data = {};

  // Set length to 0
  this.length = 0;

}
```
## Add Elements to Dictionary
---
#### Setup: 
  1. If key are not strings or numbers, return null
  2. Handle duplicates, if key already exists, return null
  3. Set { Object } data (w/ index key) to value
  4. Increment length by 1
#### Code: 
```js
Dictionary.prototype.add = function(key, value) {

  // If keys are not strings or numbers, return null
  if (typeof key !== 'string'  && typeof key !== 'number') return null;

  // Handle duplicates, if key already exists, return null
  if (this.data.hasOwnProperty(key)) return null;

  // Set { Object } data (w/ index key) to value
  this.data[key] = value;

  // Increment length by 1
  this.length++;
}
```
## Look up Value in Dictionary
---
#### Setup: 
  1. If key does not exist, or type of key is not a string or num, return undefined
  2. If key exists in data, return value
#### Code: 
```js
Dictionary.prototype.find = function(key) {

  // If key does not exist, or type of key is not a string or num, return undefined
  if (!key || typeof key !== 'string' && typeof key !== 'number') return undefined;

  // If key exists in data, return the value
  if (this.data.hasOwnProperty(key)) return this.data[key];

  return undefined;
}
```

## Removing Element in Dictionary
---
```js
Dictionary.prototype.remove = function(key) {
  // If key exists in data, delete the value, and decrement length by 1
  if (this.data.hasOwnProperty(key)) {
    delete this.data[key];
    this.length--;
  }
}
```
## Getting Dictionary Length
---
```js
Dictionary.prototype.size = function() { return this.length }
```
## Summary
---
1. Dictionary is a collection of key/value pairs.
2. It's also called an **associative array** as every key is associated with a value.
3. Some dictionary implementations support multiple values associated with a single key.
4. Some dictionary implementations allow overwriting the value associated with the key. Others don't allow this. You would have to first delete the key and insert it again with the new value.

