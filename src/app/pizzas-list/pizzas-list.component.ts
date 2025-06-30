import { Component, input, output, OnInit, OnDestroy } from '@angular/core';
import { tastesList } from '../interface.data';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-pizzas-list',
  imports: [CommonModule],
  templateUrl: './pizzas-list.component.html',
  styleUrl: './pizzas-list.component.scss'
})
export class PizzasListComponent  {
  titulo = input.required<string>();


  pizzas = input<tastesList[]>();
  claseDeLista = input.required<string>();

  indiceActual = input<number>();

  esSeleccionada(pizza: tastesList): boolean {
  const lista = this.pizzas?.();
  const idx = this.indiceActual?.();
  if (!lista || idx === undefined || !lista[idx]) return false;
  return pizza.id === lista[idx].id;
}

}
