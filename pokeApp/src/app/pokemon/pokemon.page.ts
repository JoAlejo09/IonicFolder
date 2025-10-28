import { Component, OnInit } from '@angular/core';
import { Pokeapi } from '../services/pokeapi';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { Route, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
  standalone: false,
})
export class PokemonPage implements OnInit {
  pokemons: any[]=[];
  isloading: boolean = false;
<<<<<<< HEAD
  limit = 10;
  offset = 0;
  totalPokemons = 0;
=======
  offset: number = 0;
  limit: number = 10;
  searchTerm : string = '';
>>>>>>> 0351f4b02baaf9bb5b10bdf0d6ac032c6cf70098

  constructor(private pokeService:Pokeapi, private router:Router, private location:Location) { }

  ngOnInit() {
    this.loadPokemons();
  }
  loadPokemons(){
    this.isloading = true;
<<<<<<< HEAD
    this.pokeService.getPokemonList(this.limit, this.offset).subscribe(data =>{
=======
    this.pokeService.getPokemonList(this.limit,this.offset).subscribe(data =>{
>>>>>>> 0351f4b02baaf9bb5b10bdf0d6ac032c6cf70098
      this.pokemons = data;
      this.isloading = false;
    },error=>{
      console.error('Error fetching pokemon data', error);
      this.isloading = false;
    })
  }
<<<<<<< HEAD
  siguientePagina(){
    this.offset += this.limit;
    this.loadPokemons();
  }
  anteriorPagina(){
    if (this.offset >= this.limit) {
=======
  searchPokemon(){
     const term = this.searchTerm.toLowerCase().trim();

    if (term) {
      this.isloading = true;
      this.pokeService.getPokemonbyName(term).subscribe(
        (data) => {
          this.pokemons = [data];
          this.isloading = false;
        },
        (error) => {
          console.error('No se encontró el Pokémon', error);
          this.pokemons = [];
          this.isloading = false;
          alert('No se encontró ese Pokémon 😢');
        }
      );
    } else {
      // Si no hay texto, recargar lista normal
      this.loadPokemons();
    }
  }
  siguiente(){
    this.offset += this.limit;
    this.loadPokemons();
  }
  anterior(){
    if(this.offset >= this.limit){
>>>>>>> 0351f4b02baaf9bb5b10bdf0d6ac032c6cf70098
      this.offset -= this.limit;
      this.loadPokemons();
    }
  }
<<<<<<< HEAD
=======
  abrirDetalles(id:string){
    this.router.navigate(['/pokemon-details', id]);
  }
  volver() {
      this.location.back(); // vuelve a la ruta anterior
  }
>>>>>>> 0351f4b02baaf9bb5b10bdf0d6ac032c6cf70098

}
