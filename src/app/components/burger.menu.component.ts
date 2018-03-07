import { Component, OnInit } from '@angular/core';
import { BurgerMenuService } from '../services/burger.service';
import { Burger } from '../models/burger.model';

@Component({
  selector: 'burger-menu',
  templateUrl: './burger.menu.component.html',
  styleUrls: ['./burger.menu.component.css'],
  providers: [BurgerMenuService]
})

export class BurgerMenuComponent implements OnInit {
  burgers: Burger[];

  constructor(private burgerService: BurgerMenuService) {
    this.burgers = this.burgerService.getBurgers();
  }

  ngOnInit() {
  }
}
