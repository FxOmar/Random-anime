interface Options {
  state?: Object;
  mutation?: Object;
}

export default class SM {
  _options: Options = {};

  constructor(_options: Options) {
    this._options = _options;
  }

  getState(name: string) {
    return this._options.state[name];
  }

  commit(name: string, value?: any) {
    return this._options.mutation[name](this._options.state, value);
  }
}
