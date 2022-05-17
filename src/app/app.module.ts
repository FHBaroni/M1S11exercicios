import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { M1S11ex2Component } from '../app/exercicios/m1-s11ex2/m1-s11ex2.component';
import { AppComponent } from './app.component';
import { M1s11ex3Component } from './exercicios/m1s11ex3/m1s11ex3.component';
import { M1s11ex4Component } from './exercicios/m1s11ex4/m1s11ex4.component';
import { M1s11ex5Component } from './exercicios/m1s11ex5/m1s11ex5.component';
import { M1s11ex6Component } from './exercicios/m1s11ex6/m1s11ex6.component';
import { M1s11ex8Component } from './exercicios/m1s11ex8/m1s11ex8.component';

@NgModule({
  declarations: [
    AppComponent,
    M1S11ex2Component,
    M1s11ex3Component,
    M1s11ex4Component,
    M1s11ex5Component,
    M1s11ex6Component,
    M1s11ex8Component,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
