import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PizzasListComponent } from "./pizzas-list/pizzas-list.component";
import { tastesList } from './interface.data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PizzasListComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-first-menu';

  pizzasClasicas: tastesList[] = [
    {id: 1, taste: 'Muzarella', price: 1200,bigPrice: 2500, img:'muzza.png'},
    {id: 2, taste: 'Napolitana', price: 1200,bigPrice: 2500, img:'napo.png'},
    {id: 3, taste: 'Calabresa', price: 1200,bigPrice: 2500, img:'muzza.png'},
    {id: 4, taste: 'Muzarella', price: 1200,bigPrice: 2500, img:'muzza.png'},
    {id: 5, taste: 'Muzarella', price: 1200,bigPrice: 2500, img:'muzza.png'},
  ]

  pizzasEspeciales: tastesList[] = [
    {id: 1, taste: 'Muzarella', price: 1200,bigPrice: 2500, img:'muzza.png'},
    {id: 2, taste: 'Muzzarella', price: 1200,bigPrice: 2500, img:'muzza.png'},
    {id: 3, taste: 'Muzarella', price: 1200,bigPrice: 2500, img:'muzza.png'},
    {id: 4, taste: 'Muzarella', price: 1200,bigPrice: 2500, img:'muzza.png'},
    {id: 5, taste: 'Muzarella', price: 1200,bigPrice: 2500, img:'muzza.png'},
  ]

  indiceActual = 0;
  intervalo: any;

  get pizzaSeleccionada(): tastesList {
    return this.pizzasClasicas[this.indiceActual];
  }

  ngOnInit(): void {
    this.intervalo = setInterval(() => {
      this.indiceActual = (this.indiceActual + 1) % this.pizzasClasicas.length;
    }, 3000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalo);
  }
  
}
