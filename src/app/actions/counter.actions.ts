import { Action } from '@ngrx/store';

export const INCREMENT = '[counter] increment';
export class CountIncremented implements Action {
  readonly type = INCREMENT;
  constructor() { }
}

export const DECREMENT = '[counter] decrement';
export class CountDecremented implements Action {
  readonly type = DECREMENT;
  constructor() { }
}

export const RESET = '[counter] reset';
export class CountReset implements Action {
  readonly type = RESET;
  constructor() { }
}


export const SET_COUNT_BY = '[counter] set count by';
export class CountBySet implements Action {
  readonly type = SET_COUNT_BY;
  constructor(public by: 1 | 3 | 5) { }
}


export const LOAD_COUNT_BY = '[counter] load count by';
export class LoadCountBy implements Action {
  readonly type = LOAD_COUNT_BY;
  constructor() { }
}

// Merge these together in a discriminated union type

export type All = CountIncremented
  | CountDecremented
  | CountReset
  | CountBySet
  | LoadCountBy;


