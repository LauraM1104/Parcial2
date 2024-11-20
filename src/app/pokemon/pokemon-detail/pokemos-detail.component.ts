import { Component, OnInit, Input } from '@angular/core';
import { PokemonDetailDto } from '../pokemonDetailDto';
import { HttpClient } from '@angular/common/http';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemos-detail',
  templateUrl: './pokemos-detail.component.html',
  styleUrls: ['./pokemos-detail.component.css']
})
export class PokemosDetailComponent implements OnInit {

  pokemonId! :string;
  @Input() pokemon!: PokemonDetailDto;

  constructor(private route: ActivatedRoute, private pokemonService:PokemonService) { }

  getPokemon(){
    this.pokemonService.getPokemon(this.pokemonId).subscribe(pokemon=>{
    this.pokemon = pokemon
  })
}

ngOnInit() {
if(this.pokemon== undefined){
  this.pokemonId = this.route.snapshot.paramMap.get('id')!;
  if(this.pokemonId){
    this.getPokemon();
  }
}
}

}


