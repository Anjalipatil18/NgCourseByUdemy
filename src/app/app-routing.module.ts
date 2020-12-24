import  {NgModule} from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const appRoutes: Routes =   [
        { path: '', redirectTo: '/recipes', pathMatch:'full' },
        { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' },
        {
            path: 'shopping-list', 
            loadChildren: './shopping-list/shopping-list.module#shoppingListModule'
        },
        {
            path: 'auth', 
            loadChildren: './auth/auth.module#AuthModule'
        }
    ];

@NgModule({
            imports:[
                RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
            ],
            exports:[
                RouterModule
            ]
})

export class AppRoutingModule{

}