import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() title = "";
  @Input() descripcion = "";
  descripcionSliced = "";
  @Input() backgroundUrl = "";
  @Input() ballColor= "";

  constructor() { }

  ngOnInit() {
    this.descripcionSliced = this.descripcion.slice(0,80).concat("...");
  }

}
