export class ReducerRegistry {
  constructor() {
    this._emitChange = null;
    this._reducers = {};
  }

  get reducers() {
    return { ...this._reducers };
  }

  set emitChange(listener) {
    this._emitChange = listener;
  }

  register(name, reducer) {
    this._reducers = { ...this._reducers, [name]: reducer };
    if (this._emitChange) {
      this._emitChange(this.reducers);
    }
  }
}

const reducerRegistry = new ReducerRegistry();

export default reducerRegistry;
