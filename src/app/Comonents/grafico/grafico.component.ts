import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grafico',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css'], // Corrección: debe ser "styleUrls" en plural
})
export class GraficoComponent {
  vida: number = 2;
  ataque: number = 4;
  defensa: number = 6;
  velocidad: number= 4;
  zapatos: number[]=[];
  vidas: number[] = [];
  ataques: number[] = [];
  escudos: number[] = [];
  
  constructor() {
    this.vidas = Array(this.vida).fill(0); 
    this.ataques = Array(this.ataque).fill(0); 
    this.escudos = Array(this.defensa).fill(0);
    this.zapatos = Array(this.velocidad).fill(0); 
  }
}
