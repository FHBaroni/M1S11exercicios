import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-m1s11ex4',
  templateUrl: './m1s11ex4.component.html',
  styleUrls: ['./m1s11ex4.component.css'],
})
export class M1s11ex4Component implements OnInit {
  arrayFotos: any = [
    {
      url:
        'https://cf.geekdo-images.com/-Qer2BBPG7qGGDu6KcVDIw__itemrep/img/Wxe36yaTzpiIVhEefHOYzFv7Ucc=/fit-in/246x300/filters:strip_icc()/pic2452831.png',
      description: 'Jogo Pandemic Legacy',
    },
    {
      url:
        'https://cf.geekdo-images.com/x3zxjr-Vw5iU4yDPg70Jgw__itemrep/img/giNUMut4HAl-zWyQkGG0YchmuLI=/fit-in/246x300/filters:strip_icc()/pic3490053.jpg',
      description: 'Jogo Brass Birmingham',
    },
    {
      url:
        'https://cf.geekdo-images.com/wg9oOLcsKvDesSUdZQ4rxw__itemrep/img/IwUOQfhP5c0KcRJBY4X_hi3LpsY=/fit-in/246x300/filters:strip_icc()/pic3536616.jpg',
      description: 'Jogo Terraforming mars',
    },
    {
      url:
        'https://cf.geekdo-images.com/sZYp_3BTDGjh2unaZfZmuA__itemrep/img/0IdBRA_G-ZdrNaxI4Z1LPQMZD0I=/fit-in/246x300/filters:strip_icc()/pic2437871.jpg',
      description: 'Jogo Gloomhaven',
    },
    {
      url:
        'https://cf.geekdo-images.com/_Ppn5lssO5OaildSE-FgFA__itemrep/img/rJfEVG0xStfVWbevNWfHBo4ZVrQ=/fit-in/246x300/filters:strip_icc()/pic3727516.jpg',
      description: 'Jogo Twilight imperium',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
