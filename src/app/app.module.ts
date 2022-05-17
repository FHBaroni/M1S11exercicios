import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { M1S11ex2Component } from '../app/exercicios/m1-s11ex2/m1-s11ex2.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, M1S11ex2Component],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
