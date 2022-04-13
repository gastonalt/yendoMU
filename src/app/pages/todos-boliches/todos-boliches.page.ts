import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cards } from 'src/app/prototypeData';

@Component({
  selector: 'app-todos-boliches',
  templateUrl: './todos-boliches.page.html',
  styleUrls: ['./todos-boliches.page.scss'],
})
export class TodosBolichesPage implements OnInit {

  cards = cards;

  previusUrl = this.router.getCurrentNavigation().previousNavigation.finalUrl.toString();

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
