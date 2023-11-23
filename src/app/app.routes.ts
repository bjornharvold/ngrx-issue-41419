import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  
  {
    path: 'lazy',
    loadChildren: () => import('./lazy/lazy.routes').then(
      (m) => m.ROUTES,
    ),
  }
];
