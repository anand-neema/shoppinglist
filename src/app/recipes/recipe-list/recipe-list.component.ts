import { Component, OnInit,Output,EventEmitter  } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})


export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Cake","A test description","http://namebirthdaycakes.net/img/birthday-cake-wrapped-with-name/87.jpg"),
    new Recipe("Cake1","A 1test description","http://namebirthdaycakes.net/img/birthday-cake-wrapped-with-name/87.jpg")
  ];

  @Output() recipeRowData =new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(receipItem){
    this.recipeRowData.emit(receipItem);
  }

}
