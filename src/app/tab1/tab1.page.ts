import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  bolicheYendo = {
    title: 'Boliche Yendo',
    descripcion: 'Este es el único boliche donde se puede reservar en esta prueba :) Lo encontraste!',
    backgroundUrl: 'https://i0.wp.com/elpilon.com.co/wp-content/uploads/2018/04/party-wallpape.jpg?fit=800%2C500&ssl=1',
    ballColor: '#5FB8A1'
  }
  cards= [
  {
    title: 'La fiesta de la Cerveza',
    descripcion: 'Te invitamos a compartir una de las mejores fiestas en esta increible ocacion con invitados de lujo!!!',
    backgroundUrl: 'https://media.istockphoto.com/photos/dancing-friends-picture-id501387734?k=20&m=501387734&s=612x612&w=0&h=1mli5b7kpDg428fFZfsDPJ9dyVHsWsGK-EVYZUGWHpI=',
    ballColor: '#E65768'
  },{
    title: 'L4Rmx`s Party',
    descripcion: 'Una fiesta inigulable que te llenará de buenos recuerdos, ideal para venir con esa persona especial!!!',
    backgroundUrl: 'https://media.istockphoto.com/photos/people-enjoying-house-party-picture-id936276840?k=20&m=936276840&s=170667a&w=0&h=67_-ZC6VHkYUiuGJ7NPrMuWIjdJ_EWr8IoKmghYbF4Y=',
    ballColor: '#FAD566'
  }
  ]

  constructor(public alertController: AlertController) {}

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

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.cards)
  }

}
