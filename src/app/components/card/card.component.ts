import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() titulo = '';
  @Input() descripcion = '';
  @Input() coverImg = '';
  @Input() ballColor= '';
  descripcionSliced = '';

  constructor() { }

  ngOnInit() {
    this.descripcionSliced = this.descripcion.length > 80 ? this.descripcion.slice(0,80).concat('...') : this.descripcion;
  }

}
