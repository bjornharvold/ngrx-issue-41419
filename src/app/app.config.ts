import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import {
  NoPreloading,
  provideRouter,
  withEnabledBlockingInitialNavigation,
  withInMemoryScrolling,
  withPreloading,
  withRouterConfig,
  withViewTransitions,
} from '@angular/router';

import { ROUTES } from './app.routes';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { ActionReducer, provideStore } from '@ngrx/store';
import { RouterState, provideRouterStore } from '@ngrx/router-store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';

export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();

    return result;
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideRouterStore({
      routerState: RouterState.Minimal,
    }),
    provideStore(
      {},
      {
        metaReducers: [logger],
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
          strictStateSerializability: true,
          strictActionSerializability: true,
          strictActionTypeUniqueness: true,
        },
      }
    ),
    provideEffects(),
    {
      provide: APP_BASE_HREF,
      useValue: '/',
    },
    {
      provide: LOCALE_ID,
      useValue: 'en-US',
    },
    provideRouter(
      ROUTES,
      withEnabledBlockingInitialNavigation(),
      withRouterConfig({
        paramsInheritanceStrategy: 'always',
      }),
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled',
      }),
      withPreloading(NoPreloading), // default to no preloading
      withViewTransitions()
    ),
    provideStoreDevtools(),
  ],
};
