import { AsyncThunkAction } from '@reduxjs/toolkit';

export type TActionCreate<Result, Arg, RejectValue> =
  (arg: Arg) => AsyncThunkAction<Result, Arg, { rejectValue: RejectValue }>;
