import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  @Output()
  itemAdded = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  add(item: HTMLInputElement) {
    const description = item.value;
    item.value = '';
    item.focus();
    this.itemAdded.emit(description);
  }

}
