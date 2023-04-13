import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Gael';
  age: number = 4;
  atividade: string = 'estudante';
  college: string = 'Exatus';
  hobbies = ['brincar', 'desenhar', 'brincar de bombeiros'];

  itens: any = [
    {
      name: 'naná',
      tipo: 'fralda',
    },
    {
      name: 'caminhão de bombeiros',
      tipo: 'brinquedo',
    },
    {
      name: 'Perigoso',
      tipo: 'livro',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
