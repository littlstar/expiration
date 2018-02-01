'use strict'

const uniqueStr = require('unique-string')

class ExpiringList {
  constructor(opts) {
    this.arr = {}
  }

  add(entry, time=60000) {
    const id = uniqueStr()
    this.arr[id] = entry

    setTimeout(() => {
      delete this.arr[id]
    }, time)
  }

  get length() {
    return Object.values(this.arr).length
  }

  get list() {
    return Object.values(this.arr)
  }
}

module.exports = ExpiringList
