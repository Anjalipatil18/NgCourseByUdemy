import  {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AuthComponent } from './auth/auth.component';

const appRoutes: Routes =   [
        {path: '', redirectTo: '/recipes', pathMatch:'full'},
        {path: 'recipes', loadChildren: './recipes/recipes.module.ts#RecipesModule'}
    ];

@NgModule({
            imports:[
                RouterModule.forRoot(appRoutes)
            ],
            exports:[
                RouterModule
            ]
})

export class AppRoutingModule{

}