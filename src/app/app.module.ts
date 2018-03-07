import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BurgerMenuComponent} from './components/burger.menu.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, BurgerMenuComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
