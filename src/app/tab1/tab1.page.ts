import { Component, OnInit } from '@angular/core';
import { cards } from '../prototypeData';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { TestServiceService } from '../services/test-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  cards = cards;

  constructor(public alertController: AlertController,
              private router: Router,
              private storage: Storage,
              private testService: TestServiceService) {}

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

  navigate(bolicheYendo: any){
    this.router.navigate(['/evento'], {
      replaceUrl: true,
      state: {
        bolicheYendo
      }
    });
  }

  ngOnInit(): void {
    this.testService.getBoliches().subscribe((value)=>{
      console.log(value);
    });
  };

}
