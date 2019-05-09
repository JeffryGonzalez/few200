import { Component, OnInit } from '@angular/core';
import { ShoppingListItem } from './models';
import { ShoppingDataService } from './shopping-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {


  items$: Observable<ShoppingListItem[]>;

  nextId = 3;
  constructor(private apiService: ShoppingDataService) { }

  ngOnInit() {
    this.items$ = this.apiService.getShoppingList();
  }

  onItemAdded(description: string) {
    // this.items = [{
    //   id: this.nextId++,
    //   description,
    //   purchased: false
    // }, ...this.items];
    // TODO, add this through the API.
  }
}
