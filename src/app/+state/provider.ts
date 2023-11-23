/*
 * Copyright (c) wink.travel 2023
 */

import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { TodoEffects } from './todo/todo.effects';
import * as fromTodo from './todo/todo.reducer';

export function provideTodo(): EnvironmentProviders {
  return makeEnvironmentProviders([
    provideState(
      fromTodo.TODO_FEATURE_KEY,
      fromTodo.reducer,
    ),
    provideEffects(TodoEffects),
  ]);
}
