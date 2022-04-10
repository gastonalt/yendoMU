import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.page.html',
  styleUrls: ['./evento.page.scss'],
})
export class EventoPage implements OnInit {

  bolicheYendo: any;
  reservadoView = false;
  reservado = false;
  fecha = new Date();
  previusUrl = 'f/t/tab1';

  constructor(private router: Router, private storage: Storage) { }

  goBack(){
    this.router.navigate(['f/t/tab1']);
  }

  reservar(){
    this.reservado = true;
    this.storage.get('reservado').then((storageReservado: any)=>{
      if(!storageReservado){
        storageReservado = [];
      }
      storageReservado.push(this.bolicheYendo);
      this.storage.set('reservado',storageReservado);
    });
  }

  ngOnInit() {
    this.previusUrl = this.router.getCurrentNavigation().previousNavigation.finalUrl.toString();
    this.storage.get('reservado').then((storageReservado: any[])=>{
      if(storageReservado){
        storageReservado.forEach(element => {
          if(element.title === this.bolicheYendo.title){
            this.reservado = true;
          }
        });
      }
    });
    this.bolicheYendo = this.router.getCurrentNavigation().extras?.state.bolicheYendo;
    if(this.router.getCurrentNavigation().extras?.state.reservado){
      this.reservadoView = true;
    }
  }

  cancelar(){
    this.storage.get('reservado').then((boliches: any[]) =>{
      const newArray = boliches.filter(boliche => boliche.title !== this.bolicheYendo.title);
      this.storage.remove('reservado').then(()=>{
        this.storage.set('reservado', newArray).then(()=>{
          this.router.navigate(['f/t/tab1']);
        });
      });
    });
  }

}
