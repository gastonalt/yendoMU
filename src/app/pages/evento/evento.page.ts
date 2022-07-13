import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Evento } from 'src/app/models/Evento';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.page.html',
  styleUrls: ['./evento.page.scss'],
})
export class EventoPage implements OnInit {

  reservadoView = false;
  reservado = false;
  fecha = new Date();
  previusUrl = this.router.getCurrentNavigation().previousNavigation.finalUrl.toString();
  evento: Evento = this.router.getCurrentNavigation().extras.state?.evento;

  constructor(private router: Router, private storage: Storage) { }

  navigateBoliche(boliche: any){
    this.router.navigate(['/perfil-boliche'], {
      replaceUrl: true,
      state: {
        boliche
      }
    });
  }

  reservar(){
//    this.reservado = true;
/*       this.router.navigate(['/confirmar-reserva'],{
        state:{
          bolicheYendo : this.bolicheYendo,
          previusUrl : this.previusUrl
        }
      }); */
  }

  ionViewWillEnter(){
/*     this.storage.get('reservado').then((storageReservado: any[])=>{
      if(storageReservado){
        storageReservado.forEach(element => {
          if(element.title === this.bolicheYendo.title){
            this.reservado = true;
          }
        });
      }
    }); */
  }

  ngOnInit() {
    if(this.previusUrl === '/perfil-boliche'){
      this.previusUrl = '/f/t/tab1';
    }
    console.log(this.evento);
/*     this.storage.get('reservado').then((storageReservado: any[])=>{
      if(storageReservado){
        storageReservado.forEach(element => {
          if(element.title === this.bolicheYendo.title){
            this.reservado = true;
          }
        });
      }
    });
    this.bolicheYendo = this.router.getCurrentNavigation().extras?.state.bolicheYendo;*/
  }

  cancelar(){
/*     this.storage.get('reservado').then((boliches: any[]) =>{
      const newArray = boliches.filter(boliche => boliche.title !== this.bolicheYendo.title);
      this.storage.remove('reservado').then(()=>{
        this.storage.set('reservado', newArray).then(()=>{
          this.router.navigate(['f/t/tab1']);
        });
      });
    }); */
  }

}
