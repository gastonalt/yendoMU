import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  {
    title: 'La fiesta de la Cerveza',
    descripcion: 'Te invitamos a compartir una de las mejores fiestas en esta increible ocacion con invitados de lujo!!!',
    backgroundUrl: 'https://media.istockphoto.com/photos/dancing-friends-picture-id501387734?k=20&m=501387734&s=612x612&w=0&h=1mli5b7kpDg428fFZfsDPJ9dyVHsWsGK-EVYZUGWHpI=',
    ballColor: '#E65768',
    fecha: '27/01/22',
    time: 22,
  },{
    title: 'L4Rmx`s Party',
    descripcion: 'Una fiesta inigulable que te llenará de buenos recuerdos, ideal para venir con esa persona especial!!!',
    backgroundUrl: 'https://media.istockphoto.com/photos/people-enjoying-house-party-picture-id936276840?k=20&m=936276840&s=170667a&w=0&h=67_-ZC6VHkYUiuGJ7NPrMuWIjdJ_EWr8IoKmghYbF4Y=',
    ballColor: '#FAD566',
    fecha: '25/04/21',
    time: 18,
  }
  ];

  constructor(private router: Router) { }
  
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
  }

}
