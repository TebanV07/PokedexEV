import { Component, Input } from '@angular/core';
import { GraficoComponent } from '../grafico/grafico.component';
import { PokemonComponent } from '../pokemon/pokemon.component';

@Component({
selector: 'app-pokedex-view',
standalone: true,
imports: [PokemonComponent, GraficoComponent],
templateUrl: './pokedex-view.component.html',
styleUrls: ['./pokedex-view.component.css']
})
export class PokedexViewComponent {
    @Input() pokemonImagen : string = "'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png'"; 
    pokemonId=0;     
handlePokemon(event:number) {
    this.pokemonId += event
    this.pokemonImagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemonId}.png`
}
}
