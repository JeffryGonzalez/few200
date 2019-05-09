import { Component, OnInit } from '@angular/core';
import { State } from '../../reducers';
import { Store } from '@ngrx/store';
import { AddedTask } from '../../actions/task.actions';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  add(item: HTMLInputElement) {
    const task = item.value;
    this.store.dispatch(new AddedTask(task));
    item.value = '';
    item.focus();
  }
}
