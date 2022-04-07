import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.page.html',
  styleUrls: ['./evento.page.scss'],
})
export class EventoPage implements OnInit {

  bolicheYendo: any;
  reservado: boolean = false;
  fecha = new Date();

  constructor(private router: Router) { }

  goBack(){
    this.router.navigate(['f/t/tab1']);
  }

  reservar(){
    this.reservado = true;
  }

  ngOnInit() {
    this.bolicheYendo = this.router.getCurrentNavigation().extras?.state.bolicheYendo;
  }

}
