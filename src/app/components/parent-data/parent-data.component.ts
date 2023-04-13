import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css'],
})
export class ParentDataComponent implements OnInit {
  @Input() name: string = '';

  // O símbolo de "!" aqui serve para inicialização nula/vazia

  @Input() userData!: {
    email: string;
    role: string;
    idade: number;
    signo: string;
  };
  constructor() {}

  ngOnInit(): void {}
}
