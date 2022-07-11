import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderComponentComponent } from '../header-component/header-component.component';
import { CardComponent } from './card/card.component';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  imports:[CommonModule,IonicModule, FileUploadModule],
  declarations:[CardComponent, HeaderComponentComponent],
  exports:[CardComponent, HeaderComponentComponent,CommonModule]
})
export class ComponentsModule{}
