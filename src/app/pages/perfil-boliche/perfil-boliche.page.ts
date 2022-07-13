import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Boliche } from 'src/app/models/Boliche';
import { Evento } from 'src/app/models/Evento';
import { EventsService } from 'src/app/services/events.service';
import { cards } from '../../prototypeData';

@Component({
  selector: 'app-perfil-boliche',
  templateUrl: './perfil-boliche.page.html',
  styleUrls: ['./perfil-boliche.page.scss'],
})
export class PerfilBolichePage implements OnInit {

  cards: Evento[];

  cardsFiltradas = [];

  boliche: Boliche = this.router.getCurrentNavigation().extras?.state.boliche;

  previusUrl = this.router.getCurrentNavigation().previousNavigation.finalUrl.toString();

  constructor(private router: Router, private eventService: EventsService) { }

  goBack(){
    this.router.navigate(['/perfil-boliche'], {
      replaceUrl: true,
      state: {
        boliche: this.boliche
      }
    });
  }

  navigate(boliche: any){
    this.router.navigate(['/evento'], {
      replaceUrl: true,
      state: {
        boliche
      }
    });
  }

  ngOnInit() {
    this.eventService.getEventosByBoliche(this.boliche.idBoliche).subscribe(value=>{
      this.cards = value;
    })
/*     this.cardsFiltradas = cards.filter((card)=>{
      return card.boliche.nombre === this.bolicheYendo.boliche.nombre
    }) */
  }

}
