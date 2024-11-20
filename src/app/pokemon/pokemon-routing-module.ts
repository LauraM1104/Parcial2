import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { PokemonListarComponent } from "./pokemon-listar/pokemon-listar.component";
import { PokemosDetailComponent } from "./pokemon-detail/pokemos-detail.component";


const routes: Routes =[
    {
        path:'listar',
        component: PokemonListarComponent
    },
    {
        path:':id',
        component: PokemosDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PokemonRoutingModule {}
