import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StateService {
  ready$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  markAsReady = () => this.ready$.next(true);
}
