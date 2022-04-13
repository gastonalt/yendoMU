import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { cards } from '../../prototypeData';

@Component({
  selector: 'app-reservas-activas',
  templateUrl: './reservas-activas.page.html',
  styleUrls: ['./reservas-activas.page.scss'],
})
export class ReservasActivasPage implements OnInit {

  cards = cards;

  previusUrl = this.router.getCurrentNavigation().previousNavigation.finalUrl.toString();

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
        this.cards = boliches;
      }else{
        this.cards = [];
      }
    });
  }

}
