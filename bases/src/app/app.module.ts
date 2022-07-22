import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorComonent, AppComponent } from './index';

@NgModule({
  declarations: [AppComponent, ContadorComonent],
  imports: [BrowserModule, AppRoutingModule, HeroesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
