import { Component, OnInit } from '@angular/core';
import {Ingredients} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[]=[
    new Ingredients("vanila",1),
    new Ingredients("apple",2)
  ];

  constructor() { }

  ngOnInit() {
  }

}
