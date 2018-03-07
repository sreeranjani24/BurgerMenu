import { inject, TestBed } from '@angular/core/testing';
import { BurgerMenuComponent } from './burger.menu.component';
import { BurgerMenuService } from '../services/burger.service';
import { Burger } from '../models/burger.model';


describe('BurgerMenuComponent', () => {
  let component: BurgerMenuComponent,
    mockBurgerMenuService;
  const burgerCount = 3;
  const burgers: Burger[] = new Array();
  for (let i = 1; i <= burgerCount; i++) {
    const burger = new Burger();
    burger.title = burger.title + i;
    burgers.push(burger);
  }

  beforeEach(() => {
    mockBurgerMenuService = {
      getBurgers: jasmine.createSpy('getBurgers').and.returnValue(burgers)
    };

    TestBed.configureTestingModule({
      providers: [
        {provide: BurgerMenuService, useValue: mockBurgerMenuService},
        BurgerMenuComponent
      ]
    });
  });

  beforeEach(inject([BurgerMenuComponent],
    (_component: BurgerMenuComponent) => component = _component));

  describe('class', () =>
    it('initialises members', () => {
      // Assert
      expect(component.burgers).toBe(burgers);
    }));
});
