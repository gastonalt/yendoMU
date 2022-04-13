import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cards } from '../prototypeData';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  cardsImp = cards;
  cardsInv = [
    {
      title: 'L4Rmx`s Party',
      descripcion: 'Una fiesta inigulable que te llenará de buenos recuerdos, ideal para venir con esa persona especial!!!',
      backgroundUrl: 'https://media.istockphoto.com/photos/people-enjoying-house-party-picture-id936276840?k=20&m=936276840&s=170667a&w=0&h=67_-ZC6VHkYUiuGJ7NPrMuWIjdJ_EWr8IoKmghYbF4Y=',
      ballColor: '#FAD566',
      fecha: '25/04/21',
      time: 18,
      boliche:{
        nombre:'Shawn',
        descripcion:'Descripcion de prueba',
        direccion:'Direccion de prueba',
        picture:'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/testing-logo-design-template-ce84480d61b3db9a8e1522a99875832f_screen.jpg?ts=1615794516'
      }
    },
    {
      title: 'La fiesta de la Cerveza',
      descripcion: 'Te invitamos a compartir una de las mejores fiestas en esta increible ocacion con invitados de lujo!!!',
      backgroundUrl: 'https://media.istockphoto.com/photos/dancing-friends-picture-id501387734?k=20&m=501387734&s=612x612&w=0&h=1mli5b7kpDg428fFZfsDPJ9dyVHsWsGK-EVYZUGWHpI=',
      ballColor: '#E65768',
      fecha: '27/01/22',
      time: 22,
      boliche:{
        nombre:'Madame',
        descripcion:'El salón de fiestas dispone de 750 metros cuadrados cubiertos, además de los 1.500 de parque',
        direccion:'Pellegrini y Rioja',
        picture:'https://chapsmusicsupervision.files.wordpress.com/2012/11/logo-madam.jpg?w=260'
      }
    }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  navigate(bolicheYendo: any){
    this.router.navigate(['/evento'], {
      replaceUrl: true,
      state: {
        bolicheYendo
      }
    });
  }

}
