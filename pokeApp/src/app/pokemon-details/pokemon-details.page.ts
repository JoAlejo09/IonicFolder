import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokeapi } from '../services/pokeapi';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.page.html',
  styleUrls: ['./pokemon-details.page.scss'],
  standalone: false,
})
export class PokemonDetailsPage implements OnInit {
  pokemon: any;

  constructor( private route: ActivatedRoute, private pokeService:Pokeapi) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.pokeService.getPokemonbyName(id!).subscribe(data=>{
      this.pokemon = data;
    });
  }

}
