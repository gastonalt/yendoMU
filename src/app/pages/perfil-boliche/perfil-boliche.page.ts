import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cards } from '../../prototypeData';

@Component({
  selector: 'app-perfil-boliche',
  templateUrl: './perfil-boliche.page.html',
  styleUrls: ['./perfil-boliche.page.scss'],
})
export class PerfilBolichePage implements OnInit {

  cards = cards;

  cardsFiltradas = [];

  bolicheYendo = this.router.getCurrentNavigation().extras?.state.bolicheYendo;

  previusUrl = this.router.getCurrentNavigation().previousNavigation.finalUrl.toString();

  constructor(private router: Router) { }

  goBack(){
    this.router.navigate(['/perfil-boliche'], {
      replaceUrl: true,
      state: {
        bolicheYendo: this.bolicheYendo
      }
    });
  }

  navigate(bolicheYendo: any){
    this.router.navigate(['/evento'], {
      replaceUrl: true,
      state: {
        bolicheYendo
      }
    });
  }

  ngOnInit() {
    this.cardsFiltradas = cards.filter((card)=>{
      return card.boliche.nombre === this.bolicheYendo.boliche.nombre
    })
  }

}
