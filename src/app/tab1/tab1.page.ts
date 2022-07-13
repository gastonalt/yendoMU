import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { TestServiceService } from '../services/test-service.service';
import { EventsService } from '../services/events.service';
import { Evento } from '../models/Evento';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  cards: Evento[];

  constructor(public alertController: AlertController,
              private router: Router,
              private storage: Storage,
              private testService: TestServiceService,
              private eventService: EventsService) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Atención!',
      message: 'Tienes que reservar en el BOLICHE YENDO.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  navigate(evento: Evento){
    this.router.navigate(['/evento'], {
      replaceUrl: true,
      state: {
        evento
      }
    });
  }

  ngOnInit(): void {
    this.eventService.getEventos().subscribe((value: Evento[])=>{
      this.cards = value;
    });
  };

}
