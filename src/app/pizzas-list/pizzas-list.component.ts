import { Component, input } from '@angular/core';
import { tastesList } from '../interface.data';


@Component({
  selector: 'app-pizzas-list',
  imports: [],
  templateUrl: './pizzas-list.component.html',
  styleUrl: './pizzas-list.component.scss'
})
export class PizzasListComponent {
  titulo = input.required<string>();


  pizzas = input<tastesList[]>();
  claseDeLista = input.required<string>();

}
