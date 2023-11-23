import { Routes } from '@angular/router';
import { isReady } from '../is-ready.guard';
import { LazyComponent } from './lazy.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: LazyComponent,
    canActivate: [isReady]
  }
];
