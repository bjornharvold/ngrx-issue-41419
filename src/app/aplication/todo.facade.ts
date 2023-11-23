/*
 * Copyright (c) wink.travel 2023
 */

import { Injectable } from '@angular/core';

import { Action, select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import * as TodoActions from '../+state/todo/todo.actions';
import * as fromTodo from '../+state/todo/todo.reducer';
import * as TodoSelectors from '../+state/todo/todo.selectors';

@Injectable({ providedIn: 'root' })
export class TodoFacade {
  isReady$: Observable<boolean> = this.store.pipe(
    select(TodoSelectors.isTodoReady),
  );

  constructor(private store: Store<fromTodo.TodoPartialState>) {}

  private dispatch(action: Action) {
    this.store.dispatch(action);
  }

  ready(): void {
    this.dispatch(TodoActions.setToReady({ flag: true }));
  }
}
