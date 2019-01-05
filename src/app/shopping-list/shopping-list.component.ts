import { Component, OnInit } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Apple", 10),
    new Ingredient("Banana", 2)
  ];
  constructor() {}

  ngOnInit() {}
  OnIngredientEntered(ingredientAdded: Ingredient) {
    this.ingredients.push(ingredientAdded);
  }
}
