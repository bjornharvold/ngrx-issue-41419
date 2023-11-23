import { Routes } from '@angular/router';
import { isReady } from './is-ready.guard';

export const ROUTES: Routes = [
  {
    path: 'lazy',
    loadChildren: () => import('./lazy/lazy.routes').then(
      (m) => m.ROUTES,
    ),
    canActivate: [isReady],
  }
];
