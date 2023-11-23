/*
 * Copyright (c) wink.travel 2023
 */

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs';
import * as ApplicationActions from './todo.actions';
import { TodoFacade } from '../../todo/todo.facade';

@Injectable()
export class TodoEffects {
  // init$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(ApplicationActions.initApplication),
  //     tap(({ todoConfig }) => {
  //       const clientId = todoConfig.clientId;
  //       const configurationId = todoConfig.configurationId;

  //       if (clientId == undefined) {
  //         throw new Error('Cannot set affiliate cookies. Missing clientId');
  //       }
  //       this.affiliateCookieService.setApplicationCookies(
  //         clientId,
  //         configurationId,
  //       );
  //     }),
  //     map(({ todoConfig }) =>
  //       ApplicationActions.todoInitialized({ todoConfig }),
  //     ),
  //   ),
  // );

  constructor(
    private readonly todoFacade: TodoFacade,
    private readonly actions$: Actions,
  ) {}
}
