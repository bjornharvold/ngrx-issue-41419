/*
 * Copyright (c) wink.travel 2023
 */

import { createAction, props } from '@ngrx/store';

export const setToReady = createAction(
  '[ToDo] Set ready',
  props<{ flag: boolean }>(),
);

export const setToReadySuccess = createAction(
  '[ToDo] Set ready success',
  props<{ flag: boolean }>(),
);
