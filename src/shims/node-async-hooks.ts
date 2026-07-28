export class AsyncLocalStorage {
  constructor() {
    this.store = undefined;
  }

  run(store, callback) {
    const previousStore = this.store;
    this.store = store;
    try {
      return callback();
    } finally {
      this.store = previousStore;
    }
  }

  getStore() {
    return this.store;
  }
}
