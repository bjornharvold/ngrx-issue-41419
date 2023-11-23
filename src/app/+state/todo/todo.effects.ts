/*
 * Copyright (c) wink.travel 2023
 */

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs';
import { TodoFacade } from '../../application/todo.facade';
import * as TodoActions from './todo.actions';

@Injectable()
export class TodoEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.setToReady),
      map(({ flag }) =>
        TodoActions.setToReadySuccess({ flag }),
      ),
    ),
  );

  constructor(
    private readonly todoFacade: TodoFacade,
    private readonly actions$: Actions,
  ) {}
}
