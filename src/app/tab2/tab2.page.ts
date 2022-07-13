import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evento } from '../models/Evento';
import { cards } from '../prototypeData';
import { EventsService } from '../services/events.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  buscar = false;

  eventos = [];

  cards = cards;

  constructor(private router: Router, private eventService: EventsService) {}

  ngOnInit(): void {
  }

  navigateTodosLosBoliches(){
    this.router.navigate(['/todos-boliches'], {
      replaceUrl: true,
    });
  }

  navigate(evento: any){
    this.router.navigate(['/evento'], {
      state: {
        evento,
      }
    });
  }

  buscarHandler($event: any){
    if($event.target.value !== ''){
      this.eventos = [];
      this.eventService.buscarEventos($event.target.value).subscribe((eventosEncontrados: Evento[])=>{
        console.log(eventosEncontrados);
        this.eventos = eventosEncontrados;
      });
/*       this.cards.forEach(bolicheArray=>{
        // eslint-disable-next-line @typescript-eslint/prefer-for-of
        for(let i=0; i < bolicheArray.title.length; i++){
          if(bolicheArray.title.slice(i,i + $event.target.value.length).toLowerCase() === $event.target.value.toLowerCase()){
            this.boliches.push(bolicheArray);
          }
        }
      });
      console.log(this.boliches); */
    }else{
      this.eventos = [];
    }
  }

  buscarClickHandler(){
    this.buscar = !this.buscar;
  }

}
