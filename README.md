## Expiration

For having an array of items that expire after a dynamic amount of time

### Install:

```bash
npm install expiration
```

### Quick Example:

```javascript
const ExpireList = require('expiration')

const expireList = new ExpireList()

// Expire in 10s
expireList.add('hey!', 10000)

// Expire in 60s
expireList.add('bye!')

console.log(expireList.length) // 2

console.log(expireList.list) // [ 'hey!', 'bye!']

...

// 30s later

console.log(expireList.length) // 1

console.log(expireList.list) // [ 'bye!' ]

...

// 60s later

console.log(expireList.length) // 0

console.log(expireList.list) // []
```

## Methods

### constructor()

Creates a new expiring list

### add(storeItem, timeToCache = 60000)

Adds the given item to the list and removes from the list in the given amount of milliseconds

#### Parameters:
  - `storeItem` - Object to store (can be a string, number, item, whatever)
  - `timeToCache` - Amount of milliseconds to store

### length

How long is the list

### list

What is the list at the given time

## Notes:

Full example can be found under [`test/`](test).