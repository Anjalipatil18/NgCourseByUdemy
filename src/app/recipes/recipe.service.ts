import { InjectableCompiler } from '@angular/compiler/src/injectable_compiler';
import { EventEmitter, Injectable  } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Tasty Schnitzel', 
                   'A Super-tasty Schnitzel', 
                   'https://images.eatthismuch.com/site_media/img/280898_simmyras_1ebffade-630c-48ec-96b9-730f5a4549d1.png'
                   ,[
                       new Ingredient('Meat',1),
                       new Ingredient('French Rice',2)
                   ]),
        new Recipe('Big Fat Burger', 
        'What else you need to say?', 
        'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80'
        ,[
            new Ingredient('Bons',2),
            new Ingredient('Meat',1)
        ])
      ];

      constructor(private shoppingListService:ShoppingListService){}

      getRecipes(){
          return this.recipes.slice();
      }

      getRecipe(index:number){
        return this.recipes.slice()[index];
      }

      addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
      }
}