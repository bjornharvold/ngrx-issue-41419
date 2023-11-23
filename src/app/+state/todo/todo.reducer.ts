/*
 * Copyright (c) wink.travel 2023
 */

import { Action, createReducer, on } from '@ngrx/store';

import * as ToDoActions from './todo.actions';

export const TODO_FEATURE_KEY = 'todo';

export interface State {
  ready: boolean;
}

export interface TodoPartialState {
  readonly [TODO_FEATURE_KEY]: State;
}

export const initialState: State = {
  // set initial required properties
  ready: false,
};

const todoReducer = createReducer(
  initialState,
  on(
    ToDoActions.setToReadySuccess,
    (state, { flag }) => ({
      ...state,
      ready: true,
    }),
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return todoReducer(state, action);
}
