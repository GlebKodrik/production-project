import { Dispatch } from '@reduxjs/toolkit';
import { TReduxStateScheme } from '@stores/types/redux-state-scheme';
import { TActionCreate } from '@services/test-async-thunk/types';

export class TestAsyncThunk<Result, Arg, RejectValue> {
  dispatch: Dispatch;

  getState: () => TReduxStateScheme;

  actionCreate: TActionCreate<Result, Arg, RejectValue>;

  constructor(actionCreate: TActionCreate<Result, Arg, RejectValue>) {
    this.actionCreate = actionCreate;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreate(arg);
    return action(this.dispatch, this.getState, undefined);
  }
}
