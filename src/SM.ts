interface StoreInterface {
  // store: Object;
  mapState: Function;
  commit: Function;
}

export default class SM<U, T> implements StoreInterface {
  constructor(public store: { state: U; mutation: T }) {
    this.store = store;
  }

  mapState(name: string) {
    return this.store.state[name];
  }

  commit(name: string, value?: any) {
    return this.store.mutation[name](this.store.state, value);
  }
}
