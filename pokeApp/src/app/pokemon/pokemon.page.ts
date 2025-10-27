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

  constructor(private pokeService:Pokeapi) { }

  ngOnInit() {
    this.loadPokemons();
  }
  loadPokemons(){
    this.isloading = true;
    this.pokeService.getPokemonList(10).subscribe(data =>{
      this.pokemons = data;
      this.isloading = false;
    },error=>{
      console.error('Error fetching pokemon data', error);
      this.isloading = false;
    })
  }

}
