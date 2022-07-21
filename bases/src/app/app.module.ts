import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {
  HeroeComponent,
  ContadorComonent,
  AppComponent,
  ListadoComponent,
} from './index';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComonent,
    HeroeComponent,
    ListadoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
