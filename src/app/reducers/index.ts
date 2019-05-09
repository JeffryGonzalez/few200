import * as fromCounter from './counter.reducer';
import { createSelector } from '@ngrx/store';
export interface State {
  counter: fromCounter.State;
}

export const reducers = {
  counter: fromCounter.reducer
};

// Selectors
// This will get really complex. Hold on to your hats.

export const selectCurrentCount = (state: State) => state.counter.count;

// export const selectDecrementDisabled = (state: State) => state.counter.count === 0;
export const selectCountBy = (state: State) => state.counter.by;

export const selectDecrementDisabled = createSelector(selectCurrentCount, selectCountBy, (c, b) => c - b < 0);
