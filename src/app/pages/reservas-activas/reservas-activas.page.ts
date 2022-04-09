import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-reservas-activas',
  templateUrl: './reservas-activas.page.html',
  styleUrls: ['./reservas-activas.page.scss'],
})
export class ReservasActivasPage implements OnInit {

  bolicheYendo = {
    title: 'Boliche Yendo',
    descripcion: 'Este es el único boliche donde se puede reservar en esta prueba :) Lo encontraste!',
    backgroundUrl: 'https://i0.wp.com/elpilon.com.co/wp-content/uploads/2018/04/party-wallpape.jpg?fit=800%2C500&ssl=1',
    ballColor: 'transparent',
    fecha: '11/04/22',
    time: 21,
  }
  cards= [
  ];

  constructor(private router: Router, private storage: Storage) { }
  
  navigate(bolicheYendo: any){
    this.router.navigate(['/evento'], {
      replaceUrl: true,
      state: {
        bolicheYendo,
        reservado: true
      }
    });
  }

  ngOnInit() {
    this.storage.get('reservado').then((boliches)=>{
      if(boliches){
        this.cards = boliches
      }
    })
  }

}
