import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Bhutta Kiss ',
      'A super-tasty Kiss - just awesome!',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5zlyGhPsL2owm2yVS16L3NvEJh0_z0VSwFg&usqp=CAU',
      [
        new Ingredient('Corn pinuts', 1),
        new Ingredient('Greted corn stir fry', 20)
      ]),
    new Recipe('Shahi Paneer ',
      'A super-tasty curry - just awesome!',
      'https://i1.wp.com/alltimehungry.com/wp-content/uploads/2020/06/Shahi-Paneer-All-Time-Hunrgy.jpg?resize=795%2C481&ssl=1',
      [
        new Ingredient('Matter', 2),
        new Ingredient('Franch Rice', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
