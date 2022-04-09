import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderComponentComponent } from '../header-component/header-component.component';
import { CardComponent } from './card/card.component';

@NgModule({
  imports:[CommonModule,IonicModule],
  declarations:[CardComponent, HeaderComponentComponent],
  exports:[CardComponent, HeaderComponentComponent,CommonModule]
})
export class ComponentsModule{}
