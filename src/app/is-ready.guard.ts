import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, filter, tap } from 'rxjs';
import { StateService } from './state.service';

export const isReady: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
):
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree => {
  const service = inject(StateService);

  return service.ready$.pipe(
    tap(flag => console.log('Ready?: ', flag)),
    filter(flag => flag === true),
    tap(() => console.log('Yes ready'))
  );
};
