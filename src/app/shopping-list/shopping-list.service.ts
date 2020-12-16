import {Subject} from 'rxjs/Subject';
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    ingradientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];

    getIngredients(){
        return this.ingredients.slice();
    }

    getIngredient(index:number){
        return this.ingredients[index];
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingradientsChanged.next(this.ingredients.slice())
    }

    addIngredients(ingredients:Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingradientsChanged.next(this.ingredients.slice())
    }

    upadteIngredient(index:number, newIngredient: Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingradientsChanged.next(this.ingredients.slice())

    }

    deleteIngredient(index:number){
        this.ingredients.splice(index,1)
        this.ingradientsChanged.next(this.ingredients.slice())
    }

}