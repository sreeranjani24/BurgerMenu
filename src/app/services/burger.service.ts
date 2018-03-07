import { Injectable } from '@angular/core';
import { Burger } from '../models/burger.model';

const burgers: Burger[] = [
  {
      title: 'Cheeseburger',
      price: 2.50,
      elements: ['BUN', 'CHEESE', 'PATTY' ]
  },
   {
      title: 'Veggieburger',
      price: 3.50,
      elements: ['BUN', 'TOMATO', 'LETTUCE' ]
  },
  {
      title: 'Hamburger',
      price: 4.00,
      elements: ['BUN', 'BACON', 'CHEESE' ]
  },
  {
    title: 'Megaburger',
    price: 6.00,
    elements: ['BUN', 'BACON', 'CHEESE', 'TOMATO' ]
  },
  {
    title: 'Chickenburger',
    price: 5.50,
    elements: ['BUN', 'CHICKEN', 'CHEESE', 'LETTUCE' ]
  }

];

@Injectable()
export class BurgerMenuService {
  private burgers;

  constructor() {
    this.burgers = burgers;
  }

  getBurgers() {
    return this.burgers;
  }

}
