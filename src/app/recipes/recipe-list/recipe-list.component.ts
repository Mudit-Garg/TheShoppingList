import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Recipe } from "../recipe.model";
@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      "A test recipe",
      "test desc",
      "https://picsum.photos/200/300/?random"
    ),
    new Recipe(
      "Test recipe 2",
      "test desc 2",
      "https://picsum.photos/200/300/?random"
    )
  ];

  constructor() {}

  ngOnInit() {}

  onItemSelected(recipeSelected: Recipe) {
    this.recipeWasSelected.emit({
      name: recipeSelected.name,
      description: recipeSelected.description,
      imagePath: recipeSelected.imagePath
    });
  }
}
