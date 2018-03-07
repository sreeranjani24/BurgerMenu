import { inject, TestBed } from '@angular/core/testing';
import { BurgerMenuService } from './burger.service';
import { Burger } from '../models/burger.model';

describe('BurgerMenuService', () => {
  let burgerMenuService: BurgerMenuService;
  beforeEach(() => {
    burgerMenuService = new BurgerMenuService();
    TestBed.configureTestingModule({providers: [
      BurgerMenuService
    ]});

    burgerMenuService = jasmine.createSpyObj('burgerMenuService', ['getBurgers']);
  });

  beforeEach(inject([BurgerMenuService],
    (service: BurgerMenuService) => burgerMenuService = service));

  describe('getBurgers', () => {

    it('success', () => {
      const result: Burger[] = burgerMenuService.getBurgers();

      expect(result.length).toEqual(5);
    });
  });
});
