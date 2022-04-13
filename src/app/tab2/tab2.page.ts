import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cards } from '../prototypeData';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  buscar = false;

  boliches = [];

  cards = cards;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.boliches = this.cards;
  }

  navigateTodosLosBoliches(){
    this.router.navigate(['/todos-boliches'], {
      replaceUrl: true,
    });
  }

  navigate(bolicheYendo: any){
    this.router.navigate(['/evento'], {
      replaceUrl: true,
      state: {
        bolicheYendo,
        reservado: true
      }
    });
  }

  buscarHandler($event: any){
    if($event.target.value !== ''){
      this.boliches = [];
      this.cards.forEach(bolicheArray=>{
        // eslint-disable-next-line @typescript-eslint/prefer-for-of
        for(let i=0; i < bolicheArray.title.length; i++){
          if(bolicheArray.title.slice(i,i + $event.target.value.length).toLowerCase() === $event.target.value.toLowerCase()){
            this.boliches.push(bolicheArray);
          }
        }
      });
      console.log(this.boliches);
    }else{
      this.boliches = [];
      this.boliches = this.cards;
    }
  }

  buscarClickHandler(){
    this.buscar = !this.buscar;
  }

}
