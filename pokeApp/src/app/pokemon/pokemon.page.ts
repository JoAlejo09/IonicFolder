import { Component, OnInit } from '@angular/core';
import { Pokeapi } from '../services/pokeapi';
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
  standalone: false,
})
export class PokemonPage implements OnInit {
  pokemons: any[]=[];
  isloading: boolean = false;
  limit = 10;
  offset = 0;
  totalPokemons = 0;

  constructor(private pokeService:Pokeapi) { }

  ngOnInit() {
    this.loadPokemons();
  }
  loadPokemons(){
    this.isloading = true;
    this.pokeService.getPokemonList(this.limit, this.offset).subscribe(data =>{
      this.pokemons = data;
      this.isloading = false;
    },error=>{
      console.error('Error fetching pokemon data', error);
      this.isloading = false;
    })
  }
  siguientePagina(){
    this.offset += this.limit;
    this.loadPokemons();
  }
  anteriorPagina(){
    if (this.offset >= this.limit) {
      this.offset -= this.limit;
      this.loadPokemons();
    }
  }

}
