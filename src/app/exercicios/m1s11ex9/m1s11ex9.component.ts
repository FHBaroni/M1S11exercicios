import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-m1s11ex9',
  templateUrl: './m1s11ex9.component.html',
  styleUrls: ['./m1s11ex9.component.css'],
})
export class M1s11ex9Component implements OnInit {
  objetoCard: any = {
    nomeDono: '',
    CPF: '',
    email: '',
    nomePet: '',
    codigoId: '',
  };
  showModal: boolean = false;

  salvarInformacoes() {
    this.showModal = true;
  }
  constructor() {}

  ngOnInit(): void {}
}
