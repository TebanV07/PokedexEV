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
  @Input() pokemonImagen: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png'; 
  pokemonId = 0;//Id del pokemon
  pokemonObtenido = false; // Propiedad para rastrear si el Pokémon ha sido obtenido
  searchId: number = 0; // Propiedad para almacenar el ID de búsqueda
  //Evento para obtener la imagen del pokemon
  handlePokemon(event: number) {
    this.pokemonId += event;
    this.updatePokemonImage(this.pokemonId);
  }
  //Actualizar la imagen del pokemon
  updatePokemonImage(id: number) {
    this.pokemonId = id;
    this.pokemonImagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemonId}.png`;
  }
  //Evento para obtener pokemon
  toggleObtained() {
    this.pokemonObtenido = !this.pokemonObtenido; // Alterna el estado de obtenido
  }
  //Evento para reiniciar la busqueda
  searchPokemon(event: Event) {
    const input = event.target as HTMLInputElement;
    const id = Number(input.value); // Captura el valor del input como número
    this.updatePokemonImage(id); // Actualiza la imagen del Pokémon basado en el ID de búsqueda
  }
}