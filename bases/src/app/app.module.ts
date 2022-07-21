import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HeroeComponent, ContadorComonent, AppComponent } from './index';

@NgModule({
  declarations: [AppComponent, ContadorComonent, HeroeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
