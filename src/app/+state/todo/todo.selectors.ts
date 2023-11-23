/*
 * Copyright (c) wink.travel 2023
 */

import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';
import {
  TODO_FEATURE_KEY,
  TodoPartialState,
  State,
} from './todo.reducer';

// Lookup the 'Todo' feature state managed by NgRx
export const getTodoState = createFeatureSelector<State>(
  TODO_FEATURE_KEY,
);

export const isTodoReady: MemoizedSelector<
  TodoPartialState,
  boolean
> = createSelector(getTodoState, (state: State) => state.ready);
