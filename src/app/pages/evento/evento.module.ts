import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventoPageRoutingModule } from './evento-routing.module';

import { EventoPage } from './evento.page';
import { HeaderComponentComponent } from 'src/app/header-component/header-component.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventoPageRoutingModule
  ],
  declarations: [EventoPage,HeaderComponentComponent]
})
export class EventoPageModule {}
