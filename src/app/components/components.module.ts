import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponentComponent } from '../header-component/header-component.component';
import { CardComponent } from './card/card.component';

@NgModule({
  imports:[CommonModule],
  declarations:[CardComponent, HeaderComponentComponent],
  exports:[CardComponent, HeaderComponentComponent,CommonModule]
})
export class ComponentsModule{}
