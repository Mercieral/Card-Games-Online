import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { GamesComponent} from "../pages/games/games.component";

const routes: Routes = [
    {
        path: 'games',
        component: GamesComponent,
        pathMatch: 'full'
    },
    {
        path: '',
        redirectTo: "games",
        pathMatch: "full"
    },
    {
        path: '**',
        redirectTo: "games",
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
