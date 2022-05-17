import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-m1s11ex6',
  templateUrl: './m1s11ex6.component.html',
  styleUrls: ['./m1s11ex6.component.css'],
})
export class M1s11ex6Component implements OnInit {
  cpf?: number;
  diaAniv?: number;
  senha: string = '';
  nome: string = '';
  exibir() {
    console.log(
      `nome de usuario: ${this.nome}, aniversário dia ${this.diaAniv}, cpf: ${this.cpf}, senha: ${this.senha}`
    );
  }
  constructor() {}

  ngOnInit(): void {}
}
