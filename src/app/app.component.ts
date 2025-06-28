import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PizzasListComponent } from "./pizzas-list/pizzas-list.component";
import { tastesList } from './interface.data';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PizzasListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-first-menu';

  pizzasClasicas: tastesList[] = [
    {id: 1, taste: 'Muzarella', price: 1200},
    {id: 2, taste: 'Jamon Y Morron', price: 1200},
    {id: 3, taste: 'Calabresa', price: 1200},
    {id: 4, taste: 'Muzarella', price: 1200},
    {id: 5, taste: 'Muzarella', price: 1200},
  ]

  pizzasEspeciales: tastesList[] = [
    {id: 1, taste: 'Muzarella', price: 1200},
    {id: 2, taste: 'Muzzarella', price: 1200},
    {id: 3, taste: 'Muzarella', price: 1200},
    {id: 4, taste: 'Muzarella', price: 1200},
    {id: 5, taste: 'Muzarella', price: 1200},
  ]
  
}
