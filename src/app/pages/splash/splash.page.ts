import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(public alertController: AlertController,
              private router: Router) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Atención!',
      message: 'En esta prueba no se admiten usuarios nuevos.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  ngOnInit() {
  }

  navigateLogin(){
    this.router.navigate(['/login'], {replaceUrl: true});
  }

  navigateSignUp(){
    this.router.navigate(['/signup'], {replaceUrl: true});
  }

  iniciarSesion(){
    this.router.navigate(['/f/t/tab1']);
  }

}
