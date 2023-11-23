import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, filter, tap } from 'rxjs';
import { TodoFacade } from './application/todo.facade';

export const isReady: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
):
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree => {
  const facade = inject(TodoFacade);

  return facade.isReady$.pipe(
    filter(flag => flag === true),
    tap(flag => console.log('Guards says: ready', flag))
  );
};
