import { Component, OnInit, Type } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { PokemonDetailDto } from '../pokemonDetailDto';
import { TypesDto } from '../../type/typeDto';

@Component({
  selector: 'app-pokemon-listar',
  templateUrl: './pokemon-listar.component.html',
  styleUrls: ['./pokemon-listar.component.css']
})
export class PokemonListarComponent implements OnInit {
  pokemons: PokemonDetailDto[] = []; 
  type: TypesDto[]=[];
  selec: boolean = false;
  SelesPoke!: PokemonDetailDto; 
  pokemonTypesCount: { [key: string]: number } = {}; 

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemonService.getPokemons();

    }
  onSelected(pokemon: PokemonDetailDto): void {
    this.selec = true;
    this.SelesPoke = pokemon; 
  }

  countPokemonTypes(): void {
    this.pokemonTypesCount = {};
    this.pokemons.forEach(pokemon => {
      pokemon.types.forEach(type => {
        if (this.pokemonTypesCount[type.name]){
          this.pokemonTypesCount[type.name]++;  
        } else {
          this.pokemonTypesCount[type.name] = 1;  }


        }
