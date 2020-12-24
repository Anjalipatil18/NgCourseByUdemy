import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private igChangeSub: Subscription;

  constructor(private shoppinglistService:ShoppingListService,
              private loggingService: LoggingService) { }
  
  ngOnInit() {
    this.ingredients = this.shoppinglistService.getIngredients();
    this.igChangeSub = this.shoppinglistService.ingradientsChanged
    .subscribe(
      (ingredients:Ingredient[])=>{
        this.ingredients = ingredients;

      }
    );
    this.loggingService.printLog('Hello from ShoppingListComponent ngOnInit!')

  }

  onEditItem(index:number){
    this.shoppinglistService.startedEditing.next(index);

  }

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
   
  }

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe()  
  }

}
