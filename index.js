const uniqueStr = require('unique-string')

const SIXTY_SECONDS_IN_MS = 60000

class ExpiringList {
  constructor() {
    this.arr = {};
  }

  add(entry, time = SIXTY_SECONDS_IN_MS) {
    const id = uniqueStr();
    this.arr[id] = entry;

    setTimeout(() => {
      delete this.arr[id];
    }, time);
  }

  get length() {
    return Object.values(this.arr).length;
  }

  get list() {
    return Object.values(this.arr);
  }
}

module.exports = ExpiringList;
