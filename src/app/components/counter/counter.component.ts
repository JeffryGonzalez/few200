import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State, selectCurrentCount, selectDecrementDisabled, selectCountBy } from '../../reducers';

import * as actions from '../../actions/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count$: Observable<number>;
  decrementDisabled$: Observable<boolean>;
  by$: Observable<number>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.store.dispatch(new actions.LoadCountBy());
    this.count$ = this.store.select(selectCurrentCount);
    this.decrementDisabled$ = this.store.select(selectDecrementDisabled);
    this.by$ = this.store.select(selectCountBy);
  }

  increment() {
    this.store.dispatch(new actions.CountIncremented());
  }

  decrement() {
    this.store.dispatch(new actions.CountDecremented());
  }

  reset() {
    this.store.dispatch(new actions.CountReset());
  }

  setCountBy(amount: 1 | 3 | 5) {
    this.store.dispatch(new actions.CountBySet(amount));
  }

}
