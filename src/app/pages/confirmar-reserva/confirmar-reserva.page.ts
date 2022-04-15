import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-confirmar-reserva',
  templateUrl: './confirmar-reserva.page.html',
  styleUrls: ['./confirmar-reserva.page.scss'],
})
export class ConfirmarReservaPage implements OnInit {

  constructor(private router: Router, private storage: Storage) { }
  previusUrl = "/f/t/tab1";
  bolicheYendo = this.router.getCurrentNavigation().extras.state?.bolicheYendo;
  user = {
    nombre: 'Gastón Altamirano',
    username: 'gastonalt',
    ppic: 'https://scontent.fros2-1.fna.fbcdn.net/v/t1.6435-9/120134162_1671596756329200_2000907525780244270_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=wbF114R9MIgAX-HWYDa&_nc_ht=scontent.fros2-1.fna&oh=00_AT-F1hvEWt-vZJ-2yGKL140Mo666bWCXlZFxwwF3-1DH2A&oe=6272C048'
  };

  reservar(){
    this.storage.get('reservado').then((storageReservado: any)=>{
      if(!storageReservado){
        storageReservado = [];
      }
      storageReservado.push(this.bolicheYendo);
      this.storage.set('reservado',storageReservado).then(()=>{
        this.router.navigate(['evento'],{
          state:{
            bolicheYendo : this.bolicheYendo,
          }
        })
      })
    }
  )}
  
  ngOnInit(){
    if(this.router.getCurrentNavigation().extras.state?.previusUrl){
      this.previusUrl = this.router.getCurrentNavigation().extras.state?.previusUrl;
    }
  }

}
