import { Dispatch } from '@reduxjs/toolkit';
import { TReduxStateScheme } from 'redux-stores/types/redux-state-scheme';
import axios, { AxiosStatic } from 'axios';
import { TActionCreate } from './types';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

export class TestAsyncThunk<Result, Arg, RejectValue> {
  dispatch: Dispatch;

  getState: () => TReduxStateScheme;

  actionCreate: TActionCreate<Result, Arg, RejectValue>;

  api: jest.MockedFunctionDeep<AxiosStatic>;

  navigate: jest.MockedFn<any>;

  constructor(actionCreate: TActionCreate<Result, Arg, RejectValue>) {
    this.actionCreate = actionCreate;
    this.dispatch = jest.fn();
    this.getState = jest.fn();

    this.api = mockedAxios;
    this.navigate = jest.fn();
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreate(arg);
    return action(this.dispatch, this.getState, { api: this.api, navigate: this.navigate });
  }
}
