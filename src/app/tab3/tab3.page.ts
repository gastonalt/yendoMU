import { Component, OnInit } from '@angular/core';
import { cards } from '../prototypeData';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  cards = cards;

  constructor() {}

  ngOnInit(): void {
  }

}
